import React, { useState, useEffect, useRef } from "react";
import {
  makeStyles,
  Divider,
  Box,
  Grid,
  Avatar,
  Typography,
  Button,
  Paper,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SnackbarService from "src/services/SnackbarService";

const useStyles = makeStyles((theme) => ({
  userSelectNone: {
    userSelect: "none",
  },
  modalButtonBox: {
    "& button": {
      padding: "12px 0 !important",
      "&:hover": {
        border: "1px solid rgb(51, 153, 170)",
      },
    },
  },
  userProfileImage: {
    "& figure": {
      margin: "0px",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& img": {
        width: "100%",
        minHeight: "100%",
      },
    },
  },
  centerdiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15px"
  }
}));

function UserProfileComponent() {
  const classes = useStyles();
  const history = useHistory();
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

  useEffect(() => {
    const address = localStorage.getItem("userAddress");
    setAddress(address);
  }, []);

  const formatWalletAddress = (text) => {
    return text.slice(0, 9) + "..." + text.slice(-4);
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
      <Box className={classes.root}>
        <Box style={{ padding: "15px" }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3} align="center">
              <Box className={classes.userProfileImage}>
                <figure>
                  <img alt="Travis Howard" src="images/user.png" />
                </figure>
              </Box>
            </Grid>
            <Grid item xs={9} align="left">
              <Box mt={2} className="flexjustify">
                <Typography variant="h6">
                  <span>{formatWalletAddress(address)}</span>
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
                </Typography>
              </Box>
              <Typography
                className={classes.userSelectNone}
                variant="body1"
                style={{ color: "#39AED0" }}
              >
                Connected
              </Typography>
              <Box mt={1}>
                <Typography
                  className={classes.userSelectNone}
                  variant="body2"
                  style={{ color: "#39AED0" }}
                >
                  Your Balanace
                </Typography>
              </Box>
              <Grid container alignItems="center">
                <Grid item xs={6} align="left">
                  <Box className="flexjustify">
                    <img src="images/Binance_Logo.svg" alt="image" />
                    <Typography
                      className={classes.userSelectNone}
                      variant="h6"
                      style={{
                        fontSize: "15px",
                        marginLeft: "3px",
                      }}
                    >
                      0.004577
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} align="left">
                  <Typography
                    className={classes.userSelectNone}
                    variant="body2"
                    style={{ color: "#39AED0" }}
                  >
                    ($0.00999)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box style={{ padding: "15px" }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6} align="left">
              <Box className={classes.modalButtonBox}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => history.push("/my-account")}
                >
                  View profile
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} align="left">
              <Box className={classes.modalButtonBox}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => history.push("/wallet")}
                >
                  Wallet
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} align="left">
              <Box className={classes.modalButtonBox}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => history.push("/my-bets")}
                >
                  My Bets
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} align="left">
              <Box className={classes.modalButtonBox}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => history.push("/transaction")}
                >
                  Transaction
                </Button>
              </Box>
            </Grid>
          </Grid>
          <div className={classes.centerdiv}>
          <Grid item xs={6} align="center">
              <Box className={classes.modalButtonBox}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => history.push("/notifications")}
                >
                  Notifications
                </Button>
              </Box>
            </Grid>
            </div>
        </Box>
      </Box>
    </>
  );
}

export default UserProfileComponent;
