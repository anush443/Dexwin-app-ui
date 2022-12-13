import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
  TextField,
  Select,
  Dialog,
  InputAdornment,
  MenuItem,
  Paper,
  Button,
  IconButton,
} from "@material-ui/core";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import ProfileCard from "src/component/ProfileCard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SnackbarService from "src/services/SnackbarService";
// Coming Soon  
// import SwapModal from "src/component/SwapModal";
// import DepositFromExchange from "./DepositFromExchange";
// import WithdrawFromExchange from "./WithdrawFromExchange";
const useStyles = makeStyles((theme) => ({
  centering: {
    "& .profileBoxImg": {
      position: "relative",
      "& img": {
        cursor: "pointer",
        position: "relative",
        maxWidth: "148px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "4px solid #515151",
      },
      "& .editprofile": {
        position: "absolute",
        marginLeft: "-26px",
        bottom: "50px",
        width: "32px",
        height: "32px",
        background: theme.palette.background.secondDeault,
        borderRadius: "50%",
        Transform: "translate(-50%, -50%)",
        cursor: "pointer",
      },
    },
    "& p": {
      whiteSpace: "nowrap",
      width: "102px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    borderRight: "1px solid #413F3F",
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  profileBox: {
    marginTop: "20px",

    borderRadius: "20px",
    position: "relative",
    padding: "50px 15px",
    "& h4": {
      color: "#7784DA !important",
    },
    "& input::placeholder": {
      fontSize: "13px",
    },
    "& .depositeBox": {
      marginRight: "10px",

      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    "& .withdrawBox": {
      borderRadius: "50px",

      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  },
  exchange: {
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  swapbtn: {
    marginTop: "5rem",
  },
  temporaryDiv: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0px",
  },
  heading: {
    fontFamily: "K2D",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#FFFFFF",
  },
  midDisclamer: {
    margin: "14px auto",
  },
  textDisclamer: {
    color: "#787878",
    padding: "1rem 4rem",
    justifyContent: "center",
    fontFamily: "K2D",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    color: "#8D8D8D",
  }
}));

const Index = () => {
  const classes = useStyles();
  const [tabViews, setTabViews] = useState("deposit");
  const [tabViews1, setTabViews1] = useState("withdraw");
  const [checkWithdraw, setcheckWithdraw] = useState(false);
  const [checkDeposit, setcheckDeposit] = useState(true);
  const [openSwap, setOpenSwap] = useState(false);
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

  const handleCloseSwap = () => {
    setOpenSwap(false);
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
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      <Box className="Banner">
        <ProfileCard />
        <Paper className={classes.profileBox} mt={2} elevation={2}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={4}
              className={classes.centering}
            >
              <Box className="profileBoxImg" align="center">
                <img
                  src="images/profile_img.png"
                  width="85%"
                  alt="Profile Pic "
                />

                <Box mt={1} className="flexCenter">
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
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.swapbtn}
                  onClick={() => setOpenSwap(true)}
                >
                  <img src="images/wallet_icon.png" alt="image" />
                  &nbsp;&nbsp;&nbsp;&nbsp; Bridge Assets
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={9} lg={8}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item md={4} xs={6}>
                  <Box className="depositeBox">
                    <Select
                      fullWidth
                      onChange={(e) => {
                        setTabViews(e.target.value);
                        setcheckWithdraw(false);
                        setcheckDeposit(true);
                      }}
                  
                      value={tabViews}
                    >
                      <MenuItem
                        value="deposit"
                        onClick={() => {
                          setcheckWithdraw(false);
                          setcheckDeposit(true);
                        }}
                        className={tabViews === "deposit" ? "active" : "nonactive"}
                      >
                        {" "}
                        Deposit
                      </MenuItem>
                      {/* <MenuItem
                        value="deposit-from-exchange"
                        onClick={() => {
                          setcheckWithdraw(false);
                          setcheckDeposit(true);                        Coming Soon
                        }}
                        className={
                          tabViews === "deposit-from-exchange" ? "active" : "nonactive"
                        }
                      >
                        Deposit to Exchange
                      </MenuItem> */}
                    </Select>
                  </Box>
                </Grid>
                <Grid item md={4} xs={6}>
                  <Box className="withdrawBox">
                    <Select
                      fullWidth
                      onChange={(e) => {
                        setTabViews1(e.target.value);
                        setcheckWithdraw(true);
                        setcheckDeposit(false);
                      }}
                      
                      value={tabViews1}
                    >
                      <MenuItem
                        value="withdraw"
                        onClick={() => {
                          setcheckWithdraw(true);
                          setcheckDeposit(false);
                        }}
                        className={tabViews1 === "withdraw" ? "active" : "nonactive"}
                      >
                        Withdraw
                      </MenuItem>
                      {/* <MenuItem
                        value="withdraw-from-exchange"
                        onClick={() => {
                          setcheckWithdraw(true);
                          setcheckDeposit(false);
                        }}
                        className={                                Coming Soon
                          tabViews1 === "withdraw-from-exchange" ? "active" : "nonactive"
                        }
                      >
                        Withdraw to Exchange
                      </MenuItem> */}
                    </Select>
                  </Box>
                </Grid>
              </Grid>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {tabViews === "deposit" && checkDeposit && <Deposit />}
                {/* {tabViews === "deposit-from-exchange" && checkDeposit && (
                  <DepositFromExchange />                     Coming Soon
                )} */}
                {tabViews1 === "withdraw" && checkWithdraw && <Withdraw />}
                {/* {tabViews1 === "withdraw-from-exchange" && checkWithdraw && (
                  <WithdrawFromExchange />                     Coming Soon
                )} */}
              </Box>
            </Grid>

            <Box xs={12} align="center" mt={3} className= {classes.midDisclamer}>
              <Typography
                variant="body1" className= {classes.textDisclamer}
             
              >
                Disclaimer: Please ensure that the Chain is set to Polygon Mumbai Testnet 
              </Typography>
            </Box>
          </Grid>
          <Dialog
            open={openSwap}
            onClose={() => setOpenSwap(false)}
            fullWidth
            width="sm"
            style={{ borderRadius: "10px !important" }}
          >
            <div>
              <div className={classes.temporaryDiv}>
                <h1 className={classes.heading}>Only on Main Net</h1>
              </div>
            </div>
            {/* <SwapModal handleCloseSwap={handleCloseSwap} />                   Coming Soon */}
          </Dialog>
        </Paper>
      </Box>
    </>
  );
};

export default Index;
