import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LiveScorepopular from "./LiveScorepopular";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .accordiantitle": {
      background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
    },
    "& .accordiandetails": {
      background: "#292A2F",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
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
          aria-controls="panel1a-content"
          id="panel1a-header"
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
              <Typography className={classes.heading}>
                Money Line (Team that Wins)
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
          id="panel1a-headesr"
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
              <Typography className={classes.heading}>Spread Bets</Typography>
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
              <Typography className={classes.heading}>
                Team Total Points
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
