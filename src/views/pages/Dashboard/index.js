import React, { useState } from "react";
import { makeStyles, Box, Button, Paper } from "@material-ui/core";
import Page from "src/component/Page";
import { BsRecord2 } from "react-icons/bs";
import NftSlider from "../Featured/SliderCard";
import FuturesComponent from "./FuturesComponent";
import Cosafapopup from "../Dashboard/Cosafapopup";
import UpcomingComponent from "./UpcomingComponent";
import LiveComponent from "./LiveComponent";
      

const useStyles = makeStyles((theme) => ({
  PostBox: {
    padding: "15px 16px",
    margin: "0px 0px 30px 0",
    boxShadow: "9px 20px 20px 10px rgb(0 0 0 / 45%)",
    borderRadius: "0px 0px 20px 20px",
    "& button": {
      marginRight: "16px",
      borderRadius: "10px",
      marginTop: "10px",
      "&.active": {
        border: "2px solid #70D5FB",
        borderRadius: "10px",
        position: "relative",
        top: "33px",
      },
      "&.nonActive": {
        position: "relative",
        top: "33px",
      },
    },
  },
  ButtonStyle: {
    background:
      "radial-gradient(98.18% 613.64% at 78.18% 50%, rgba(51, 153, 170, 0.81) 0%, rgba(51, 153, 170, 0) 100%) , radial-gradient(60% 120.26% at 40% 60%, #6437C0 0%, #6437C0 100%) , linear-gradient(159.8deg, #7784DA 24.32%, #7784DA 53.17%)",
  },
}));

export default function (props) {
  const classes = useStyles();
  const [tabview, setTabView] = useState("LIVE");

  const [popup, setpopup] = useState(false);
  return (
    <Page title="Dashboard">
      <Box mb={2}>
        <Box className={classes.PostBox} align="center">
          <NftSlider />

          <Button
            variant="contained"
            color="primary"
            size="large"
            className={tabview === "LIVE" ? "active" : "nonActive"}
            onClick={() => setTabView("LIVE")}
          >
            {" "}
            <BsRecord2 fontSize="25px" />
            LIVE
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={tabview === "UPCOMING" ? "active" : "nonActive"}
            onClick={() => setTabView("UPCOMING")}
          >
            {" "}
            UPCOMING{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={tabview === "FUTURES" ? "active" : "nonActive"}
            onClick={() => setTabView("FUTURES")}
          >
            {" "}
            FUTURES{" "}
          </Button>
        </Box>
        {popup ? <Cosafapopup setpopup={setpopup} /> : ""}
        <Box py={2} className="tabContainer">
          {tabview === "LIVE" ? <LiveComponent /> : ""}
          {tabview === "UPCOMING" ? <UpcomingComponent /> : ""}
          {tabview === "FUTURES" ? <FuturesComponent /> : ""}
        </Box>
      </Box>
    </Page>
  );
}
