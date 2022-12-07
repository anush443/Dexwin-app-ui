import React from "react";
import { Box, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  PostBox: {
    marginTop: "20px",
    marginBottom: "10px",
    padding: "12px 16px",
    background: theme.palette.background.paper,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "30px",
    "& button": {
      marginRight: "10px",
    },
  },

  ButtonStyle: {
    background:
      "radial-gradient(98.18% 613.64% at 78.18% 50%, rgba(51, 153, 170, 0.81) 0%, rgba(51, 153, 170, 0) 100%) , radial-gradient(60% 120.26% at 40% 60%, #6437C0 0%, #6437C0 100%) , linear-gradient(159.8deg, #7784DA 24.32%, #7784DA 53.17%)",
  },
  mainbox: {
    background: theme.palette.background.paper,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "30px",
    padding: "11px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  ButtonBox: {
    paddingLeft: "210px",
  },
}));
export default function (props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.PostBox}>
      <Box className={classes.mainbox}>
        <IconButton onClick={() => history.push("/")}>
          <ArrowBackIcon style={{ color: "white" }} />
        </IconButton>
        <Box className={classes.ButtonBox}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => history.push("/ActiveBits")}
          >
            ACTIVE BETSv,
          </Button>
          <Button
            className={classes.ButtonStyle}
            variant="contained"
            color="primary"
            size="large"
            onClick={() => history.push("/SettleBits")}
          >
            SETTLE BETS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
