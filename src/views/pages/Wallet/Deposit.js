import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
  TextField,
  Select,
  InputAdornment,
  MenuItem,
  Button,
} from "@material-ui/core";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import FormControl from "@material-ui/core/FormControl";
import { submitContext } from "../../../layouts/DashboardLayout/TopBar";

import CircularProgress from "@material-ui/core/CircularProgress";
import SnackbarService from "src/services/SnackbarService";
import { deposit1, initBiconomy } from "src/services/withdrawORDeposit";
import { getBalanceAction } from "../../../redux/actions/balanceAction";
import { updateBalance } from "../../../services/updateBalance";
import { useSelector, useDispatch } from "react-redux";
// deposit data

const useStyles = makeStyles((theme) => ({
  selectbox3: {
    height: "50px !important",
  },
  selectbox4: {
    height: "50px !important",
    paddingLeft: "15px",
  },
  formControl2: {
    width: "100%",
    borderRadius: "100px !important",
  },
  selectBox: {
    display: "flex",
    alignItems: "center",
    "& h5": {
      fontSize: "14px",
      marginLeft: "10px",
      fontWeight: "700",
    },
    "& img": {
      width: "25px",
    },
  },
  exchange: {
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
}));
const Deposit = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [select, setSelect] = useState("Deposite");
  const [widthdraw, setWidthdraw] = useState("Withdraw");
  const [Fund, setFund] = useState("");
  const [loader, setLoader] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");

  const handleChange2 = (event) => {
    setWidthdraw(event.target.value);
  };
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const [select1, setSelect1] = useState("BTC");
  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };
  // const onSubmit = useContext(submitContext);

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };

  const depositeCurrency = async (_fund) => {
    try {
      setLoader(true);
      const res = await deposit1(_fund);

      if (res) {
        // snackBar(
        //   "Transaction sign for " + _fund + " amount successfully.",
        //   "success"
        // );
        setTimeout(async () => {
          const balance = await updateBalance();
          console.log(balance, "ressssssssssss");
          setLoader(false);
          snackBar("Deposite " + _fund + " amount successfully.", "success");
          // window.location.reload();
          dispatch(getBalanceAction(balance));
        }, 30000);
      } else {
        setLoader(false);
      }
    } catch (err) {
      snackBar(err, "danger");
      setLoader(false);
    }
  };
  // end of deposit functionality
  useEffect(() => {
    initBiconomy();
  }, []);
  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      <Box className="Banner">
        <Box className={classes.exchange}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <Box>
                <Typography variant="body2" style={{ color: "#787878" }}>
                  Deposit
                </Typography>
                <Box mt={2}>
                  <FormControl className={classes.formControl2}>
                    <Select
                      className={classes.selectbox3}
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="weather"
                      value={select1}
                      onChange={handleChange1}
                    >
                      <MenuItem value={"BTC"}>
                        <Box className={classes.selectBox}>
                          <img src="images/btc.png" alt="image" />
                          <Typography variant="h5">BTC</Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value={"BNB"}>
                        <Box className={classes.selectBox}>
                          <img src="images/bnb.png" alt="image" />
                          <Typography variant="h5">BNB</Typography>
                        </Box>
                      </MenuItem>

                      <MenuItem value={"ETH"}>
                        <Box className={classes.selectBox}>
                          <img src="images/eth.png" alt="image" />
                          <Typography variant="h5">ETH</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Box>
                <TextField
                  className="select4"
                  variant="outlined"
                  type="number"
                  fullWidth
                  placeholder="Enter Amount"
                  onChange={(e) => {
                    setFund(e.target.value);
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box align="center" mt={3}>
            {loader ? (
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                className="gradientButton"
                disabled
              >
                {" "}
                <CircularProgress color="secondary" />{" "}
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                className="gradientButton"
                onClick={() => {
                  depositeCurrency(Fund);
                }}
              >
                {" "}
                Submit{" "}
              </Button>
            )}
          </Box>
        </Box>
        <NotificationContainer />
      </Box>
    </>
  );
};

export default Deposit;
