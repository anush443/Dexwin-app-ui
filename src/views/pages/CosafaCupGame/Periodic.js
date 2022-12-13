import React, { useState, useEffect, useContext } from "react";
import {
  makeStyles,
  Box,
  Grid,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import CosafaAccordion from "src/component/CosafaAccordion";
import CosafaFilterComponent from "src/component/CosafaFilterComponent";
import { OddsContext } from "src/context/Odds";
// import { addBetSlip } from "src/services/placeBet";
import SnackbarService from "src/services/SnackbarService";
import { AuthContext } from "src/context/Auth";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .searchBox": {
      "& .MuiOutlinedInput-root": {
        borderRadius: "100px",
        "& .MuiOutlinedInput-input": {
          height: "28px",
        },
      },
    },
  },
  teamDropdown: {
    float: "left",
    background: "#191919",
    borderRadius: "30px !important",
  },
}));

function Periodic(props) {
  const auth = useContext(AuthContext);
  var filterData = [];
  const { type, periodicCardData, matchId, details } = props;
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };
  const classes = useStyles();
  const oddsContext = useContext(OddsContext);

  const [cardData, setCardData] = useState([]);
  const [oddsData, setOddsData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [query, setQuery] = useState("");

  const [checkBoxData, setCheckBoxData] = useState([]);

  useEffect(() => {
    setOddsData([]);
    setCardData([]);
    getOddsContextData();
  }, []);

  const getOddsContextData = () => {
    var moneyLineArr = [];
    var threeWayArr = [];
    setOddsData([]);
    setCardData([]);
    oddsContext.periodicOdds.forEach((elements) => {
      if (elements.type == "moneyLine") {
        if (!isEmpty(elements.odds)) {
          moneyLineArr.push({
            text: elements.name,
            homeOdd: elements.odds.bets[0].values[0].odd,
            awayOdd: elements.odds.bets[0].values[1].odd,
          });
        }
      } else if (elements.type == "overUnder" || elements.type == "spread") {
        var oddsArr = [];
        if (!isEmpty(elements.odds)) {
          elements.odds.bets[0].values.forEach((betElement, index) => {
            oddsArr.push({ text: betElement.value, odd: betElement.odd });
          });
        } else {
          oddsArr = [];
        }
        oddsData.push({ question: elements.name, answer: oddsArr });
      } else if (elements.type == "threeWay") {
        if (!isEmpty(elements.odds)) {
          threeWayArr.push({
            text: elements.name,
            homeOdd: elements.odds.bets[0].values[0].odd,
            drawOdd: elements.odds.bets[0].values[1].odd,
            awayOdd: elements.odds.bets[0].values[2].odd,
          });
        }
      }
    });

    oddsData.push({ question: "Money Line Odds", answer: moneyLineArr });
    oddsData.push({ question: "Three Way Odds", answer: threeWayArr });
    setCardData(oddsData);
    setShowData(oddsData);
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const getCheckBox = () => {
    if (
      checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data3 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data4 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3, ...data4];
    } else if (
      checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      !checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data3 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (
      checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      !checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data3 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (
      checkBoxData.checkedA &&
      !checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data3 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (
      !checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data3 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (
      checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      !checkBoxData.checkedF &&
      !checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (
      checkBoxData.checkedA &&
      !checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      !checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (
      !checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      !checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (
      checkBoxData.checkedA &&
      !checkBoxData.checkedB &&
      !checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (
      !checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      !checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (
      !checkBoxData.checkedA &&
      !checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      var data1 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data2 = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (
      !checkBoxData.checkedA &&
      !checkBoxData.checkedB &&
      !checkBoxData.checkedF &&
      checkBoxData.checkedG
    ) {
      filterData = cardData.filter((item) => {
        return item.question.toLowerCase().includes("4 quarter");
      });
    } else if (
      !checkBoxData.checkedA &&
      !checkBoxData.checkedB &&
      checkBoxData.checkedF &&
      !checkBoxData.checkedG
    ) {
      filterData = cardData.filter((item) => {
        return item.question.toLowerCase().includes("3 quarter");
      });
    } else if (
      !checkBoxData.checkedA &&
      checkBoxData.checkedB &&
      !checkBoxData.checkedF &&
      !checkBoxData.checkedG
    ) {
      filterData = cardData.filter((item) => {
        return item.question.toLowerCase().includes("2 quarter");
      });
    } else if (
      checkBoxData.checkedA == true &&
      checkBoxData.checkedB == false &&
      checkBoxData.checkedF == false &&
      checkBoxData.checkedG == false
    ) {
      filterData = cardData.filter((item) => {
        return item.question.toLowerCase().includes("1 quarter");
      });
    } else {
      filterData = cardData;
    }

    setShowData(filterData);
  };

  const changeHandler = (event) => {
    setQuery(event.target.value);
    filterData = cardData.filter((item) => {
      return item.question.toLowerCase().includes(query.toLocaleLowerCase());
    });
    setShowData(filterData);
  };
  const _addBetSlip = async (id, odds, betType, gameData) => {
    if (auth.isLogin()) {
      // const res = await addBetSlip(id, odds, betType, gameData);
      // if (res) {
      //   snackBar("Add bet successfully.", "success");
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 500);
      // }
    } else {
      snackBar("User not login.", "danger");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      <Box>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} sm={6}>
            <Button
              className={classes.teamDropdown}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              &nbsp;&nbsp;&nbsp;<span className="teamDropdown">Team</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <img src="/images/Vector (4).svg" />
              </span>
              &nbsp;&nbsp;&nbsp;
            </Button>
            <Menu
              style={{ minWidth: "150px !important" }}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{ style: { width: "125px" } }}
            >
              <MenuItem onClick={handleClose}>Team</MenuItem>
              <MenuItem onClick={handleClose}>Team</MenuItem>
              <MenuItem onClick={handleClose}>Team</MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} md={8} sm={6}></Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Grid item xs={12} alignItems="right" justifyContent="right">
          <CosafaFilterComponent
            type="periodic"
            getCheckBox={getCheckBox}
            setCheckBoxData={setCheckBoxData}
          />
        </Grid>
      </Box>

      <Box className="mainBox">
        <Grid container spacing={2}>
          {cardData &&
            showData.map((periodicCardData, index) => {
              return (
                <Grid item xs={12}>
                  <CosafaAccordion
                    matchId={matchId}
                    details={details}
                    periodicCardData={periodicCardData}
                    type={
                      (periodicCardData.question == "Three Way Odds" &&
                        "periodic-three-way") ||
                      (periodicCardData.question == "Money Line Odds" &&
                        "periodic") ||
                      (periodicCardData.question ==
                        "Over Under Odds 1 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question ==
                        "Over Under Odds 2 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question ==
                        "Over Under Odds 3 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question ==
                        "Over Under Odds 4 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question ==
                        "Over Under Odds 1st Half" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question ==
                        "Over Under Odds 2nd Half" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question == "Spread Odds 1 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question == "Spread Odds 2 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question == "Spread Odds 3 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question == "Spread Odds 4 Quarter" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question == "Spread Odds 1st Half" &&
                        "periodic-over-under-and-spread") ||
                      (periodicCardData.question == "Spread Odds 2nd Half" &&
                        "periodic-over-under-and-spread")
                    }
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
}

export default Periodic;
