import React from "react";
import { Box, Typography, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LiveScorepopular from "./LiveScorepopular";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    background: theme.palette.background.cardhead,
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {
    background: theme.palette.background.cardhead,
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .accordiantitle": {
      background: theme.palette.background.cardhead,
    },
    "& .accordiandetails": {
      background: theme.palette.background.cardbacground,
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function (props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="accordiantitle"
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography className={classes.heading}>MONEY LINE</Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                className={classes.heading}
                style={{ paddingRight: "152px" }}
              >
                SPREAD
              </Typography>
              <Typography
                className={classes.heading}
                style={{ paddingRight: "56px" }}
              >
                TEAM TOTAL POINT
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails className="accordiandetails">
          <LiveScorepopular />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="accordiantitle"
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography className={classes.heading}>MONEY LINE</Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                className={classes.heading}
                style={{ paddingRight: "152px" }}
              >
                SPREAD
              </Typography>
              <Typography
                className={classes.heading}
                style={{ paddingRight: "56px" }}
              >
                TEAM TOTAL POINT
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails className="accordiandetails">
          <LiveScorepopular />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-headesrs"
          className="accordiantitle"
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography className={classes.heading}>MONEY LINE</Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                className={classes.heading}
                style={{ paddingRight: "152px" }}
              >
                SPREAD
              </Typography>
              <Typography
                className={classes.heading}
                style={{ paddingRight: "56px" }}
              >
                TEAM TOTAL POINT
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails className="accordiandetails">
          <LiveScorepopular />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
