import React, { useState, useEffect } from "react";
import { makeStyles, Box, Typography, Paper, Button } from "@material-ui/core";
import { IoBasketballSharp } from "react-icons/io5";
import { BsCheck2 } from "react-icons/bs";
import dateFormat from "dateformat";
import { claimBet } from "src/services/MoneyLineBets";
import SnackbarService from "src/services/SnackbarService";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useMoralis, useNewMoralisObject } from "react-moralis";
import { useSelector, useDispatch } from "react-redux";
import { getSingleGame } from "src/services/ApiCall";
import {getBalanceAction} from "../redux/actions/balanceAction";
import { updateBalance } from "../services/updateBalance";

const useStyles = makeStyles((theme) => ({
  headerBetWin: {
    background: theme.palette.background.heading,
    padding: "8px 12px",
    "& p.win": {
      color: "#E45A5A",
    },
  },
  secondMainBox: { padding: "10px" },
  subtitle: {
    paddingTop: "5px",
    "& svg": {
      color: "#39AED0",
      fontSize: "16px",
      marginRight: "7px",
    },
    "& h6": {
      fontSize: "14px",
      lineHeight: "1.2",
      color: theme.palette.text.noticetext,
    },
  },
  mainBox: {},
  lowerbetbox: {
    "& p": {
      fontSize: "12px",
      marginBottom: "4px",

      "&.blue": { color: "#39AED0" },
    },
    "& h6": {
      fontSize: "14px",
    },
    "& svg": {
      color: "orange",
      fontSize: "14px",
      marginLeft: "10px",
    },
  },
  loweroponent: {
    borderTop: "1px dashed rgba(102, 162, 211, 0.3);",
    paddingTop: "7px",
  },
  footerBetWin: {
    background: "#39AED0",
    padding: "8px 12px",
    cursor: "pointer",
    "& p.win": {
      color: "#E45A5A",
    },
  },
  cashoutButton: {
    padding: "unset !important",
    margin: "unset",
    height: "auto",
    background: "transparent",
    border: "unset",
    outline: "unset",
    boxShadow: "unset",

    "&:hover": {
      padding: "unset !important",
      margin: "unset",
      height: "auto",
      background: "transparent",
      border: "unset",
      outline: "unset",
      boxShadow: "unset",
    },
  },
  centerImg: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-88%, -39%)",
  },
  zIndex1: {
    zIndex: "1"
  }
}));

