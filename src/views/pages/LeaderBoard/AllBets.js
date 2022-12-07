import React from "react";
import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
  Button,
  withStyles,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import GloballySearchArea from "src/component/GloballySearchArea";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CustomizedCheckbox from "src/component/CustomizedCheckbox";
import { useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";

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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    "& .headingContent": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& div": {
        marginLeft: "15px",
      },
    },
  },
  secondDeaultwithRadius: {
    background: theme.palette.background.secondDeault,
    borderRadius: "50px",
    padding: "6px",
    width: "100%",
  },
  detailsBox: {
    width: "100%",
    display: "flex",
    padding: "10px 5px",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      color: theme.palette.text.cossafaText,
    },
  },
  detailsBox1: {
    padding: "10px 15px",
    "& p": {
      fontSize: "12px",
      color: theme.palette.text.cossafaText,
    },
  },
  buttonStyle: {
    width: "80px",
    height: "35px",
    fontSize: "16px",
    [theme.breakpoints.down("xs")]: {
      width: "65px",
      height: "30px",
      fontSize: "14px",
    },
  },
  yesNo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "150px",
    "& h6": {
      color: "#787878",
    },
  },
}));

const textDetails = [
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
  {
    question: "Bets Category",
    answer: [
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
      {
        text: "Luka Doncic to have 7+ assists",
        buttonNumber: "+300",
      },
    ],
  },
];

function AllBets() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Paper elevation={2} className={classes.root}>
        <Box className="headingContent">
          <Avatar
            id="closebutton"
            onClick={() => history.push("/")}
            className="closebtn"
            style={{ cursor: "pointer" }}
          >
            <ChevronLeftIcon />
          </Avatar>
          <Box>
            <Typography variant="h6">All Bets</Typography>
          </Box>
        </Box>
        <Box my={3} style={{ maxWidth: "350px" }}>
          <GloballySearchArea />
        </Box>
        <Box className="mainBox">
          <Grid container spacing={2}>
            {textDetails &&
              textDetails?.map((componentsDetails, index) => {
                return (
                  <Grid item xs={12}>
                    <AllBetsCardComponent
                      componentsDetails={componentsDetails}
                      key={index}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default AllBets;

const AllBetsCardComponent = (props) => {
  const classes = useStyles();
  const { componentsDetails } = props;
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box>
      <Accordion square elevation={2} defaultExpanded={true}>
        <AccordionSummary>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={6}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {componentsDetails?.question}&nbsp;&nbsp;
                  <StarIcon style={{ color: "#FA9131" }} />
                </Typography>
                <Box className={classes.yesNo}>
                  <Typography variant="h6">YES</Typography>
                  <Typography variant="h6">NO</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} align="right">
              <Box className={classes.yesNo}>
                <Typography variant="h6">YES</Typography>
                <Typography variant="h6">NO</Typography>
              </Box>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Box mt={1}>
            <Grid container spacing={2}>
              {componentsDetails?.answer &&
                componentsDetails?.answer?.map((data, index) => {
                  return (
                    <Grid item xs={12} md={6}>
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <CustomizedCheckbox />
                        <Box className={classes.secondDeaultwithRadius}>
                          <Grid container spacing={1} alignItems="center">
                            <Grid item xs={6} md={7}>
                              <Box className={classes.detailsBox1}>
                                <Typography variant="body2">
                                  {data?.text}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={5}>
                              <Box className={classes.detailsBox}>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.buttonStyle}
                                >
                                  {data?.buttonNumber}
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  className={classes.buttonStyle}
                                >
                                  {data?.buttonNumber}
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
