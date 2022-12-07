import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Box,
  Grid,
  Button,
  Menu,
  MenuItem,

} from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import CosafaAccordion from "src/component/CosafaAccordion";
import CosafaFilterComponent from "src/component/CosafaFilterComponent";
import GloballySearchArea from "src/component/GloballySearchArea";

import { OddsContext } from "src/context/Odds";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .filterBox": {},
    "& .mainBox": {},
  },
  teamDropdown: {
    float: "left",
    background: "#191919",
    borderRadius: "30px !important",
    // minWidth:"5rem"
  },
}));

function Exotic(props) {
  var filterData = [];
  const oddsContext = useContext(OddsContext);
  const { exoticCardData, type, matchId , details} = props;

  const exoticD = oddsContext.exoticD;
  const [cardData, setCardData] = useState([]);
  const [oddsData, setOddsData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [query, setQuery] = useState("");

  const [checkBoxData, setCheckBoxData] = useState([]);
  console.log(cardData, "cardData");
  console.log(matchId, "matchIdExotic");
  console.log(details, "detailsexotic");

  useEffect(() => {
    setOddsData([]);
    setCardData([]);
    getOddsContextData();
  }, []);

  const changeHandler = (event) => {
    setQuery(event.target.value);
    filterData = cardData.filter((item) => {
      return item.question.toLowerCase().includes(query.toLocaleLowerCase());
    });
    setShowData(filterData);
  };

  const getOddsContextData = () => {
    setOddsData([]);
    setCardData([]);
    exoticD.forEach((elements) => {
      var oddsArr = [];

      if (!isEmpty(elements.odds)) {
        elements.odds.bets[0].values.forEach((betElement, index) => {
          oddsArr.push({ text: betElement.value, odd: betElement.odd });
        });
      } else {
        oddsArr = [];
      }
      oddsData.push({ question: elements.name, answer: oddsArr });
    });
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

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
console.log(showData,"888888888888")
  return (
    <>
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
            type="exotic"
            getCheckBox={getCheckBox}
            setCheckBoxData={setCheckBoxData}
          />
        </Grid>
      </Box>

      <Box className="mainBox">
        <Grid container spacing={2}>
          {cardData &&
            showData.map((exoticCardData, index) => {
              return (
                <Grid item xs={12}>
                  <CosafaAccordion
                  details={details}
                    matchId={matchId}
                    exoticCardData={exoticCardData}
                    type="exotic-odd-even"
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
}

export default Exotic;
