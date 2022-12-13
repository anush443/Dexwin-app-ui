import React, { useEffect, useState, useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircleSlider } from "react-circle-slider";
import { AuthContext } from "src/context/Auth";
import {
  getSpreadOddAPI,
  getOverUnderOddAPI,
} from "src/services/PopularOddsAPI";
import { useDispatch } from "react-redux";
import { getBetSlip } from "../redux/actions/getAllUsersAction";
import SnackbarService from "src/services/SnackbarService";
import Tooltip from "@material-ui/core/Tooltip";
import {
  addBetslipData,
  getBetslipData,
  sameLeagueCheck,
} from "src/services/placeBet";
import { NumberSchema } from "yup";
const useStyles = makeStyles((theme) => ({
  mainCircularSlider: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .minuscounter": {
      position: "absolute",
      top: "-30px",
    },
    "& .pluscounter": {
      position: "absolute",
      bottom: "-30px",
    },
    "& .PostBox": {
      boxSizing: "border-box",
      width: "100px",
      height: "100px",
      minWidth: "100px",
      background: theme.palette.CircularSlider.background,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": { position: "absolute" },
      "& .innerbox": {
        top: "32%",
        left: "50%",
        width: "72px",
        height: "40px",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        borderRadius: "150px 150px 0 0",
        background: theme.palette.background.heading,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
      },
      "& .innerbottom": {
        top: " 65%",
        left: "50%",
        width: "72px",
        height: " 40px",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        borderRadius: " 0px 0px 150px 150px",
        display: " flex",
        justifyContent: "center",
        alignItems: " center",
        background: theme.palette.background.default,
        boxShadow: theme.palette.CircularSlider.boxShadow,
        zIndex: "1",
      },
    },
  },
  playerIcon: {
    width: "14px !important",
    height: "8px !important",
    borderRadius: "50% !important",
  },
}));

