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
  IconButton,
} from "@material-ui/core";
import { BiCopy } from "react-icons/bi";
import FormControl from "@material-ui/core/FormControl";
import ProfileCard from "src/component/ProfileCard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SnackbarService from "src/services/SnackbarService";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
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
  copyFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const DepositFromExchange = () => {
  const classes = useStyles();
  const [select, setSelect] = useState("Deposite");
  const [widthdraw, setWidthdraw] = useState("Withdraw");
  const [address, setAddress] = useState([]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };
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
  useEffect(() => {
    const address = localStorage.getItem("userAddress");
    setAddress(address);
  }, []);
  const formatWalletAddress = (text) => {
    return text.slice(0, 15) + "...";
  };

  const copyAddress = () => {
    setCopySuccess(true);
    snackBar("Copied Wallet Address", "info");
  };

  return (
    <>
      <Box className="Banner">
        <Box className={classes.exchange}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <Box>
                <Typography variant="body2" style={{ color: "#787878" }}>
                  Deposit from exchange
                </Typography>
                <FormControl className={classes.formControl2}>
                  <Box mt={2}>
                    <Select
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="weather"
                      value={select1}
                      onChange={handleChange1}
                    >
                      <MenuItem value={"BTC"}>
                        <Box className={classes.selectBox}>
                          <img src="images/dexwinCoin.png" alt="image" />
                          <Typography variant="h5">DWIN</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Box>
                <Typography variant="body2" style={{ color: "#787878" }}>
                  Wallet address
                </Typography>
                <div className={classes.copyFlex}>
                  <Typography variant="body2">
                    {formatWalletAddress(address)}&nbsp;
                  </Typography>
                  <CopyToClipboard text={address}>
                    {!copySuccess ? (
                      <IconButton onClick={() => copyAddress()}>
                        <MdOutlineContentCopy
                          style={{
                            color: "rgb(250, 145, 49)",
                            cursor: "pointer",
                            fontSize: "18px",
                          }}
                        />
                      </IconButton>
                    ) : (
                      <span className="animate__animated animate__fadeIn">
                        <IconButton>
                          <MdCheck
                            style={{
                              color: "rgb(250, 145, 49)",
                              cursor: "pointer",
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </span>
                    )}
                  </CopyToClipboard>
                  {snackBarContent && (
                    <SnackbarService
                      msg={snackBarMsg}
                      status={snackBarStatus}
                    />
                  )}
                </div>
              </Box>
            </Grid>
          </Grid>
          <Box align="right" mt={1}>
            <Typography variant="body1">
              <span style={{ color: "#7784DA" }}>Available Balance</span>: 0.345
              BTC
            </Typography>
          </Box>
          <Box mt={5} mb={4} align="center">
            <img src="/images/Qrscanar.png" alt="" style={{ width: "35%" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DepositFromExchange;
