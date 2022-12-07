import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BsRecord2 } from "react-icons/bs";
import Cosafapopup from "../Dashboard/Cosafapopup";
import Leaguebackground from "../Dashboard/Leaguebackground";
import Featuressection from "../Dashboard/Featuressection";
import LatestFeatures from "../Dashboard/LatestFeatures";
const useStyles = makeStyles((theme) => ({
  PostBox: {
    marginBottom: "10px",
    padding: "12px 16px",

    borderRadius: "20px",
    "& button": {
      marginRight: "10px",
      "&.active": {
        background:
          "radial-gradient(98.18% 613.64% at 78.18% 50%, rgba(51, 153, 170, 0.81) 0%, rgba(51, 153, 170, 0) 100%) , radial-gradient(60% 120.26% at 40% 60%, #6437C0 0%, #6437C0 100%) , linear-gradient(159.8deg, #7784DA 24.32%, #7784DA 53.17%)",
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
    <>
      <Paper className={classes.PostBox}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={tabview === "LIVE" ? "active" : ""}
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
          className={tabview === "UPCOMING" ? "active" : ""}
          on
          Click={() => setTabView("UPCOMING")}
        >
          {" "}
          UPCOMING{" "}
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={tabview === "FUTURES" ? "active" : ""}
          onClick={() => setTabView("FUTURES")}
        >
          {" "}
          FUTURES{" "}
        </Button>
      </Paper>
      {popup ? <Cosafapopup setpopup={setpopup} /> : ""}
      <Box>
        {tabview === "LIVE" ? <Leaguebackground /> : ""}
        {tabview === "UPCOMING" ? <Featuressection /> : ""}
        {tabview === "FUTURES" ? <LatestFeatures /> : ""}
      </Box>
    </>
  );
}