export default function (props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useContext(AuthContext);
  const { type, id, gameData } = props;
  const [value, setValue] = React.useState(0);
  const [points, setPoints] = React.useState([]);
  const [over, setOver] = React.useState(0);
  const [under, setUnder] = React.useState(0);
  const [home, setHome] = React.useState(0);
  const [away, setAway] = React.useState(0);

  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");

  const [spreadsData, setSpreadsData] = React.useState([]);
  const [spreadsPoints, setSpreadsPoints] = React.useState(0);
  const [spreadsPointsData, setSpreadsPointsData] = React.useState([]);
  const [stepPercentageSpreadArr, setStepPercentageSpreadArr] = React.useState(
    []
  );
  const [overUndersData, setOverUndersData] = React.useState([]);
  const [overUndersPoints, setOverUndersPoints] = React.useState(0);
  const [overUndersPointsData, setOverUndersPointsData] = React.useState([]);
  const [stepPercentageoverUnderArr, setStepPercentageOverUnderArr] =
    React.useState([]);
  const [pointsOverUnderArr, setPointsOverUnderArr] = React.useState([]);

  var stepArr = [];

  useEffect(() => {
    if (type == "spread") {
      getSpreadOddsAPI();
    } else if (type == "overUnder") {
      getOverUnderOddsAPI();
    }
  }, []);

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };

  const createBetSlip = (data, sumOdds) => {
    dispatch(getBetSlip(data, sumOdds));
  };

  const addBetSlip = async (id, odds, betType, gameData) => {
    let array = getBetslipData();
    var checkLeague;
    const league = array.map((item) => item.id);
    checkLeague = league?.includes(id);
    sameLeagueCheck(checkLeague);

    array.push({
      id: id,
      odds: Number(odds),
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
    let sumOdds = parseFloat(
      totalOddsArray.reduce((partialSum, a) => partialSum * a)
    ).toFixed(2);

    addBetslipData(array);
    const a = Number(sumOdds);
    if (auth.isLogin()) {
      const res = await createBetSlip(array, a, sumTotalStake, sumTotalPayout);

      if (res) {
        snackBar("Add bet successfully.", "success");
      }
    } else {
      snackBar("User not login.", "danger");
    }
  };

  // Get All Popular Odds
  const getSpreadOddsAPI = async () => {
    function checkValue(val) {
      return val == value;
    }
    const responseSpreads = await getSpreadOddAPI(id);
    if (!isEmptyObj(responseSpreads)) {
      var arr = responseSpreads.bets[0].values;
      setSpreadsData(arr);
      var pointsArr = [];

      function sortNumber(a, b) {
        return a - b;
      }

      arr.forEach((ele) => {
        var value = ele.value;
        if (value.includes("Home ") || value.includes("Away ")) {
          var splitArr = value.split(" ");
          var points = splitArr[1];
          pointsArr.push(Number(points));
        }
      });

      var pointsSet = new Set(pointsArr);
      pointsArr = Array.from(pointsSet);
      pointsArr.sort(sortNumber);

      setSpreadsPointsData(pointsArr);

      var percentage = Number(100 / Number(pointsArr.length)).toFixed(0);

      var posibilitiesArr = [2, 5, 10, 20, 25, 50];
      var lastPercentage = 0;
      await posibilitiesArr.forEach((ele) => {
        if (ele <= Number(pointsArr.length)) {
          lastPercentage = ele;
        }
      });

      var initValue = 100 / Number(lastPercentage);
      for (let index = 0; index < lastPercentage; index++) {
        const element = pointsArr[index];
        stepArr.push(initValue);
        initValue = initValue + 100 / lastPercentage;
      }
      setStepPercentageSpreadArr(stepArr);
      setValue(stepArr[0]);
      setSpreadsPoints(pointsArr[0]);

      arr.forEach((element) => {
        if (
          element.value.includes(pointsArr[0]) &&
          element.value.includes("Home")
        ) {
          setHome(element.odd);
        } else if (
          element.value.includes(pointsArr[0]) &&
          element.value.includes("Away")
        ) {
          setAway(element.odd);
        }
      });
    }
  };

  const getOverUnderOddsAPI = async () => {
    const responseOverUnders = await getOverUnderOddAPI(id);
    if (!isEmptyObj(responseOverUnders)) {
      var arr = responseOverUnders.bets[0].values;
      setOverUndersData(arr);
      var pointsArr = [];

      function sortNumber(a, b) {
        return a - b;
      }

      arr.forEach((ele) => {
        var value = ele.value;
        if (value.includes("Over ") || value.includes("Under ")) {
          var splitArr = value.split(" ");
          var points = splitArr[1];
          pointsArr.push(Number(points));
        }
      });

      var pointsSet = new Set(pointsArr);
      pointsArr = Array.from(pointsSet);
      pointsArr.sort(sortNumber);

      setOverUndersPointsData(pointsArr);

      var percentage = Number(100 / Number(pointsArr.length)).toFixed(0);

      var posibilitiesArr = [2, 5, 10, 20, 25, 50];
      var lastPercentage = 0;
      await posibilitiesArr.forEach((ele) => {
        if (ele <= Number(pointsArr.length)) {
          lastPercentage = ele;
        }
      });

      var initValue = 100 / Number(lastPercentage);
      for (let index = 0; index < lastPercentage; index++) {
        const element = pointsArr[index];
        stepArr.push(initValue);
        initValue = initValue + 100 / lastPercentage;
      }

      setStepPercentageOverUnderArr(stepArr);

      setValue(stepArr[0]);
      setOverUndersPoints(pointsArr[0]);

      arr.forEach((element) => {
        if (
          element.value.includes(pointsArr[0]) &&
          element.value.includes("Under")
        ) {
          setUnder(element.odd);
        } else if (
          element.value.includes(pointsArr[0]) &&
          element.value.includes("Over")
        ) {
          setOver(element.odd);
        }
      });
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

  const handleChange = async (value) => {
    function checkValue(val) {
      return val == value;
    }
    if (type == "spread") {
      var resNum = stepPercentageSpreadArr.find(checkValue);
      var index = stepPercentageSpreadArr.indexOf(resNum);
      var points = spreadsPointsData[index];

      setValue(value);

      var arr = []; // spreadsData.filter(checkData(points));
      if (resNum) {
        setSpreadsPoints(points);
        spreadsData.forEach((element) => {
          if (
            element.value.includes(points) &&
            element.value.includes("Home")
          ) {
            arr.push(element);

            setHome(element.odd);
          } else if (
            element.value.includes(points) &&
            element.value.includes("Away")
          ) {
            arr.push(element);

            setAway(element.odd);
          }
        });
      }
    } else if (type == "overUnder") {
      var resNum = stepPercentageoverUnderArr.find(checkValue);
      var index = stepPercentageoverUnderArr.indexOf(resNum);
      var points = overUndersPointsData[index];

      setValue(value);

      var arr = []; // OverUndersData.filter(checkData(points));
      if (resNum) {
        setOverUndersPoints(points);
        overUndersData.forEach((element) => {
          if (
            element.value.includes(points) &&
            element.value.includes("Under")
          ) {
            arr.push(element);

            setUnder(element.odd);
          } else if (
            element.value.includes(points) &&
            element.value.includes("Over")
          ) {
            arr.push(element);

            setOver(element.odd);
          }
        });
      }
    }
  };

  // Spread Circular Section/Content
  const spreadCircular = () => {
    return (
      <Box className={classes.mainsec}>
        <Box className={classes.mainCircularSlider}>
          <Box className="minuscounter"></Box>
          <Box className="PostBox">
            {!isEmptyText(away) ? (
              <Tooltip
                title="Odds not provides from API-Basketball RapidAPI"
                arrow
              >
                <Box className="innerbox">
                  &nbsp;&nbsp;
                  <Typography
                    variant="body1"
                    position="absolute"
                    style={{ color: "#fff" }}
                  >
                    -
                  </Typography>
                </Box>
              </Tooltip>
            ) : (
              <Box
                className="innerbox"
                onClick={() => {
                  addBetSlip(
                    id,
                    away,
                    "Spread Odds (Away " + spreadsPoints + ")",
                    gameData
                  );
                }}
              >
                <img
                  className={classes.playerIcon}
                  src={
                    gameData?.teams?.away?.logo
                      ? gameData?.teams?.away?.logo
                      : ""
                  }
                />{" "}
                &nbsp;
                <Typography
                  variant="body1"
                  position="absolute"
                  style={{ color: "#fff" }}
                >
                  {away}
                </Typography>
              </Box>
            )}
            {!isEmptyText(home) ? (
              <Tooltip
                title="Odds not provides from API-Basketball RapidAPI"
                arrow
              >
                <Box className="innerbottom">
                  &nbsp;&nbsp;
                  <Typography
                    variant="body1"
                    position="absolute"
                    style={{ color: "#fff" }}
                  >
                    -
                  </Typography>
                </Box>
              </Tooltip>
            ) : (
              <Box
                className="innerbottom"
                onClick={() => {
                  addBetSlip(
                    id,
                    home,
                    "Spread Odds (Home " + spreadsPoints + ")",
                    gameData
                  );
                }}
              >
                &nbsp;&nbsp;
                <Typography
                  variant="body1"
                  position="absolute"
                  style={{ color: "#fff" }}
                >
                  {home}
                </Typography>
              </Box>
            )}
            <CircleSlider
              value={value}
              size={118}
              shadow={false}
              circleWidth={0}
              knobRadius={6}
              progressWidth={6}
              knobColor="#FFFFFF"
              gradientColorFrom="#BB005A"
              gradientColorTo="#FA9131"
              circleColor="#3F3F3F"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box className="pluscounter">
            <Typography variant="h6">{spreadsPoints}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  // Over Under Circular Section/Content
  const overUnderCircular = () => {
    return (
      <Box className={classes.mainsec}>
        <Box className={classes.mainCircularSlider}>
          <Box className="PostBox">
            {!isEmptyText(over) ? (
              <Tooltip
                title="Odds not provides from API-Basketball RapidAPI"
                arrow
              >
                <Box className="innerbox">
                  <Typography
                    variant="body1"
                    position="absolute"
                    style={{ color: "#FA9131" }}
                  >
                    O
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography
                    variant="body1"
                    position="absolute"
                    style={{ color: "#fff" }}
                  >
                    -
                  </Typography>
                </Box>
              </Tooltip>
            ) : (
              <Box
                className="innerbox"
                onClick={() => {
                  addBetSlip(
                    id,
                    over,
                    "Over Under Odds (Over " + overUndersPoints + ")",
                    gameData
                  );
                }}
              >
                <Typography
                  variant="body1"
                  position="absolute"
                  style={{ color: "#FA9131" }}
                >
                  O
                </Typography>
                &nbsp;&nbsp;
                <Typography
                  variant="body1"
                  position="absolute"
                  style={{ color: "#fff" }}
                >
                  {over}
                </Typography>
              </Box>
            )}

            {!isEmptyText(under) ? (
              <Tooltip
                title="Odds not provides from API-Basketball RapidAPI"
                arrow
              >
                <Box className="innerbottom">
                  <Typography
                    variant="body1"
                    position="absolute"
                    style={{ color: "#FA9131" }}
                  >
                    U
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography
                    variant="body1"
                    position="absolute"
                    style={{ color: "#fff" }}
                  >
                    -
                  </Typography>
                </Box>
              </Tooltip>
            ) : (
              <Box
                className="innerbottom"
                onClick={() => {
                  addBetSlip(
                    id,
                    under,
                    "Over Under Odds (Under " + overUndersPoints + ")",
                    gameData
                  );
                }}
              >
                <Typography
                  variant="body1"
                  position="absolute"
                  style={{ color: "#FA9131" }}
                >
                  U
                </Typography>
                &nbsp;&nbsp;
                <Typography
                  variant="body1"
                  position="absolute"
                  style={{ color: "#fff" }}
                >
                  {under}
                </Typography>
              </Box>
            )}

            <CircleSlider
              value={value}
              size={118}
              shadow={false}
              circleWidth={0}
              knobRadius={6}
              progressWidth={6}
              knobColor="#FFFFFF"
              gradientColorFrom="#BB005A"
              gradientColorTo="#FA9131"
              circleColor="#3F3F3F"
              onChange={(e) => handleChange(e)}
            />
            <Box className="pluscounter">
              <Typography variant="h6">{overUndersPoints}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      {type == "spread" && spreadCircular()}
      {type == "overUnder" && overUnderCircular()}
    </>
  );
}
