import React, { useState, useEffect, useContext } from "react";
import {
  makeStyles,
  Box,
  Typography,
  Grid,
  withStyles,
  Button,
  Divider,
} from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { addBetSlip } from "src/services/placeBet";
import SnackbarService from "src/services/SnackbarService";
import { AuthContext } from "src/context/Auth";
import { getSingleGame } from "src/services/ApiCall";
import {
  addBetslipData,
  getBetslipData,
  sameLeagueCheck,
} from "src/services/placeBet";

import { useDispatch } from "react-redux";
import { getBetSlip } from "../redux/actions/getAllUsersAction";
import { setTabs } from "../../src/redux/actions/rightTabs";

const useStyles = makeStyles((theme) => ({
  detailsBox: {
    width: "100%",
    display: "flex",
    padding: "15px",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      color: "white",
    },
  },
  detailsBox1: {
    padding: "15px",
    "& p": {
      color: theme.palette.text.cossafaText,
    },
  },
  buttonStyle: {
    width: "80px",
    height: "35px",
    fontSize: "16px",
    borderRadius: "17px !important",
    [theme.breakpoints.down("xs")]: {
      width: "65px",
      height: "30px",
      fontSize: "14px",
    },
  },
  navAccordionicon: {
    borderRadius: "4px",
    width: "30px",
  },
  secondDeault: {
    background: theme.palette.background.secondDeault,
  },
  secondDeaultwithRadius: {
    background: theme.palette.background.secondDeault,
    borderRadius: "50px",
  },
  navAccordionicon: {
    borderRadius: "4px",
    height: " 24px",
  },
  yesNo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "140px",
    [theme.breakpoints.down("xs")]: {
      width: "80px",
    },
  },
}));

const Accordion = withStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    borderRadius: "20px !important",
    background: theme.palette.background.heading,
    boxShadow:
      "-4px -8px 20px rgb(77 73 73 / 40%), 8px 10px 20px rgb(0 0 0 / 25%)",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      border: " 1px solid #3d3d3d",
      background:
        "linear-gradient( 152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      backdropFilter: "blur(42px)",
    },
  },
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    borderRadius: "20px !important",
    background: theme.palette.background.heading,
    "&$expanded": {
      minHeight: 50,
      borderBottom: "0",
      color: "#FFF",
      border: " none !important",
      background: theme.palette.background.heading,
      borderRadius: "20px 20px 0px 0px",
    },
    "@media(max-width:605px)": {
      fontSize: "10px",
      "&$expanded": {
        borderBottom: "0",
        color: "#FFF",
        backgroundColor: "transparent",
        border: " none !important",
      },
    },
  },
  content: {
    background: "000 !important",
    color: "#fff",
    borderRadius: "5px",
    "&$expanded": {
      margin: "0px 0",
      border: " none !important",
    },
  },
  expanded: {
    margin: "0",
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    borderRadius: " 0px 0px 20px 20px !important",
    padding: "1px 0px 8px",
    "& svg": {
      color: "red",
    },
  },
}))(MuiAccordionDetails);