var array = [];
function ActiveBetsCard(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { Moralis } = useMoralis();
  const [status, setStatus] = useState(false);

  const [loader, setLoader] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const [matchDetails, setMatchDetails] = useState([]);
  const { save } = useNewMoralisObject("SettleBets");
  const { data, getActiveBets, getSettleBets } = props;
  const [gameStatus, setGameStatus] = useState("");
  const [isgame, setIsgame] = useState(false);
  useEffect(() => {
    // console.log("matchD : ", getSingleMatcheDetails(data.attributes?.gameId));
  }, []);

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };

  const deleteData = async (obj) => {
    const query = new Moralis.Query("Bets");
    query.equalTo("objectId", obj);
    const object = await query.first();
    if (object) {
      object.destroy({ useMasterKey: true }).then(
        () => {
          console.log("Deleted Successfully!");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const claim = async () => {
    setLoader(true);

    const res = await claimBet(
      Number(data.attributes?.totalOdds),
      data.attributes?.totalPayout
    );

    if (res) {
      const balance =  await updateBalance();
      const _data = {
        totalOdds: data.attributes?.totalOdds,
        userAddress: localStorage.getItem("userAddress").toString(),
        betList: data.attributes?.betList,
        totalPayout: data.attributes?.totalPayout,
        totalStake: data.attributes?.totalStake,
        transactionHash: res.transactionHash,
        status: "Win",
      };
      dispatch(getBalanceAction(balance));

      save(_data, {
        onSuccess: (monster) => {
          deleteData(data.id);
          snackBar(
            "Claim bet successfully. With transaction has " +
              res.transactionHash,
            "success"
          );
          setLoader(false);
          setTimeout(() => {
            getActiveBets();
            getSettleBets();
          }, 1000);
        },
        onError: (error) => {
          snackBar(
            "Failed to create new object, with error code: " + error.message,
            "danger"
          );
        },
      });
    } else {
      snackBar("Something went wrong", "danger");
      setLoader(false);
    }
  };

  const getTeamName = (data, bettype) => {
    if (bettype?.search("Home") > 0 || bettype?.search("home") > 0) {
      return data?.home?.name;
    } else if (bettype?.search("Away") > 0 || bettype?.search("away") > 0) {
      return data?.away?.name;
    } else {
      return data?.home?.name + " - " + data?.away?.name;
    }
  };

  const getCashOutBtn = () => {
    return (
      <>
        <Box className={`${classes.footerBetWin} flexjustifycenter`}>
          {loader ? (
            <Button
              variant="contained"
              size="large"
              disabled
              fullWidth
              className={`${classes.cashoutButton}`}
            >
              <CircularProgress color="secondary" />
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              onClick={() => claim()}
              fullWidth
              className={`${classes.cashoutButton}`}
            >
              (<>Cashout ${data.attributes?.totalPayout}</>)
            </Button>
          )}
        </Box>
      </>
    );
  };

  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      {
        <Paper className={classes.mainBox} elevation={2}>
          <Box className={`${classes.headerBetWin} flexjustifycenter`}>
            <Typography variant="body2">
              {dateFormat(data.attributes?.createdAt, "hh:MM TT dd/mm/yyyy")}
            </Typography>
          </Box>
          <Box className={classes.secondMainBox}>
            {data.attributes?.betList?.map((ele) => {
              return (
                <>
                  <Box pb={1}>
                    <Box my={1} className={`${classes.subtitle} flexjustify`}>
                      <IoBasketballSharp />
                      <Typography variant="body2">
                        {getTeamName(ele?.gameData?.teams, ele?.betType)}
                      </Typography>
                    </Box>
                    <Box my={1} className={`${classes.subtitle} flexjustify`}>
                      <Typography variant="body2">{ele?.betType}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" style={{ color: "#39AED0" }}>
                        Correct Score
                      </Typography>
                    </Box>
                    <Box className={`${classes.subtitle} justifyBetween`}>
                      <Typography variant="h6">
                        <BsCheck2 />
                        {ele?.odds}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {" "}
                        {ele?.odds}{" "}
                      </Typography>
                    </Box>
                    {/* <Box>
                        <Typography variant="h6">2-3</Typography>
                      </Box> */}
                  </Box>
                  <hr style={{ border: "1px solid rgba(71, 71, 71, 0.3)" }} />
                </>
              );
            })}
            <Box mt={1}>
              <Box className={classes.lowerbetbox}>
                <Box className="justifyBetween">
                  <Typography variant="body1" className="blue">
                    Total Odds
                  </Typography>
                  <Typography variant="h6">
                    {data.attributes?.totalOdds}
                  </Typography>
                </Box>
                <Box className="justifyBetween">
                  <Typography variant="body1" className="blue">
                    Total Stake
                  </Typography>
                  <Typography variant="body1" className="icontext">
                    {" "}
                    $ {data.attributes?.totalStake}{" "}
                  </Typography>
                </Box>
                <Box className="justifyBetween">
                  <Typography variant="body1" className="blue">
                    Payout
                  </Typography>
                  <Typography variant="body1" className="icontext green">
                    {" "}
                    {gameStatus == "Loss" ? (
                      <>$ 00</>
                    ) : (
                      <>$ {data.attributes?.totalPayout}</>
                    )}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {data.attributes?.status == "BET_WIN_SETTLE" ? getCashOutBtn() : ""}
        </Paper>
      }
    </>
  );
}

export default ActiveBetsCard;
