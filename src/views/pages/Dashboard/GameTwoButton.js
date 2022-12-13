import React, { useEffect, useState, useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { getThreeWayOddAPI } from "src/services/PopularOddsAPI";
import {
  addBetslipData,
  getBetslipData,
  sameLeagueCheck,
} from "src/services/placeBet";
import SnackbarService from "src/services/SnackbarService";
import { AuthContext } from "src/context/Auth";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch } from "react-redux";
import { getBetSlip } from "../../../redux/actions/getAllUsersAction";
import { setTabs } from "../../../redux/actions/rightTabs";

export default function (props) {
  const dispatch = useDispatch();
  const { id, gameData } = props;
  const auth = useContext(AuthContext);
  const [home, setHome] = React.useState(0);
  const [away, setAway] = React.useState(0);
  const [draw, setDraw] = React.useState(0);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");

  const useStyles = makeStyles((theme) => ({
    black2: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 37px",
      background: "#222222",
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
      borderTop: "1px solid rgba(250, 145, 49, 1)",
      borderLeft: "1px solid rgba(250, 145, 49, 1)",
      borderRight: "1px solid rgba(187, 0, 90, 1)",
      borderBottom: "1px solid rgba(187, 0, 90, 1)",
    },
    black1: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 37px",
      background: "#222222",
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
      borderTop: "1px solid rgba(69, 129, 238, 1)",
      borderLeft: "1px solid rgba(69, 129, 238, 1)",
      borderRight: "1px solid rgba(39, 203, 241, 1)",
      borderBottom: "1px solid rgba(39, 203, 241, 1)",
    },
    black3: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 37px",
      background: "#222222",
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
      borderTop: "1px solid rgba(69, 129, 238, 1)",
      borderLeft: "1px solid rgba(69, 129, 238, 1)",
      borderRight: "1px solid rgba(92, 61, 255, 1)",
      borderBottom: "1px solid rgba(92, 61, 255, 1)",
    },
    playerImg: {
      width: "18px !important",
      height: "17px !important",
      borderRadius: "50%",
    },
    ot: {
      font: "normal 400 10px/13px K2D",
    },
  }));
  useEffect(() => {
    getMoneyLine();
  }, []);
  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 5000);
  };
  const createBetSlip = (
    data,
    sumOdds,
    sumTotalStake,
    sumTotalPayout,
    checkLeague
  ) => {
    dispatch(getBetSlip(data, sumOdds, sumTotalStake, sumTotalPayout));
  };
  const [inputList, setInputList] = useState([
    {
      id: "",
      odds: "",
      betType: "",
      gameData: [],
      amount: 0,
      totalWin: 0,
    },
  ]);
  const _addBetSlip = async (id, odds, betType, gameData) => {
    dispatch(setTabs("betSlip"));
    let array = getBetslipData();
    var checkLeague;
    const league = array.map((item) => item.id);
    checkLeague = league?.includes(id);
    sameLeagueCheck(checkLeague);

    array.push({
      id: id,
      odds: odds,
      betType: betType,
      gameData: gameData,
      amount: 0,
      totalWin: 0,
      checkLeague: checkLeague,
    });
    const x = array.map((item) => item.checkLeague);
    const y = x?.includes(true);
    sameLeagueCheck(y);
    const totalOddsArray = array.map((item) => Number(item.odds));
    const totalStakeArray = array.map((item) => Number(item.amount));
    const sumTotalStake = totalStakeArray.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    const totalPayoutArray = array.map((item) => Number(item.totalWin));
    const sumTotalPayout = totalPayoutArray.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    const sumOdds = parseFloat(
      totalOddsArray.reduce((partialSum, a) => partialSum * a)
    ).toFixed(2);
    const a = Number(sumOdds);
    addBetslipData(array);
    if (auth.isLogin()) {
      const res = await createBetSlip(array, a, sumTotalStake, sumTotalPayout);
      if (res) {
        snackBar("Add bet successfully.", "success");
      }
    } else {
      snackBar("Please connect your wallet to place a bet.", "danger");
    }
  };

  const getMoneyLine = async () => {
    const responseSpreads = await getThreeWayOddAPI(id);

    if (!isEmptyObj(responseSpreads)) {
      setHome(responseSpreads.bets[0].values[0].odd);
      setAway(responseSpreads.bets[0].values[2].odd);
      setDraw(responseSpreads.bets[0].values[1].odd);
    } else {
      setHome(0);
      setAway(0);
      setDraw(0);
    }
  };

  const isEmptyText = (value) => {
    if (value != null && value != undefined && value != 0) {
      return true;
    } else {
      return false;
    }
  };

  const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const classes = useStyles();
  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      <Box>
        <Box>
          {away == 0 ? (
            <Tooltip
              title="Odds not provides from API-Basketball RapidAPI"
              arrow
            >
              <Button
                variant="outlined"
                color="primary"
                className={classes.black1}
              >
                {away ? away : "-"}
              </Button>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              className={classes.black1}
              onClick={() => {
                _addBetSlip(id, away, "Money Line Away", gameData);
              }}
            >
              <img
                className={classes.playerImg}
                src={
                  gameData?.teams?.away.logo ? gameData?.teams?.away?.logo : ""
                }
              />{" "}
              &nbsp;&nbsp;&nbsp;
              {away ? away : "-"}
            </Button>
          )}
        </Box>
        <Box mt={2}>
          {draw == 0 ? (
            <Tooltip
              title="Odds not provides from API-Basketball RapidAPI"
              arrow
            >
              <Button
                variant="outlined"
                color="primary"
                className={classes.black2}
              >
                {draw ? draw : "-"}
              </Button>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              className={classes.black2}
              onClick={() => {
                _addBetSlip(id, draw, "Money Line Draw", gameData);
              }}
            >
              <span className={classes.ot}>OT</span>&nbsp;&nbsp;&nbsp;
              {draw ? draw : "-"}
            </Button>
          )}
        </Box>
        <Box mt={2}>
          {home == 0 ? (
            <Tooltip
              title="Odds not provides from API-Basketball RapidAPI"
              arrow
            >
              <Button
                variant="outlined"
                color="primary"
                className={classes.black3}
              >
                {home ? home : "-"}
              </Button>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              className={classes.black3}
              onClick={() => {
                _addBetSlip(id, home, "Money Line Home", gameData);
              }}
            >
              <img
                className={classes.playerImg}
                src={
                  gameData?.teams?.home.logo ? gameData?.teams?.home?.logo : ""
                }
              />{" "}
              &nbsp;&nbsp;&nbsp;
              {home ? home : "-"}
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
