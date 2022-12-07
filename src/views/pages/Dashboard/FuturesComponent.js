import React, { useEffect } from "react";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Divider,
  Paper,
} from "@material-ui/core";
import { FiClock } from "react-icons/fi";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  DashboardCardbox: {
    borderRadius: "20px",
    marginBottom: "2rem", 
    "& .headingBox": {
      background: theme.palette.background.heading,
      borderRadius: "20px 20px 0px 0px",
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
      background: theme.palette.background.cardbackground,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      "& p": {
        color: "#39AED0",
        display: "flex",
        alignItems: "center",
      },
    },
    "& .mainContentBox": {
      padding: "15px 10px",
      "& .innerContent": {
        display: "flex",
        alignItems: "center",
      },
      "& .innerIcontext": {
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        paddingTop: "15px",
        "& p": {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          color: "#39AED0",
        },
      },
    },
  },
  innerContentBox: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
    "& div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  liveAndUpcomingmainContentBox: {
    padding: "0px 20px 20px",
    "& .innerIcontext": {
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
      paddingTop: "15px",
      "& p": {
        cursor: "pointer",
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
function FutureComponent() {
  useEffect(() => {
    document.title = "Futures Matches | Dexwin";
  });

  const classes = useStyles();
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);
  return (
    <div className="outerContainer">
      <Paper className={classes.DashboardCardbox} elevation={0}>
        <Box className="headingBox">
          <Typography variant="h6">
            <img src="images/image 3.png" alt="Hello" />
            &nbsp;&nbsp; 2022-23 NBA Championship Winner
          </Typography>
          <Box className="flexjustify">
            <FiClock style={{ fontSize: "11px" }} />
            <Typography variant="body2">              
              &nbsp;&nbsp;MAY 30, 2023, 9: 00PM ET&nbsp;&nbsp;
            </Typography>
            &nbsp;&nbsp;
            <img src="/images/startimg.png" alt="Image" />
          </Box>
        </Box>
        <Box className="subheading">
          <Typography variant="body1">
            {" "}
            <img src="images/Vectorsec.png" alt="Hello" />
            &nbsp;&nbsp;&nbsp;NBA Championship 2023 - Outright Betting
          </Typography>
        </Box>
        <Box className="mainContentBox">
          <Box className="innerContent">
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} lg={6} md={12} sm={12} align="left">
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team1.png" />
                        &nbsp;&nbsp;
                        <Typography variant="h6">Boston Celtics</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Button variant="outlined" color="primary">
                        +300
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team2.png" />
                        &nbsp;&nbsp;
                        <Typography variant="h6">Boston Celtics</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="secondary">
                          +300
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} md={12} sm={12}>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team1.png" />
                        &nbsp;&nbsp;&nbsp;
                        <Typography variant="h6">
                          Los Angeles Clippers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="primary">
                          +750
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team2.png" />
                        &nbsp;&nbsp;&nbsp;
                        <Typography variant="h6">
                          Los Angeles Clippers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="secondary">
                          +750
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="innerIcontext">
            <Typography variant="body2">
              View More Bets <ChevronRightIcon />
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper className={classes.DashboardCardbox} elevation={0}>
        <Box className="headingBox">
          <Typography variant="h6">
            <img src="images/image 3.png" alt="Hello" />
            &nbsp;&nbsp; 2022-23 NBA Championship Winner
          </Typography>
          <Box className="flexjustify">
          <FiClock style={{ fontSize: "11px" }} />
            <Typography variant="body2">
              &nbsp;&nbsp;MAY 30, 2023, 9: 00PM ET&nbsp;&nbsp;
            </Typography>
            &nbsp;&nbsp;
            <img src="/images/startimg.png" alt="Image" />
          </Box>
        </Box>
        <Box className="subheading">
          <Typography variant="body1">
            {" "}
            <img src="images/Vectorsec.png" alt="Hello" />
            &nbsp;&nbsp;&nbsp;NBA Championship 2023 - Outright Betting
          </Typography>
        </Box>
        <Box className="mainContentBox">
          <Box className="innerContent">
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} lg={6} md={12} sm={12} align="left">
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team1.png" />
                        &nbsp;&nbsp;
                        <Typography variant="h6">Boston Celtics</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Button variant="outlined" color="primary">
                        +300
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team2.png" />
                        &nbsp;&nbsp;
                        <Typography variant="h6">Boston Celtics</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="secondary">
                          +300
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} md={12} sm={12}>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team1.png" />
                        &nbsp;&nbsp;&nbsp;
                        <Typography variant="h6">
                          Los Angeles Clippers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="primary">
                          +750
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team2.png" />
                        &nbsp;&nbsp;&nbsp;
                        <Typography variant="h6">
                          Los Angeles Clippers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="secondary">
                          +750
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="innerIcontext">
            <Typography variant="body2">
              View More Bets <ChevronRightIcon />
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper className={classes.DashboardCardbox} elevation={0}>
        <Box className="headingBox">
          <Typography variant="h6">
            <img src="images/image 3.png" alt="Hello" />
            &nbsp;&nbsp; 2022-23 NBA Championship Winner
          </Typography>
          <Box className="flexjustify">
          <FiClock style={{ fontSize: "11px" }} />
            <Typography variant="body2">
              &nbsp;&nbsp;MAY 30, 2023, 9: 00PM ET&nbsp;&nbsp;
            </Typography>
            &nbsp;&nbsp;
            <img src="/images/startimg.png" alt="Image" />
          </Box>
        </Box>
        <Box className="subheading">
          <Typography variant="body1">
            {" "}
            <img src="images/Vectorsec.png" alt="Hello" />
            &nbsp;&nbsp;&nbsp;NBA Championship 2023 - Outright Betting
          </Typography>
        </Box>
        <Box className="mainContentBox">
          <Box className="innerContent">
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} lg={6} md={12} sm={12} align="left">
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team1.png" />
                        &nbsp;&nbsp;
                        <Typography variant="h6">Boston Celtics</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Button variant="outlined" color="primary">
                        +300
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team2.png" />
                        &nbsp;&nbsp;
                        <Typography variant="h6">Boston Celtics</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="secondary">
                          +300
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} md={12} sm={12}>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team1.png" />
                        &nbsp;&nbsp;&nbsp;
                        <Typography variant="h6">
                          Los Angeles Clippers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="primary">
                          +750
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={8}>
                      <Box className={classes.innerContentBox}>
                        <Avatar alt="Remy Sharp" src="images/team2.png" />
                        &nbsp;&nbsp;&nbsp;
                        <Typography variant="h6">
                          Los Angeles Clippers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Button variant="outlined" color="secondary">
                          +750
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="innerIcontext">
            <Typography variant="body2">
              View More Bets <ChevronRightIcon />
            </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default FutureComponent;
