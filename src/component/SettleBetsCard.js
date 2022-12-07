import React from "react";
import { makeStyles, Box, Typography, Paper, Button } from "@material-ui/core";
import { IoBasketballSharp } from "react-icons/io5";
import dateFormat from "dateformat";
// import dexwin from "src/images/dexwin.svg";

const useStyles = makeStyles((theme) => ({
  headerBetWin: {
    background: theme.palette.background.heading,
    padding: "8px 12px",
    "& p.win": {
      color: "#39AED0",
    },
  },
  secondMainBox: { padding: "10px" },
  subtitle: {
    paddingTop: "5px",
    "& svg": {
      color: "#39AED0",
      fontSize: "16px",
      marginRight: "7px",
      zIndex: "1"
    },
    "& h6": {
      fontSize: "14px",
      lineHeight: "1.2",
      color: theme.palette.text.noticetext,
      zIndex: "1"
    },
  },
  winnig: {
    position: "relative",
    borderRadius: "20px 20px 10px 10px",
    boxShadow:
      "0px 0px 2px rgb(255 255 255 / 40%), 5px 5px 10px rgb(0 0 0 / 25%)",
    zIndex: "1",
    "&::before": {
      content: "' '",
      position: "absolute",
      top: "-2px",
      left: "-2px",
      height: "calc(100% + 4px)",
      width: "calc(100% + 4px)",
      zIndex: "-1",
      borderRadius: "10px",
      backgroundColor: "transparent",
      backgroundImage:
        "linear-gradient(315deg, #70fbab 10%, #4b6483 35%, #b621fe00 54%)",
      "& .mainBox": {
        position: "absolute",
        top: "0px",
        left: "0px",
      },
    },
  },
  loss: {
    zIndex: "1",
    position: "relative",
    borderRadius: "20px 20px 10px 10px",
    boxShadow:
      "0px 0px 2px rgb(255 255 255 / 40%), 5px 5px 10px rgb(0 0 0 / 25%)",

    "&::before": {
      content: "' '",
      position: "absolute",
      top: "-2px",
      left: "-2px",
      zIndex: "-1",
      height: "calc(100% + 4px)",
      width: "calc(100% + 4px)",
      backgroundColor: "transparent",
      // backgroundImage:
      //   "linear-gradient(315deg, #c23a28 10%, #f91f55 35%, #b621fe00 54%)",
      borderRadius: "10px",
      "& .mainBox": {
        position: "absolute",
        top: "0px",
        left: "0px",
      },
    },
  },
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
  claim: {
    width: "61px",
    height: "17px",
    borderRadius: "39px",
    border: " 1px solid rgba(141, 230, 209, 1)",
    padding: "9px"
  },
  Flexcontain: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px  "
  },
  miniflex: {
    display: "flex",
  },
  centerImg: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  zIndex1: {
    zIndex: "1"
  }
}));

function SettleBetsCard(props) {
  const classes = useStyles();
  const { data } = props;

  const getTeamName = (data, bettype) => {
    if (bettype?.search("Home") > 0 || bettype?.search("home") > 0) {
      return data?.home?.name;
    } else if (bettype?.search("Away") > 0 || bettype?.search("away") > 0) {
      return data?.away?.name;
    } else {
      return data?.home?.name + " - " + data?.away?.name;
    }
  };
  console.log(data, "settle");
  return (
    <Box
      className={
        data.attributes?.status === "Win"
          ? `${classes.winnig}`
          : `${classes.loss}`
      }
    >
      <Paper className="mainBox" elevation={2}>

      {/* <img src={dexwin} className={classes.centerImg}/> */}
        <Box className={`${classes.headerBetWin} justifyBetween`}>
          <div className={classes.Flexcontain}>
            <div>
              {data.attributes?.status === "Win" ? (
                <>
                  <div className={classes.miniflex}>
                    <Typography
                      variant="body2"
                      className="win"   
                      style={{ color: "#3BBD2A" }}
                    >
                      Win
                    </Typography>
                    &nbsp;&nbsp;
                    <Button className={classes.claim}>Claim</Button>
                  </div>
                </>
              ) : (
                <Typography
                  variant="body2"
                  className="win"
                  style={{ color: "#787878" }}
                >
                  Loss
                </Typography>
              )}
            </div>
            <Typography variant="body2">
              {dateFormat(data.attributes?.createdAt, "hh:MM TT dd/mm/yyyy")}
            </Typography>
          </div>
        </Box>
        {console.log("data.attributes?.betList: ", data.attributes?.betList)}
        <Box className={classes.secondMainBox}>
          {data.attributes?.betList?.map((ele) => {
            return (
              <>
                <Box my={1} className={`${classes.subtitle} flexjustify`}>
                  <IoBasketballSharp />
                  <Typography variant="body2" className={classes.zIndex1}>
                    {getTeamName(ele?.gameData?.teams, ele?.betType)}
                  </Typography>
                </Box>
                <Box className={`${classes.subtitle} justifyBetween`}>
                  <Typography className={classes.zIndex1} variant="body2">{ele?.betType}</Typography>
                  <Typography className={classes.zIndex1} variant="h6"> {ele?.odds} </Typography>
                </Box>
                {/* <Box mt={1}>
                    <Typography variant="h6">2-3</Typography>
                  </Box> */}
                <hr style={{ border: "1px solid rgba(71, 71, 71, 0.3)" }} />
              </>
            );
          })}
          <Box mt={1}>
            <Box className={classes.lowerbetbox}>
              <Box className="justifyBetween">
                <Typography variant="body1" className={`blue ${classes.zIndex1}`}>
                  Total Odds
                </Typography>
                <Typography variant="h6" className={classes.zIndex1}>
                  {data.attributes?.totalOdds}
                </Typography>
              </Box>
              <Box className="justifyBetween">
                <Typography variant="body1" className={`blue ${classes.zIndex1}`}>
                  Total Stake
                </Typography>
                <Typography variant="body1" className={`icontext ${classes.zIndex1}`}>
                  {" "}
                  $ {data.attributes?.totalStake}{" "}
                </Typography>
              </Box>
              <Box className="justifyBetween">
                <Typography variant="body1" className={`blue ${classes.zIndex1}`}>
                  Payout
                </Typography>
                <Typography variant="body1" className={`icontext green ${classes.zIndex1}`} >
                  {" "}
                  $ {data.attributes?.totalPayout}{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default SettleBetsCard;
