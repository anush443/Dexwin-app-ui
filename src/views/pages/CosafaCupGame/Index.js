import React, { useState } from "react";
import {
  Paper,
  Box,
  // Grid,
  // Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TabsComponent from "./TabsComponent";
import { getSingleGame, getOddAPI } from "src/services/ApiCall";
// import { BsRecord2 } from "react-icons/bs";
import "../../../scss/main.css";

const useStyles = makeStyles((theme) => ({
  activeBtnClass: {
    top: 0,
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
    borderTop: "1px solid rgba(112, 213, 251, 1)",
    borderBottom: "1px solid rgba(75, 78, 131, 1)",
    borderLeft: "1px solid rgba(112, 213, 251, 1)",
    borderRight: "1px solid rgba(75, 78, 131, 1)",
    borderRadius: "10px",
  },
  PostBox: {
    height: "auto",
    marginBottom: "15px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "30px",
    "& h6": {
      color: theme.palette.text.primary,
    },
    "&  img": {
      height: "1 rem",
      width: "1 rem",
    },
    "& .titlesec": {
      height: "56px",
      background: theme.palette.background.heading,
      borderRadius: "30px 30px 0px 0px",
      paddingRight: "18px",
      "& .child": {
        padding: "12px 24px",
      },
      "& .subbaby": {
        display: "flex",
        alignItems: "center",
      },
      "&  img": {
        height: "2.5rem",
        width: "2.5rem",
      },
    },
    "& svg": { color: "white", fontSize: "20px" },
    "& .imgsec": {
      background:
        "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(/images/bansketballbanner.png)",
      height: "282px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "0px",
      "& button": {
        background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        border: "0.2px solid #383838",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
        borderRadius: "5px",
        color: "#FA9131",
        fontSize: "20px",
        height: "28px",
        transform: "scale(0.7, 1)",
      },
      "& .scorecew": {
        width: "71px",
        height: "60px",
        background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        borderRadius: "10px",
        "& body2": {
          textAlign: "center",
        },
      },
      "& p": {
        color: "#fff",
      },
      "&.active": {
        top: "0px !important",
        border: "1px solid #70D5FB",
      },
    },
  },
  paddingsectionx: {
    padding: "10px 15px 25px 15px",
  },
  backGrid: {},
  btnlive: {},
  activeTabTop: {
    borderRadius: "10px",
    borderTop: "1px solid rgba(112, 213, 251, 1)",
    borderBottom: "1px solid rgba(75, 78, 131, 1)",
    borderLeft: "1px solid rgba(112, 213, 251, 1)",
    borderRight: "1px solid rgba(75, 78, 131, 1)",
  },
}));

export default function CosafaCupGame(props) {
  const {
    setpopup,
    handleClosecosafa,
    liveLeaguesdata,
    upcommingleaguesData,
    scores,
    league,
    matchId,
    teams,
    type,
    details,
  } = props;
  const [matchDetails, setMatchDetails] = useState([]);
  const classes = useStyles();
  const [threeWayOdds, setThreeWayOdds] = useState([]);
  // const [tabview, setTabView] = useState("LIVE");

  const getMatcheDetails = async () => {
    try {
      const endPoint = "getSingleGameDetails";
      const response = await getSingleGame(endPoint, matchId);
      if (response) {
        setMatchDetails(response.data.Data);
      } else {
        setMatchDetails([]);
      }
    } catch (error) {}
  };

  const getThreeWayOddAPIOddUsignGameId = async () => {
    try {
      const endPoint = "threeWayOddAPI";
      const response = await getOddAPI(endPoint, matchId);
      if (response.data.status == "success") {
        setThreeWayOdds(response.data.data[0].bookmakers[0].bets[0].values);
      } else {
        setThreeWayOdds([]);
      }
    } catch (error) {}
  };

  return (
    <Paper className={classes.PostBox}>
      {/* //Coming soon */}
      {/* <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <Grid className={classes.btnlive}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={tabview === "LIVE" ? classes.activeTabTop : ""}
            onClick={() => setTabView("LIVE")}
          >
            {" "}
            <BsRecord2 fontSize="25px" />
            LIVE
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={tabview === "UPCOMING" ? classes.activeTabTop : ""}
            onClick={() => setTabView("UPCOMING")}
          >
            {" "}
            UPCOMING{" "}
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={tabview === "FUTURES" ? classes.activeTabTop : ""}
            onClick={() => setTabView("FUTURES")}
          >
            {" "}
            FUTURES{" "}
          </Button>
        </Grid>
      </Grid> */}

      <Box className={classes.paddingsection}>
        <TabsComponent
          liveLeaguesdata={liveLeaguesdata}
          upcommingleaguesData={upcommingleaguesData}
          matchId={matchId}
          teams={teams}
          scores={scores}
          type={type}
          league={league}
          details={details}
        />
      </Box>
    </Paper>
  );
}
