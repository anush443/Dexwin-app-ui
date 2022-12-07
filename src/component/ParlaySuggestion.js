import { Box } from "@material-ui/core";
import React from "react";
import {
  makeStyles,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Switch,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { getSameLeagueCheck } from "../services/placeBet";

const useStyles = makeStyles((theme) => ({
  betBox: {
    padding: "10px",
    border: "1px solid #2fb3fc69",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "15px",
    background: theme.palette.background.perlyBox,
    "& p": {
      color: theme.palette.text.noticetext,
    },
  },
  betBoxError: {
    display: "none",
  },
  sameLeaguesError: {
    color: "red",
    fontSize: "14px",
    fontWeight: 600,
  },
  header: {
    background: "#6437C0",
    padding: "6px",
    "& svg": { marginRight: "7px", fontSize: "20px" },
  },
  hide:{
    display:"none"
  },
  show:{
 
  },
  betdetails: {
    "& h5": {
      color: theme.palette.text.noticetext,
    },
    "& p": {
      color: theme.palette.text.noticetext,
    },
  },
  textBoxBet: {
    padding: "10px",
    background: theme.palette.background.brown,
    width: "120px",
    marginRight: "10px",
  },
  whiteButton: {
    background: "linear-gradient(100.49deg, #FFFFFF 2.85%, #8DE6D1 115.5%)",
    boxShadow:
      "0px 0px 10px #8DE6D1, -10px -10px 20px rgba(255, 255, 255, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.5)",
    color: "#444343",
    fontSize: "17px",
    fontWeight: 700,
    width: "calc(100% - 71px)",
    whiteSpace: "pre",
  },
  textField: {
    background: theme.palette.background.heading,
    color: theme.palette.text.white,
    boxShadow:
      "inset -10px -10px 20px rgb(255 255 255 / 8%), inset 10px 10px 20px rgb(0 0 0 / 25%)",
    borderRadius: "5px",
    "& label": {
      color: "#39AED0",
    },
    "&  placeholder": {
      color: "#39AED0 !important",
    },
  },
}));

export default function (props) {
  const { handleMultipleBets, parlayWinAmount, parlayAmount, parlayBetNow } =
    props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const betSlipData = useSelector((state) => state?.getAllReducer?.betSlip);
  const leagueCheck = getSameLeagueCheck();
  console.log(leagueCheck,"leagueCheck")
  return (
  <>

    <Box
      className={leagueCheck === true ? classes.betBoxError : classes.betBox}
    >
      <div className={betSlipData.data.length === 1 ? classes.hide : classes.show}>
        <Box mt={1} className={`${classes.betdetails} justifyBetween`}>
          <Typography variant="body2" color="white">
            {betSlipData?.data?.length} Leg Parlay
          </Typography>
          <Typography variant="h5" color="white">
            {betSlipData?.totalOdds}
          </Typography>
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Wager"
                placeholder="0"
                id="inputID"
                fullWidth
                value={parlayAmount}
                onChange={(e) => handleMultipleBets(e)}
                className={clsx(classes.textField)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{
                        color: " #FA9131",
                        fontSize: "18px",
                      }}
                    >
                      <Typography variant="h6">$</Typography>
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="To Win"
                placeholder="0"
                id="inputID"
                fullWidth
                value={parlayWinAmount}
                className={clsx(classes.textField)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{
                        color: " #FA9131",
                        fontSize: "18px",
                      }}
                    >
                      <Typography variant="h6">$</Typography>
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="center" my={2}>
          <Typography variant="body2" color="white">
            Odds have increased for your section
          </Typography>
        </Box>
        <Box mt={2} align="center">
          {leagueCheck === true ? (
            <Button className={classes.sameLeaguesError}>
              {" "}
              Odds of same league are not allowed for parlay only
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => {
                parlayBetNow();
              }}
              className={classes.whiteButton}
            >
              Place Parley Bet
            </Button>
          )}
        </Box>
      </div>
    </Box>


    </>
  );
}
