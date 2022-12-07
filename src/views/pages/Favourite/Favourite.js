import React from "react";
import { Typography, Box, Button, Grid, Paper } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { FiClock } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import Countnumber from "src/component/Countnumber";
import Circularslider from "src/component/Circularslider";
const useStyles = makeStyles((theme) => ({
  DashboardCardbox: {
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "30px",
    marginTop: "25px",
    "& .headingBox": {
      background: theme.palette.background.heading,
      borderRadius: "30px 30px 0px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      "& h6": {
        color: theme.palette.text.primary,

        display: "flex",
        alignItems: "center",
      },
    },
    "& .subheading": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 20px 0px",
      "& p": {
        color: "#39AED0",
        display: "flex",
        alignItems: "center",
      },
    },
    "& .mainContentBox": {
      padding: "20px 10px",
      "& .innerContent": {
        display: "flex",
        alignItems: "center",

        "& buttons": {
          fontFamily: "Red Hat Mono",
          fontStyle: "normal",
        },
      },
      "& .innerIcontext": {
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        paddingTop: "15px",
        "& p": {
          display: "flex",
          alignItems: "center",
          color: "#39AED0",
        },
      },
    },
  },
  favouriteBox: {
    padding: " 15px",

    "& h4": {
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
    "& h6": {
      color: theme.palette.text.primary,
    },
    "& .subbox": {
      height: "224px",
      marginTop: "15px",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      borderRadius: "30px",
    },
    "& .subchild": {
      height: "40px",
      background: theme.palette.background.tablehead,
      borderRadius: "30px 30px 0px 0px",
      "& .child": {
        padding: "12px 24px",
      },
      "& .subbaby": {
        display: "flex",
        alignItems: "center",
        "& h6": {
          color: theme.palette.text.primary,
        },
      },
      "& .paddingsec": {
        padding: "12px 21px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      "& .subbabycolorsixe": {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        "& h6": {
          fontSize: "12px",
        },
      },
      "& .subbabycolorsixes": {
        display: "flex",
        alignItems: "center",
        "& h6": {
          fontSize: "12px",
        },
      },
      "& h5": {
        margin: "12px 0px 12px 65px",
        color: "#39AED0",
      },
      "& .baby": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      "& .butnsec": {
        display: "flex",
        flexDirection: "column",
        "& button": {
          width: "87px",
          height: "36px",
        },
      },
    },
  },
  headbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.background.heading,

    borderRadius: "100px",
    padding: "15px 15px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  spotbox: {
    paddingBottom: "15px",
    marginTop: "25px",
  },
  AccordionBox: {
    display: "flex",
    background: theme.palette.background.AccordianBackground,
    width: "100%",
    justifyContent: "space-between",
    borderRadius: "50px",
    padding: "15px",
    "& p": {
      color: "#39AED0",
    },
    "& .butnsec": {
      display: "flex",
      justifyContent: "end",
      flexDirection: "row",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        alignItems: "center",
      },
      "& button": {
        width: "87px",
        height: "35px",
      },
    },
  },
  SelectedBox: {
    background: theme.palette.background.heading,
  },
  counterButton: {
    background:
      "radial-gradient(60.37% 50% at 50% 50%, rgba(255, 16, 16, 0.5) 0%, rgba(255, 0, 0, 0) 100%), linear-gradient(159.8deg, #FDB26D 24.32%, #FA6131 89.49%)",
    boxShadow: "0px 0px 11px #CF2B2B",
    borderRadius: "10px",
    width: "110px",
    height: "45px",
    fontSize: "18px",
    fontWeight: "700",
  },
  liveAndUpcomingmainContentBox: {
    cursor: "pointer",
    padding: "0px 20px 20px",
    "& .innerIcontext": {
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
      paddingTop: "15px",
      "& p": {
        display: "flex",
        alignItems: "center",
        color: "#39AED0",
      },
    },
  },
  playerName: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function (props) {
  const { type } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.favouriteBox} elevation={2}>
      <Box className={classes.headbox}>
        <Box display="flex" alignItems="center">
          <img
            src="./images/star.png"
            alt="start image"
            style={{ color: "#FA9131", marginRight: "5px" }}
          />
          <Typography variant="h4" style={{ paddingLeft: "10px" }}>
            Favourites{" "}
            <span style={{ color: "#39AED0", paddingLeft: "10px" }}>
              (2 Tournaments)
            </span>
          </Typography>
        </Box>
        {/*<Box>
          <img
            src="images/pro.png"
            alt="flag"
            style={{ marginRight: "15px" }}
          />

          <img src="images/pro.png" alt="flag" />
  </Box>*/}
      </Box>

      <Paper className={classes.DashboardCardbox} mt={2}>
        <Box className="headingBox">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={7}>
                  <Box className="flexjustify">
                    <img src="images/image 3.png" alt="Hello" /> &nbsp; &nbsp;
                    <Typography variant="body2" style={{ color: "#39AED0" }}>
                      NBA League
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={5} align="center">
                  {type === "live" ? (
                    <>
                      <Typography
                        variant="body2"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Quarter 4-7
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="body2"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Today&nbsp;
                        <FiClock style={{ fontSize: "11px" }} />
                        &nbsp;18:44
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={4} align="center">
                  <Typography
                    variant="body2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    SPREAD
                  </Typography>
                </Grid>
                <Grid item xs={4} align="center">
                  <Typography
                    variant="body2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    TOTAL
                  </Typography>
                </Grid>
                <Grid item xs={4} align="right">
                  <Box className="flexjustify" justifyContent="end">

                    <Typography variant="body2" style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                      {/* <FiClock style={{ fontSize: "11px" }} /> */}
                     GAME&nbsp;&nbsp;
                    </Typography>
                    &nbsp; &nbsp;
                    <img src="images/star.png" alt="image" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className="subheading">
          <Typography variant="body1">
            {" "}
            <img src="images/Vectorsec.png" alt="Hello" />{" "}
            &nbsp;&nbsp;&nbsp;Belarus Sky League
          </Typography>
        </Box>
        <Box className={classes.liveAndUpcomingmainContentBox} mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={7}>
                  <Box className={classes.playerName}>
                    <img src="images/image 5.png" alt="Hello" />
                    &nbsp;&nbsp;
                    <Typography variant="h6">Southern Hoiho (Women)</Typography>
                  </Box>
                  <Box align="center" mt={1} mb={1}>
                    <Typography
                      variant="h5"
                      style={{ color: "#39AED0", marginLeft: "-55px" }}
                    >
                      VS
                    </Typography>
                  </Box>
                  <Box className={classes.playerName}>
                    <img src="images/image 4.png" alt="Hello" />
                    &nbsp;&nbsp;
                    <Typography variant="h6">Northern Kahu (Women)</Typography>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box>
                    <Countnumber />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={6} lg={4} md={4} sm={4}>
                  <Circularslider type="spread" />
                </Grid>
                <Grid item xs={6} lg={4} md={4} sm={4}>
                  <Circularslider type="overUnder" />
                </Grid>
                <Grid item xs={4}>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.buttons}
                    >
                      +300
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.buttons}
                      style={{ marginTop: "10px" }}
                    >
                      -300
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box className="innerIcontext">
            <Typography variant="body2">
              View More Bets <ChevronRightIcon />
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper className={classes.spotbox} elevation={2}>
        <Box
          className={classes.SelectedBox}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "14px",
          }}
        >
          <Box>
            <Typography variant="h4" style={{ fontSize: "14px" }}>
              Spot Bets
            </Typography>
          </Box>
          <Box style={{ display: "flex" }}>
            <Typography
              className={classes.heading}
              color="primary"
              style={{ paddingRight: "94px" }}
            >
              Yes
            </Typography>
            <Typography
              className={classes.heading}
              color="primary"
              style={{ paddingRight: "40px" }}
            >
              No
            </Typography>
            <Box>
              <img src="images/star.png" alt="" />
            </Box>
          </Box>
        </Box>
        <Box p={2}>
          <Box className={classes.AccordionBox}>
            <Grid container spacing={2} alignItems="center">
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box>
                  <Typography variant="body1">
                    In the next 8 mins, will Westbrook lob the ball to James for
                    a dunk
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box className="butnsec">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "10px" }}
                  >
                    +300
                  </Button>
                  <Button variant="outlined" color="primary">
                    +150
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.AccordionBox} mt={2}>
            <Grid container spacing={2} alignItems="center">
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box>
                  <Typography variant="body1">
                    In the next 8 mins, will Westbrook lob the ball to James for
                    a dunk
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box className="butnsec">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "10px" }}
                  >
                    +300
                  </Button>
                  <Button variant="outlined" color="secondary">
                    +150
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>

      {/* second part */}

      <Box className={classes.spotbox}>
        <Box
          className={classes.SelectedBox}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "14px",
          }}
        >
          <Box>
            <Typography variant="h4" style={{ fontSize: "14px" }}>
              In Q4, how many points will Kobe Bryant have{" "}
            </Typography>
          </Box>
          <Box style={{ display: "flex" }}>
            <Typography
              className={classes.heading}
              color="primary"
              style={{ paddingRight: "94px" }}
            >
              Yes
            </Typography>
            <Typography
              className={classes.heading}
              color="primary"
              style={{ paddingRight: "40px" }}
            >
              No
            </Typography>
            <Box>
              <img src="images/star.png" alt="" />
            </Box>
          </Box>
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box className={classes.AccordionBox}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box>
                      <Typography variant="body1">5-10</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box className="butnsec">
                      <Button variant="outlined" color="primary">
                        +300
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.AccordionBox}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box>
                      <Typography variant="body1">10-15</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box className="butnsec">
                      <Button variant="outlined" color="primary">
                        +300
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.AccordionBox}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box>
                      <Typography variant="body1">10-15</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box className="butnsec">
                      <Button variant="outlined" color="primary">
                        +300
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.AccordionBox}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box>
                      <Typography variant="body1">20+</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box className="butnsec">
                      <Button variant="outlined" color="primary">
                        +300
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}
