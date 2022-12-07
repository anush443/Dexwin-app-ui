import React, { useState, useEffect } from "react";
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
import { withdraw1 } from "src/services/withdrawORDeposit";
import CircularProgress from "@material-ui/core/CircularProgress";
import SnackbarService from "src/services/SnackbarService";
import { getBalanceAction } from "../../../redux/actions/balanceAction";
import { updateBalance } from "../../../services/updateBalance";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  formControl2: {
    width: "100%",
    borderRadius: "100px !important",
  },
  paragraph: {
    marginTop: "2rem",
    "& P": {
      color: "#8D8D8D",
    },
  },
  copyicon: {},
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

const Withdraw = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [select, setSelect] = useState("Deposite");
  const [widthdraw, setWidthdraw] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [metaTxEnabled, setMetaTxEnabled] = useState(true);
  const [loader, setLoader] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const balance = localStorage.getItem("userBalance");
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

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };

  const withdrawCurrency = async (_fund) => {
    try {
      if (balance >= _fund) {
        setLoader(true);
        const res = await withdraw1(_fund);
        if (res) {
          setTimeout(async () => {
            const balance = await updateBalance();
            console.log(balance, "ressssssssssss");
            setLoader(false);
            snackBar("Withdraw " + _fund + " amount successfully.", "success");
            // window.location.reload();
            dispatch(getBalanceAction(balance));
          }, 30000);
        } else {
          setLoader(false);
        }
      } else {
        snackBar("Insufficient Token", "danger");
      }
    } catch (err) {
      snackBar(err, "danger");
      setLoader(false);
    }
  };

  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      <Box className="Banner">
        <Box className={classes.exchange}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <Box className="justifyBetween" style={{ margin: "0rem 0.5rem" }}>
                <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                  Withdraw
                </Typography>
                <Typography variant="body1" style={{ color: "#787878" }}>
                  Max 000.35BTC
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Box mt={1}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Withdrawal address"
                  value={withdraw}
                  onChange={(e) => {
                    setWithdraw(e.target.value);
                  }}
                />
              </Box>
              <Box align="right" mt={1}>
                <Typography variant="body1">
                  <span style={{ color: "#7784DA" }}>Available Balance</span>:
                  0.345 BTC
                </Typography>
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
                  withdrawCurrency(withdraw);
                }}
              >
                Withdraw
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Withdraw;