function CosafaAccordion(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useContext(AuthContext);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const {
    matchId,
    data,
    type,
    playersPropsData,
    spotCarddata,
    exoticCardData,
    periodicCardData,
    componentsDetails,
    details
  } = props;
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
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
  const _addBetSlip = async ( odds, betType) => {
    dispatch(setTabs("betSlip"));
    let array = getBetslipData();
    var checkLeague;
    const league = array.map((item) => item.id);
    checkLeague = league?.includes(matchId);
    sameLeagueCheck(checkLeague);

    array.push({
      id: matchId,
      odds: odds,
      betType: betType,
      gameData: details,
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
    const sumOdds = parseFloat(totalOddsArray.reduce((partialSum, a) => partialSum * a)).toFixed(2);
    const a = Number(sumOdds);
    addBetslipData(array);
    if (auth.isLogin()) {
      const res = await createBetSlip(
        array,
        a,
        sumTotalStake,
        sumTotalPayout
      );

      if (res) {
        snackBar("Add bet successfully.", "success");
      }
    } else {
      snackBar("User not login.", "danger");
    }
  };
  // const _addBetSlip = async (odds, betType) => {
    
  //   if (auth.isLogin()) {
  //     const res = await createBetSlip(matchId, odds, betType, ...matchDetails);
  //     if (res) {
  //       snackBar("Add bet successfully.", "success");

  //     }
  //   } else {
  //     snackBar("User not login.", "danger");
  //   }
  // };

  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      <Box className={classes.root}>
        {type === "popular" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {periodicCardData?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                style={{
                  padding: "0px 10px",
                  marginTop: "17px",
                }}
              >
                <Grid container spacing={3}>
                  {periodicCardData?.answer &&
                    periodicCardData?.answer?.map((data, index) => {
                      return (
                        <Grid item xs={12} lg={12} md={12}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={6} md={6}>
                                <Box className={classes.detailsBox1}>
                                  <Typography variant="body2">
                                    {data?.text}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} md={6}>
                                <Box
                                  className={classes.detailsBox}
                                  style={{ justifyContent: "end" }}
                                >
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.homeOdd}
                                  </Button>
                                  &nbsp;&nbsp;
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.awayOdd}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "popular-three-way" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {periodicCardData?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                style={{
                  padding: "0px 10px",
                  marginTop: "17px",
                }}
              >
                <Grid container spacing={3}>
                  {periodicCardData?.answer &&
                    periodicCardData?.answer?.map((data, index) => {
                      return (
                        <Grid item xs={12} lg={12} md={12}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={6} md={6}>
                                <Box className={classes.detailsBox1}>
                                  <Typography variant="body2">
                                    {data?.text}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} md={6}>
                                <Box
                                  className={classes.detailsBox}
                                  style={{ justifyContent: "end" }}
                                >
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.homeOdd}
                                  </Button>
                                  &nbsp;&nbsp;
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.drawOdd}
                                  </Button>
                                  &nbsp;&nbsp;
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.awayOdd}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "popular-over-under-and-spread" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {periodicCardData?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                style={{
                  padding: "0px 10px",
                  marginTop: "17px",
                }}
              >
                <Grid container spacing={3}>
                  {periodicCardData?.answer &&
                    periodicCardData?.answer?.map((data, index) => {
                      return (
                        <Grid item xs={12} lg={6} md={6}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={6} md={6}>
                                <Box className={classes.detailsBox1}>
                                  <Typography variant="body2">
                                    {data?.text}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} md={6}>
                                <Box
                                  className={classes.detailsBox}
                                  style={{ justifyContent: "end" }}
                                >
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.odd}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "allBets" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {componentsDetails?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box my={1}>
                <Grid container spacing={2}>
                  {componentsDetails?.answer &&
                    componentsDetails?.answer?.map((data, index) => {
                      return (
                        
                        <Grid item xs={6}>
                          <Box className={classes.detailsBox}>
                            <Typography variant="body2">
                              {data?.text}
                            </Typography>
                            <Button
                              variant="outlined"
                              color="primary"
                              className={classes.buttonStyle}
                            >
                              {data?.buttonNumber}
                            </Button>
                            {/* <Divider orientation="vertical" flexItem /> */}

                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "players" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {data?.text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box className={classes.detailsBox}>
                <Typography variant="body2">{data?.desription}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.buttonStyle}
                >
                  {data?.number}
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "periodic" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {periodicCardData?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                style={{
                  padding: "0px 10px",
                  marginTop: "17px",
                }}
              >
                <Grid container spacing={3}>
                  {periodicCardData?.answer &&
                    periodicCardData?.answer?.map((data, index) => {
                      return (
                        <Grid item xs={12} lg={6} md={6}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={6} md={6}>
                                <Box className={classes.detailsBox1}>
                                  <Typography variant="body2">
                                    {data?.text}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} md={6}>
                                <Box

                                  className={classes.detailsBox}
                                  style={{ justifyContent: "end" }}
                                >
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() =>
                                      _addBetSlip(
                                        data?.homeOdd,
                                        data?.text + " Home"
                                      )
                                    }
                                    className={classes.buttonStyle}
                                  >
                                    {data?.homeOdd}
                                  </Button>
                                  &nbsp;&nbsp;
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() =>
                                      _addBetSlip(
                                        data?.awayOdd,
                                        data?.text + " Away"
                                      )
                                    }
                                    className={classes.buttonStyle}
                                  >
                                    {data?.awayOdd}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "periodic-three-way" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {periodicCardData?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                style={{
                  padding: "0px 10px",
                  marginTop: "17px",
                }}
              >
                <Grid container spacing={3}>
                  {periodicCardData?.answer &&
                    periodicCardData?.answer?.map((data, index) => {
                      return (
                        <Grid item xs={12} lg={6} md={6}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={6} md={6}>
                                <Box className={classes.detailsBox1}>
                                  <Typography variant="body2">
                                    {data?.text}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} md={6}>
                                <Box
                                  className={classes.detailsBox}
                                  style={{ justifyContent: "end" }}
                                >
                                  <Button
                                    variant="outlined"
                                    onClick={() =>
                                      _addBetSlip(
                                        data?.homeOdd,
                                        data?.text + " Home"
                                      )
                                    }
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.homeOdd}
                                  </Button>
                                  &nbsp;&nbsp;
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() =>
                                      _addBetSlip(
                                        data?.drawOdd,
                                        data?.text + " Draw"
                                      )
                                    }
                                    className={classes.buttonStyle}
                                  >
                                    {data?.drawOdd}
                                  </Button>
                                  &nbsp;&nbsp;
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() =>
                                      _addBetSlip(
                                        data?.awayOdd,
                                        data?.text + " Away"
                                      )
                                    }
                                    className={classes.buttonStyle}
                                  >
                                    {data?.awayOdd}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "periodic-over-under-and-spread" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {periodicCardData?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                style={{
                  padding: "0px 10px",
                  marginTop: "17px",
                }}
              >
                <Grid container spacing={3}>
                  {periodicCardData?.answer &&
                    periodicCardData?.answer?.map((data, index) => {
                      return (
                        <Grid item xs={12} lg={6} md={6}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={6} md={6}>
                                <Box className={classes.detailsBox1}>
                                  <Typography variant="body2">
                                    {data?.text}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} md={6}>
                                <Box
                                  className={classes.detailsBox}
                                  style={{ justifyContent: "end" }}
                                >
                                  <Button
                                    variant="outlined"
                                    onClick={() =>
                                      _addBetSlip(data?.odd, periodicCardData?.question +" ("+data?.text+")")
                                    }
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.odd}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "exotic" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {exoticCardData?.heading}
                </Typography>
                <Box className={classes.yesNo}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      color: "#787878",
                    }}
                  >
                    ODD
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      color: " #787878",
                    }}
                  >
                     EVEN
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box mt={2}>
                <Grid container spacing={2}>
                  {exoticCardData.description &&
                    exoticCardData.description?.map((data, index) => {
                      return (
                        <Grid item xs={12}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Box className={classes.detailsBox}>
                              <Typography variant="body2">
                                {data?.text}
                              </Typography>
                              <Box style={{ display: "flex" }}>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.buttonStyle}
                                >
                                  {data?.awayOdd.odd}
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  className={classes.buttonStyle}
                                >
                                  {data?.awayEven.odd}
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "exotic-odd-even" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                }}
              >
                {exoticCardData?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                style={{
                  padding: "0px 10px",
                  marginTop: "17px",
                }}
              >
                <Grid container spacing={3}>
                  {exoticCardData?.answer &&
                    exoticCardData?.answer?.map((data, index) => {
                      return (
                        <Grid item xs={12} lg={6} md={6}>
                          <Box className={classes.secondDeaultwithRadius}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={6} md={6}>
                                <Box className={classes.detailsBox1}>
                                  <Typography variant="body2">
                                    {data?.text}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} md={6}>
                                <Box
                                  className={classes.detailsBox}
                                  style={{ justifyContent: "end" }}
                                >
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                    onClick={() =>
                                      _addBetSlip(
                                        data?.odd,
                                        exoticCardData?.question +`(${data?.text})`
                                      )
                                    }
                                  >
                                    {data?.odd}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}

        {type === "spot" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {spotCarddata?.heading}
                </Typography>
                <Box className={classes.yesNo}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      color: "#787878",
                      marginLeft: "37px"
                    }}
                  >
                    ODD
                  </Typography>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      color: " #787878",
                    }}
                  >
                    EVEN
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box mt={4} mb={4}>
                <Grid container spacing={2}>
                  {spotCarddata.description &&
                    spotCarddata.description?.map((data, index) => {
                      return (
                        <Grid item xs={12}>
                          <Box className={classes.secondDeault}>
                            <Box className={classes.detailsBox}>
                              <Typography variant="body2">
                                {data?.text}
                              </Typography>
                              <Box style={{ display: "flex" }}>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.buttonStyle}
                                >
                                  {data?.num1}
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  className={classes.buttonStyle}
                                >
                                  {data?.num2}
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "playersProps" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={4} style={{marginRight: "6rem"}}>
                      <Typography
                        variant="h6"
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        {playersPropsData?.heading}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Box className="d-flexspacebetween">
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            color: "#787878",
                          }}
                        >
                          ODD
                        </Typography>

                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            marginRight: "20px",
                            color: "#787878",
                          }}
                        >
                          EVEN
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                      <Box className="d-flexspacebetween">
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            marginLeft: "20px",
                            color: "#787878",
                          }}
                        >
                          ODD
                        </Typography>

                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            marginRight: "20px",
                            color: "#787878",
                          }}
                        >
                          EVEN
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box my={1}>
                <Grid container spacing={2}>
                  {playersPropsData?.description &&
                    playersPropsData?.description?.map((data, index) => {
                      return (
                        <Grid item xs={12}>
                          <Box className="dsplay-flex-center">
                            <Grid container spacing={2} className="flex-inline">
                              <Grid item xs={12} md={6}>
                                <Box className={classes.detailsBox}>
                                  <Typography variant="body2">
                                    {data?.text1}
                                  </Typography>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                  <Divider orientation="vertical" flexItem />
                                </Box>
                              </Grid>
                             
                              <Grid item xs={12} md={6}>
                                <Box className={classes.detailsBox} style={{maxWidth: "93%"}}>
                                  <Typography variant="body2" style={{width:"15rem"}}>
                                    {data?.text2}
                                  </Typography>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                  <Button 
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {type === "teamProps" && (
          <Accordion square defaultExpanded={true}>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={
                <Box className={classes.navAccordionicon}>
                  {expanded === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              }
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={7}>
                      <Typography
                        variant="h6"
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        {playersPropsData?.heading}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Box className="d-flexspacebetween" style={{marginLeft: "-40px"}}>
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            color: "#787878",
                          }}
                        >
                          ODD
                        </Typography>

                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            marginRight: "61px",
                          }}
                        >
                          EVEN
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                      <Box className="d-flexspacebetween">
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            marginLeft: "20px",
                            color: "#787878",
                          }}
                        >
                          ODD
                        </Typography>

                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            marginRight: "20px",
                          }}
                        >
                          EVEN  
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box my={1}>
                <Grid container spacing={2}>
                  {playersPropsData?.description &&
                    playersPropsData?.description?.map((data, index) => {
                      return (
                        <Grid item xs={12}>
                          <Box className="dsplay-flex-center">
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={6}>
                                <Box className={classes.detailsBox}>
                                  <Typography variant="body2">
                                    {data?.text1}
                                  </Typography>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                  <Divider orientation="vertical" flexItem />
                                </Box>
                              </Grid>
                              
                              <Grid item xs={12} md={6}>
                                {/* <Divider orientation="vertical" flexItem /> */}
                                <Box className={classes.detailsBox}>
                                  <Typography variant="body2">
                                    {data?.text2}
                                  </Typography>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.buttonStyle}
                                  >
                                    {data?.num1}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>
    </>
  );
}

export default CosafaAccordion;
