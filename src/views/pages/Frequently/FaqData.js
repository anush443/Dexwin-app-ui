import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outlinedminus: {
    color: theme.palette.text.primary,
  },


}))
const Accordion = withStyles((theme) => ({
  root: {
    "&:not(:last-child)": {
      background: "#000",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
    },
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
    borderRadius: "0",
    background: theme.palette.background.heading,
    "&$expanded": {
      minHeight: 50,
      borderBottom: "0",
      color: "#FFF",
      background: theme.palette.background.heading,
      border: " none !important",
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
      "& h6":{

      },
    },
  },
  expanded: {
    margin: "0",
  },
}))(MuiAccordionSummary);


const AccordionDetails = withStyles((theme) => ({
  root: {

    padding: "8px 20px 16px",
    "& svg": {
      color: "red",
    },


  },
}))(MuiAccordionDetails);

export default function FaqData({ data, index }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Paper elevation={2}>

      <Accordion
        square
        defaultExpanded={index == 0 ? true : false}
        onChange={handleChange(index)}
      >
        <AccordionSummary
          id="panel1a-header"
          aria-controls={index}
          expandIcon={
            expanded === index ? (
              <AiOutlineMinus
                style={{
                  fontSize: "20px",
                  fontWeight: "400",


                }}
                className={classes.outlinedminus}
              />
            ) : (
              <AiOutlinePlus
                style={{
                  fontSize: "20px",
                  fontWeight: "400",


                }}
                className={classes.outlinedminus}
              />
            )
          }
        >
          <Typography
            variant="h6"
            className="headeingText"
            style={{
              color: "#39AED0", fontSize: "17px"
            }}
          >
            {data.head}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" style={{ fontSize: "14px", lineHeight: "20px", }}>{data.summary}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}
