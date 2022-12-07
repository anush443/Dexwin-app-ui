import React from "react";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Divider,
} from "@material-ui/core";
import CounterNumberModal from "./CounterNumberModal";
import Circularslider from "./Circularslider";

const useStyles = makeStyles((theme) => ({
  DashboardCardbox: {
    background: theme.palette.background.heading,
    position: "relative",
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
        "& button": {
          width: "83px",
          height: "40px",
          background:
            "radial-gradient(60.37% 50% at 50% 50%, rgba(255, 16, 16, 0.5) 0%, rgba(255, 0, 0, 0) 100%), linear-gradient(159.8deg, #FDB26D 24.32%, #FA6131 89.49%)",
          boxShadow: "0px 0px 11px #CF2B2B",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "700",
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
  innerContentBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px",
    "& div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
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
  playerName: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function LiveScorepopular(props) {
  const classes = useStyles();
  const { type } = props;
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);
  return (
    <>
      <Box className={classes.DashboardCardbox}>
        <Box className="subheading">
          <Typography variant="body1">
            {" "}
            <img src="images/Vectorsec.png" alt="Hello" />{" "}
            &nbsp;&nbsp;&nbsp;Belarus Sky League
          </Typography>
        </Box>
        <Box className={classes.liveAndUpcomingmainContentBox} mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
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
                      style={{ color: "#39AED0", marginLeft: "-193px" }}
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
                    <CounterNumberModal />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={4}>
                  <Circularslider />
                </Grid>
                <Grid item xs={4}>
                  <Circularslider />
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
                    <Button className={classes.counterButton}>+300</Button>
                    <Box mt={2}>
                      <Button className={classes.counterButton}>+300</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
