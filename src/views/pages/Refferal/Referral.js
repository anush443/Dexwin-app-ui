import React, { useState, useEffect} from "react";
import {
  Typography,
  Box,
  Paper,
  InputAdornment,
  IconButton,
  Grid,
  Container,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { MdOutlineContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdCheck } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  PostBox: {
    paddingBottom: "200px",
    marginBottom: "15px",
    padding: "10px 20px",
    "& span": {
      fontSize: "13px",
      color: "#B0B0B0",
    },
    "& .subbox": {
      marginTop: "10px",
      borderRadius: "30px",
    },
    "& .subchild": {
      "& .paddingsec": {
        padding: "20px",
        background: theme.palette.background.heading,
        display: "flex",
        alignItems: "center",
        borderRadius: "50px",
        [theme.breakpoints.down("md")]: {
          padding: "15px",
        },
        "& h3": {
          fontSize: "18px",
          lineHeight: "18px",
          color: theme.palette.text.white,
          [theme.breakpoints.down("md")]: {
            fontSize: "14px",
          },
        },
        "& h6": {
          color: "#787878",
          fontSize: "14px",
        },
      },
    },
  },
  content: {
    marginTop: "80px",
    "& h6": {
      color: "#787878",
      fontSize: "14px",
    },
    "& h5": {
      color: "#7784DA",
    },
    "& svg": {
      cursor: "pointer",
      fontSize: "17px",
    },
  },

  TotalRafferral1: {
    textAlign: "center",
    padding: "32px",
    borderRadius: "15px",
    background: theme.palette.background.Refferal1,
    boxShadow:
      "-10px -10px 20px rgb(255 255 255 / 10%), 10px 10px 20px rgb(0 0 0 / 25%)",
  },
  TotalRafferral: {
    textAlign: "center",
    padding: "32px",
    boxShadow:
      "-10px -10px 20px rgb(255 255 255 / 10%), 10px 10px 20px rgb(0 0 0 / 25%)",
    background: theme.palette.background.Refferal,
    borderRadius: "15px",
    "& h4": {
      paddingBottom: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
    "& sub": {
      fontSize: "18px",
    },
  },
  BtcCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  Smalltitle: {
    marginLeft: "63px",
    maxWidth: "300px",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "0px",
      maxWidth: "100%",
    },

    "& p": {
      color: "#787878",
      fontSize: "14px",
    },
  },
}));
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Flex2 = styled.div`
  display: flex;
  gap: 9px;
`;
const Para = styled.p`
  font: normal 400 18px/13px K2D;
  color: #ffffff;
`;

export default function (props) {
  const classes = useStyles();
  const [address, setAddress] = useState('');
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

  const copyAddress = () => {
    setCopySuccess(true);
    snackBar("Copied Wallet Address", "info");
  };

  const fetchRefAddress = async () => {
    if(window?.ethereum){
      const addressRef = await window.ethereum.enable()
      console.log('addressRef',addressRef);
      setAddress(addressRef[0])
    }
  }

  useEffect(() => {
    fetchRefAddress()
  }, [window?.ethereum])


  return (
    
    <Paper className={classes.PostBox} elevation={2}>
      <Container maxWidth="lg">
        <Box className="subbox">
          <Box className="subchild">
            <Box className="child">
              <Box className="baby"></Box>
            </Box>
            <Box className="paddingsec">
              <Grid container alignItems="center">
                <Grid item xs={8}>
                  <Typography variant="h3">
                    Referral &nbsp; <span>Invite your friends to</span>&nbsp;
                    <span style={{ color: "#7784DA" }}>Dexwin.Bet</span>
                  </Typography>
                </Grid>
                {/*<Grid item xs={4}>
                  <Box className="justifyEnd">
                    <img
                      src="images/pro.png"
                      alt="image"
                      style={{ marginRight: "10px" }}
                    />
                    <img src="images/pro.png" alt="image" />
                  </Box>
  </Grid>*/}
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box mt={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={classes.TotalRafferral}>
                <Typography variant="h5">Total Referred Friends</Typography>

                <Typography align="center" variant="h1">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={classes.TotalRafferral1}>
                <Typography variant="h5">Total Commission Earned</Typography>
                <Box className={classes.BtcCard}>
                  <Flex2>
                    <Typography variant="h1" align="center">
                      10
                    </Typography>
                    <Para style={{marginTop:'revert'}}>BTC</Para>
                  </Flex2>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Container maxWidth="xs">
          <Box className={classes.content}>
            <Box>
              <Flex>
                <Typography variant="h5">Your Default Campaign</Typography>
                <br />
                <Typography variant="h6" color="primary">
                  LINK
                </Typography>
              </Flex>
              <Box mt={1}>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={`app.staging.dexwin.bet/?referralID=${address}`}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {/*<MdOutlineContentCopy />*/}
                        <CopyToClipboard text={`app.staging.dexwin.bet/?referralID=${address}`}>
                          {!copySuccess ? (
                            <IconButton onClick={() => copyAddress()}>
                              <MdOutlineContentCopy
                                style={{
                                  color: "#fff",
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
                                    color: "#fff",
                                    cursor: "pointer",
                                    fontSize: "18px",
                                  }}
                                />
                              </IconButton>
                            </span>
                          )}
                        </CopyToClipboard>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box align="center" mt={4}>
            <IconButton target="_blank" href="https://web.whatsapp.com/">
              <img src="images/whatsop.png" alt="" width="40px" />
            </IconButton>

            <IconButton target="_blank" href="https://www.facebook.com/">
              <img src="images/facebbok.png" alt="" width="40px" />
            </IconButton>

            <IconButton target="_blank" href="https://www.instagram.com/">
              <img src="images/instagram.png" alt="" width="40px" />
            </IconButton>

            <IconButton target="_blank" href="https://telegram.org/">
              <img src="images/telegram.png" alt="" width="40px" />
            </IconButton>
          </Box>
          <Box align="center" className={classes.Smalltitle} mt={4}>
            <Typography variant="body1">
              Your Friends Are Not Receiving Kickbacks As Part Of This Campaign
            </Typography>
          </Box>
        </Container>
      </Container>
    </Paper>
  );
}
