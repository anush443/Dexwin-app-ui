import React from "react";
import {
  makeStyles,
  Button,
  MenuItem,
  withStyles,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { sidebarButtonData, AccordionHeading } from "src/Constant/Index";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

const AccordionSummaryOut = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    color: "#787878",
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      color: "#FA9131",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);
const AccordionSummaryIn = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
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
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: 0,
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  MenuItem: {
    padding: "10px",
    color: "#787878",
    padding: "10px 10px",
    fontSize: "16px",

    "& svg": {
      fontSize: "15px",
      color: "#787878",
    },
    "& .menuText": {
      paddingLeft: "10px",

      "&.active": {
        color: "#fff !important",
      },
    },
    "& .MuiAvatar-root": {
      width: "30px",
      height: "30px",
    },
  },
  navAccordionicon: {
    background: theme.palette.background.navAccordionicon,
    borderRadius: "4px",
    height: " 24px",
  },
}));

export default function (props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className="accorMenu">
      {AccordionHeading &&
        AccordionHeading?.map((data, index) => {
          return (
            <Accordion
              square
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummaryOut
                expandIcon={
                  <Box className={classes.navAccordionicon}>
                    <ExpandMoreIcon />
                  </Box>
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="accordinBox">
                  <img src={data?.headingImg} alt="img1" />

                  <Typography variant="h5" className="headingText">
                    {data?.heading}
                  </Typography>
                </Box>
              </AccordionSummaryOut>
              <AccordionDetails>
                {sidebarButtonData &&
                  sidebarButtonData.map((data, index1) => {
                    return (
                      <Accordion defaultExpanded={index1 == 0}>
                        <AccordionSummaryIn
                          expandIcon={
                            <Box className={classes.navAccordionicon}>
                              <ExpandMoreIcon />
                            </Box>
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Box className="accordinBox">
                            <img src={data?.icon} alt="img2" />
                            <Typography variant="h6">{data?.heding}</Typography>
                          </Box>
                        </AccordionSummaryIn>
                        <Divider />

                        <Box className="mainAccordianDetails">
                          <AccordionDetails>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item lg={6}>
                                <Box className="accordindetailBox">
                                  <img src={data?.iconInner} alt="img6" />
                                  <Typography
                                    variant="h5"
                                    style={{ color: "#39AED0" }}
                                  >
                                    {data?.description}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item lg={6} align="right">
                                <Box className="star" align="right">
                                  <img src={data?.star} alt="img3" />
                                </Box>
                              </Grid>
                              <Grid item lg={6}>
                                <Box className="accordindetailBox">
                                  <img src={data?.iconInner1} alt="img7" />
                                  <Typography variant="body2">
                                    {data?.description1}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item lg={6} align="right">
                                <Box className="star" align="right">
                                  <Typography
                                    variant="body2"
                                    className="orange"
                                  >
                                    {data?.description2}
                                  </Typography>
                                  <Typography variant="body2">
                                    {data?.description3}
                                  </Typography>
                                  <Typography variant="body2">
                                    {data?.description4}
                                  </Typography>
                                </Box>
                              </Grid>

                              <Grid item lg={6}>
                                <Box className="accordindetailBox">
                                  <img src={data?.iconInner2} alt="img4" />
                                  <Typography variant="body2">
                                    {data?.description8}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item lg={6} align="right">
                                <Box className="star" align="right">
                                  <Typography
                                    variant="body2"
                                    className="orange"
                                  >
                                    {data?.description5}
                                  </Typography>
                                  <Typography variant="body2">
                                    {data?.description6}
                                  </Typography>
                                  <Typography variant="body2">
                                    {data?.description7}
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Box>
                      </Accordion>
                    );
                  })}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </Box>
  );
}
