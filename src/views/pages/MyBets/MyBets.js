import React, { useState, useEffect } from "react";
import { makeStyles, Button, Box, Grid, IconButton } from "@material-ui/core";
import ActiveBetsCard from "src/component/ActiveBetsCard";
import SettleBetsCard from "src/component/SettleBetsCard";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { useMoralisQuery, useMoralis } from "react-moralis";

const useStyles = makeStyles((theme) => ({
  boxRelative: {
    position: "relative",
    height: "70vh",
    width: "100%",
    textAlign: "center",
  },
  boxFixedCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  centerIcon: {
    fontSize: "9rem",
    color: "rgba(255, 255, 255, 0.2)",
  },
  textContent: {
    color: "rgba(255, 255, 255, 0.2)",
    fontSize: "1rem",
    userSelect: "none",
  },
  betBox: {
    border: "0.5px solid #7784DA",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "15px",
  },
  dailogHeader: {
    padding: "15px",
    "& .mainContent": {
      "& button": {
        marginRight: "10px",
        "&.hover": {
          color: theme.palette.text.white,
        },
        "&.active": {
          color: theme.palette.text.primary,
          border: "1px solid #70D5FB",
        },
      },
    },
  },
  sideDialogHeader: {
    padding: "20px 10px",
    "& .mainContent": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& button": {
        marginRight: "10px",
        minWidth: "55px",
        borderRadius: "10px",
        height: "30px",
        "&.active": {
          color: theme.palette.text.primary,
          border: "1px solid #70D5FB",
        },
      },
    },
  },
}));

export default function (props) {
  const classes = useStyles();
  const { type } = props;
  const [tabview, setTabView] = useState("activeBets");
  const [activeBets, setActiveBets] = useState([]);
  const [settleBets, setSettleBets] = useState([]);
  const { Moralis } = useMoralis();
  const { fetch } = useMoralisQuery(
    "Bets",
    (query) =>
      query.equalTo(
        "userAddress",
        localStorage.getItem("userAddress").toString()
      ),
    [],
    { autoFetch: false }
  );

  useEffect(() => {
    getActiveBets();
    getSettleBets();
  }, []);

  const getActiveBets = async () => {
    setActiveBets([]);
    const query = new Moralis.Query("Bets");
    query.descending("createdAt");
    query.equalTo(
      "userAddress",
      localStorage.getItem("userAddress").toString()
    );
    const results = await query.find();
    setActiveBets(results);
  };

  const getSettleBets = async () => {
    setSettleBets([]);
    const query = new Moralis.Query("SettleBets");
    query.descending("createdAt");
    query.equalTo(
      "userAddress",
      localStorage.getItem("userAddress").toString()
    );
    const results = await query.find();
    setSettleBets(results);
  };
  return (
    <>
      <Box
        className={
          type === "Sidebet"
            ? `${classes.sideDialogHeader}`
            : `${classes.dailogHeader}`
        }
      >
        <Box className="mainContent">
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={tabview === "activeBets" ? "active" : ""}
            onClick={() => setTabView("activeBets")}
          >
            {type === "Sidebet" ? "Active" : " ACTIVE BETS"}
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={tabview === "settleBets" ? "active" : ""}
            onClick={() => setTabView("settleBets")}
          >
            {type === "Sidebet" ? "Settle" : "SETTLED BETS"}
          </Button>
        </Box>

        <Box mt={3}>{tabview == "activeBets" ? <Grid></Grid> : ""}</Box>

        <Box mt={3}>
          {tabview === "activeBets" ? (
            <Grid container spacing={2}>
              {activeBets.length > 0 ? (
                activeBets?.map((data, index) => {
                  return (
                    <>
                      {" "}
                      {type === "Sidebet" ? (
                        <Grid item xs={12}>
                          <ActiveBetsCard
                            data={data}
                            key={index}
                            getActiveBets={getActiveBets}
                            getSettleBets={getSettleBets}
                          />
                        </Grid>
                      ) : (
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                          <ActiveBetsCard
                            data={data}
                            key={index}
                            getActiveBets={getActiveBets}
                            getSettleBets={getSettleBets}
                          />
                        </Grid>
                      )}
                    </>
                  );
                })
              ) : (
                <div className={classes.boxRelative}>
                  <div className={classes.boxFixedCenter}>
                    <IconButton disabled>
                      <ConfirmationNumberIcon className={classes.centerIcon} />
                    </IconButton>
                    <div className={classes.textContent}>Not Active Bets</div>
                  </div>
                </div>
              )}
            </Grid>
          ) : (
            " "
          )}
          {tabview === "settleBets" ? (
            <Grid container spacing={2}>
              {settleBets.length > 0 ? (
                settleBets?.map((data, index) => {
                  return (
                    <>
                      {type === "Sidebet" ? (
                        <Grid item xs={12}>
                          <SettleBetsCard data={data} key={index} />
                        </Grid>
                      ) : (
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                          <SettleBetsCard data={data} key={index} />
                        </Grid>
                      )}
                    </>
                  );
                })
              ) : (
                <div className={classes.boxRelative}>
                  <div className={classes.boxFixedCenter}>
                    <IconButton disabled>
                      <ConfirmationNumberIcon className={classes.centerIcon} />
                    </IconButton>
                    <div className={classes.textContent}>Not Settle Bets</div>
                  </div>
                </div>
              )}
            </Grid>
          ) : (
            " "
          )}
        </Box>
      </Box>
    </>
  );
}
