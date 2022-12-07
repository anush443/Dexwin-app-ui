import { Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Slide,
  IconButton,
} from "@material-ui/core";
import BetBox from "src/component/BetBox";
import { useHistory } from "react-router-dom";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import ParlaySuggestion from "src/component/ParlaySuggestion";
import MyBets from "src/views/pages/MyBets/MyBets";
import { AuthContext } from "src/context/Auth";
import { orderplace } from "src/services/MoneyLineBets";
import SnackbarService from "src/services/SnackbarService";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useNewMoralisObject } from "react-moralis";
import { useSelector, useDispatch } from "react-redux";
import {
  addBetslipData,
  getBetslipData,
  sameLeagueCheck,
} from "src/services/placeBet";
import {
  getBetSlip,
  getParlayBetSlip,
} from "../redux/actions/getAllUsersAction";
import {getBalanceAction} from "../redux/actions/balanceAction";
import { updateBalance } from "../services/updateBalance";
const useStyles = makeStyles((theme) => ({
  boxRelative: {
    position: "relative",
    height: "80vh",
    textAlign: "center",
  },
  titleDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  boxFixedCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  centerIcon: {
    fontSize: "9rem",
    color: "rgba(255, 255, 255, 0.2)",
  },
  textContent: {
    color: "rgba(255, 255, 255, 0.2)",
    fontSize: "1rem",
    userSelect: "none",
  },
  UserBox: {
    "& h5": {
      color: theme.palette.text.noticetext,
    },
  },
  acitiveBox: {
    "& button": {
      minWidth: "auto",
    },
    "& button": {
      minWidth: "auto",
      borderRadius: "5px",
      padding: "6px 27px",
      background: theme.palette.button.primary,
      "&.active": {
        color: "#444343",
        background:
          "linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%)",
        boxShadow:
          "-10px -10px 20px rgba(255, 255, 255, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  acitiveBox1: {
    "& button": {
      minWidth: "auto",
      borderRadius: "10px",
      padding: "6px 27px",
      "&.active": {
        border: "1px solid #70D5FB",
        borderRadius: "10px",
      },
    },
  },
  ButtonBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",

    "& button": {
      borderRadius: "50px",
      minWidth: "auto",
      height: "40px",
      fontWeight: "800",
      color: theme.palette.text.white,
      background: theme.palette.background.default,
      border: "none !important",
      boxShadow:
        "-6px -7px 10px rgb(255 255 255 / 5%), 2px 2px 20px rgb(0 0 0 / 56%)",
      fontSize: "14px",
      whiteSpace: "pre",

      "&.active": {
        color: "#ffff",
        border: "3px solid rgba(112, 213, 251, 1) !important",
      },
    },
  },
  greenButton: {
    background: "linear-gradient(99.01deg, #8DE6D1 6.49%, #71FEA3 97.08%);",

    color: "#444343",
    fontSize: "17px",
    fontWeight: 700,
  },
  fullscreenModal: {
    "& .MuiDialog-paperFullScreen": {
      top: "26px",
      height: "calc(100% - 80px)",
      background: theme.palette.background.paper,
    },
  },
  appBar: {
    position: "relative",
    borderRadius: "43px",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Sidebet(props) {
  const dispatch = useDispatch();
  const auth = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userBets, setUserBets] = React.useState([]);
  const [tabviewsideBet, setTabViewsideBet] = useState("betSlip");
  const [loader, setLoader] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const { save } = useNewMoralisObject("Bets");
  const betSlipData = useSelector((state) => state?.getAllReducer?.betSlip);
  const betParlaySlipData = useSelector(
    (state) => state?.getAllReducer?.betParlaySlip
  );

  useEffect(() => {}, []);

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const betnow = async () => {
    setLoader(true);
    const amount = Number(betSlipData.totalStake);
    console.log("amount : ", amount);

    var array = [];
    betSlipData.data.forEach((element) => {
      let dataArr = [];
      dataArr.push(element);
      array.push({
        data: dataArr,
        totalOdds: element.odds,
        totalPayout: element.totalWin,
        totalStake: element.amount,
      });
    });

    if (amount < 5 || amount == NaN) {
      snackBar("Please! Enter minimum amount $5", "danger");
      setLoader(false);
      return;
    }

    if (amount > 1000) {
      snackBar("Maximum amount $1000 for bet place.", "danger");
      setLoader(false);
      return;
    }

    const res = await orderplace(betSlipData.totalStake);
    const balance =  await updateBalance();
    if (res) {
      var bar = new Promise((resolve, reject) => {
        array.forEach((eleData, index, array) => {
          const data = {
            totalOdds: Number(eleData.totalOdds),
            userAddress: localStorage.getItem("userAddress").toString(),
            // betType: eleData[0].betType,
            // gameId: eleData[0].gameId,
            totalPayout: Number(eleData.totalPayout),
            betList: eleData.data,
            transactionHash: res.transactionHash,
            totalStake: Number(eleData.totalStake),
            // gameData: betSlipData[0].gameData,
          };
          dispatch(getBalanceAction(balance));
          save(data, {
            onSuccess: (monster) => {
              snackBar(
                "Place bet successfully. With transaction has " +
                  res.transactionHash,
                "success"
              );

              if (index === array.length - 1) {
                resolve();
              }
            },
            onError: (error) => {
              snackBar(
                "Failed to create new object, with error code: " +
                  error.message,
                "danger"
              );
            },
          });
        });
      });

      bar.then(() => {
        dispatch(getBetSlip([], 0, 0, 0));
        addBetslipData([]);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      });
    } else {
      setLoader(false);
    }
  };

  const preventDefault = (event) => event.preventDefault();

  const handleInputChange = (e, i, element) => {
    let array = getBetslipData();

    var arr = [];
    const { name, value } = e.target;

    const winAmount = Number(Number(value) * Number(element.odds)).toFixed(0);
    array[i].amount = value;

    array[i].totalWin = winAmount;
    const totalStakeArray = array.map((item) => Number(item.amount));
    const sumTotalStake = totalStakeArray.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    const sumOdds = betSlipData?.totalOdds;
    const totalPayoutArray = array.map((item) => Number(item.totalWin));
    const sumTotalPayout = totalPayoutArray.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    addBetslipData(array);
    dispatch(getBetSlip(array, sumOdds, sumTotalStake, sumTotalPayout));
  };
  const [parlayAmount, setParlayAmount] = useState("");
  const [parlayWinAmount, setParlayWinAmount] = useState("");

  const parlayBetNow = async () => {
    setLoader(true);

    const amount = Number(betParlaySlipData.totalStake);
    console.log("amount : ", amount);

    if (amount < 5 || amount == NaN) {
      snackBar("Please! Enter minimum amount $5", "danger");
      setLoader(false);
      return;
    }

    if (amount > 1000) {
      snackBar("Maximum amount $1000 for bet place.", "danger");
      setLoader(false);
      return;
    }

    const res = await orderplace(betParlaySlipData.totalStake);

    if (res) {
      const data = {
        totalOdds: betParlaySlipData.totalOdds,
        userAddress: localStorage.getItem("userAddress").toString(),
        // betType: betParlaySlipData[0].betType,
        // gameId: betParlaySlipData[0].gameId,
        totalPayout: betParlaySlipData.totalPayout,
        betList: betParlaySlipData.data,
        transactionHash: res.transactionHash,
        totalStake: betParlaySlipData.totalStake,
        // gameData: betSlipData[0].gameData,
      };

      save(data, {
        onSuccess: (monster) => {
          snackBar(
            "Place bet successfully. With transaction has " +
              res.transactionHash,
            "success"
          );
          dispatch(getBetSlip([], 0, 0, 0));
          addBetslipData([]);
          setTimeout(() => {
            setLoader(false);
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
      setLoader(false);
    }
  };

  const handleMultipleBets = (e, element) => {
    let array = getBetslipData();
    var arr = [];
    const { name, value } = e.target;
    setParlayAmount(Number(value));
    const sumOdds = betSlipData?.totalOdds;
    const sumTotalStake = Number(value);
    const sumTotalPayout = Number(value) * sumOdds;
    setParlayWinAmount(sumTotalPayout);
    addBetslipData(array);
    console.log(array, "arrayyyyyyy");

    dispatch(getParlayBetSlip(array, sumOdds, sumTotalStake, sumTotalPayout));
  };

  const cancelBet = (index) => {
    console.log(index, "index");
    let array = getBetslipData();
    // delete array[index];
    array.splice(index, 1);
    const totalStakeArray = array.map((item) => Number(item.amount));
    const sumTotalStake = totalStakeArray.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    const x = array.map((item) => item.checkLeague);
    const y = x?.includes(true);
    console.log(array, "1111111111");
    sameLeagueCheck(y);
    const totalOddsArray = array.map((item) => Number(item.odds));
    totalOddsArray.splice(index,1)
    const sumOdds = parseFloat(totalOddsArray.reduce((partialSum, a) => partialSum * a)).toFixed(1);
    const totalPayoutArray = array.map((item) => Number(item.totalWin));
    const sumTotalPayout = totalPayoutArray.reduce(
      (partialSum, a) => partialSum + a,
      0
    );

    addBetslipData(array);
    dispatch(getBetSlip(array, sumOdds, sumTotalStake, sumTotalPayout));
  };
  const clearAll = () => {
    addBetslipData([]);
    sameLeagueCheck(false);
    dispatch(getBetSlip([]));
  };
  const userRightContent = () => {
    const data = JSON.parse(localStorage.getItem("betslips"));

    return (
      <Box className={classes.UserBox}>
        <Box className={classes.ButtonBox}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                fullWidth
                className={tabviewsideBet === "betSlip" ? "active" : ""}
                onClick={() => setTabViewsideBet("betSlip")}
              >
                BET SLIP
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                className={tabviewsideBet === "Mybets" ? "active" : ""}
                onClick={() => setTabViewsideBet("Mybets")}
              >
                MY BETS
              </Button>
            </Grid>
          </Grid>
        </Box>
        {tabviewsideBet === "betSlip" ? (
          betSlipData?.data && betSlipData?.data.length > 0 ? (
            <>
              <Box mt={2}>
                <div className={classes.titleDiv}>
                  {" "}
                  <Typography variant="body2" color="primary">
                    Your Bets
                  </Typography>
                  <button onClick={clearAll}>Clear All</button>
                </div>

                {betSlipData?.data.map((element, index) => {
                  return (
                    <BetBox
                      element={element}
                      index={index}
                      handleInputChange={handleInputChange}
                      cancelBet={cancelBet}
                    />
                  );
                })}
              </Box>
              <Box mt={2}>
                {/* <Box className="justifyBetween" mb={1}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className="textBlue"
                  >
                    Total Odds
                  </Typography>
                  <Typography
                    variant="h5"
                    color="noticetext"
                    style={{ fontSize: "15px" }}
                  >
                    {betSlipData?.totalOdds}
                  </Typography>
                </Box> */}

                <Box className="justifyBetween" mb={1}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className="textBlue"
                  >
                    Total Stake
                  </Typography>
                  <Typography
                    variant="h5"
                    color="white"
                    style={{ fontSize: "15px" }}
                  >
                    {betSlipData?.totalStake}
                  </Typography>
                </Box>
                <Box className="justifyBetween" mb={1}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className="textBlue"
                  >
                    Total Payout
                  </Typography>
                  <Typography
                    variant="h5"
                    color="white"
                    style={{ fontSize: "15px" }}
                  >
                    {betSlipData?.totalPayout}
                  </Typography>
                </Box>
              </Box>
              <Box mt={2} align="center">
                {loader ? (
                  <Button
                    variant="contained"
                    size="large"
                    disabled
                    fullWidth
                    className={classes.greenButton}
                  >
                    <CircularProgress color="secondary" />
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => betnow()}
                    fullWidth
                    className={classes.greenButton}
                  >
                    Bet Now
                  </Button>
                )}
              </Box>
              <Box mt={2}>
                {betSlipData.data.length === 1 ? (
                  <></>
                ) : (
                  <ParlaySuggestion
                    handleMultipleBets={handleMultipleBets}
                    parlayAmount={parlayAmount}
                    parlayWinAmount={parlayWinAmount}
                    parlayBetNow={parlayBetNow}
                  />
                )}
              </Box>
            </>
          ) : (
            <>
              <div className={classes.boxRelative}>
                <div className={classes.boxFixedCenter}>
                  <IconButton disabled>
                    <ConfirmationNumberIcon className={classes.centerIcon} />
                  </IconButton>
                  <div className={classes.textContent}>
                    Add your event, <br />
                    choose your odd, <br />
                    Place Your Bet
                  </div>
                </div>
              </div>
            </>
          )
        ) : (
          ""
        )}

        {tabviewsideBet === "Mybets" ? (
          <>
            <MyBets type="Sidebet" />
          </>
        ) : (
          ""
        )}
      </Box>
    );
  };

  const guestRightContent = () => {
    return (
      <Box className={classes.UserBox}>
        <Box className={classes.ButtonBox}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                fullWidth
                className={tabviewsideBet === "betSlip" ? "active" : ""}
              >
                BET SLIP
              </Button>
            </Grid>
          </Grid>
        </Box>
        {tabviewsideBet === "betSlip" ? (
          <>
            <div className={classes.boxRelative}>
              <div className={classes.boxFixedCenter}>
                <IconButton disabled>
                  <ConfirmationNumberIcon className={classes.centerIcon} />
                </IconButton>
                <div className={classes.textContent}>
                  Add your event, <br />
                  choose your odd, <br />
                  Place Your Bet
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </Box>
    );
  };

  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      {auth.isLogin() ? userRightContent() : guestRightContent()}
    </>
  );
}
