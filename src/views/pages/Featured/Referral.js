import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import { MdOutlineContentCopy } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  PostBox: {
    background: theme.palette.background.paper,
    paddingBottom: "200px",
    marginBottom: "15px",
    padding: "10px 20px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "30px",

    "& .subbox": {
      marginTop: "10px",
      background: theme.palette.background.tablehead,
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      borderRadius: "30px",
    },
    "& .subchild": {
      "& .paddingsec": {
        padding: "11px 45px 20px",
        display: "flex",
        alignItems: "center",
        borderRadius: "50px",
        "& h3": {
          fontSize: "18px",
          lineHeight: "25px",
        },
        "& h6": {
          fontSize: "14px",
        },
      },
    },
  },
  content: {
    marginTop: "100px",
    "& h6": {
      fontSize: "14px",
      paddingBottom: "5px",
    },
    "& h5": {
      color: "#7784DA",
    },
    "& svg": {
      cursor: "pointer",
      fontSize: "17px",
    },
  },

  TotalRafferral: {
    border: "1px solid #0971a5",
    textAlign: "center",
    padding: "32px",
    background:
      "linear-gradient(180deg, rgba(167,53,211,1) 0%, rgba(57,174,208,1) 100%)",
    borderRadius: "10px",
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
  bin: {
    borderRadius: "7px",
    background: "transparent",
    border: "1px solid grey",
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
export default function (props) {
  const classes = useStyles();
  return (
    <Paper className={classes.PostBox}>
      <Container maxWidth="lg">
        <Box className="subbox">
          <Box className="subchild">
            <Box className="child">
              <Box className="baby"></Box>
            </Box>
            <Box className="paddingsec">
              <Box>
                <Typography variant="h3">Referral</Typography>
                <Typography variant="h6" color="primary">
                  Invite your friends to{" "}
                  <span style={{ color: "#7784DA" }}>Dexwin.Bet</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={2}>
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
              <Box className={classes.TotalRafferral}>
                <Typography variant="h5">Total Commission Earned</Typography>
                <Box className={classes.BtcCard}>
                  <Typography variant="h1" align="center">
                    10&nbsp;<p>BTC</p>errerefer
                  </Typography>
                  dfdfefefewgferfer
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Container maxWidth="xs">
          <Box className={classes.content}>
            <Box>
              <Typography variant="h5">Your Default Campaign</Typography>
              <br />
              <Typography variant="h6" color="primary">
                Link
              </Typography>
              <Box mt={1}>
                <TextField
                  variant="outlined"
                  fullWidth
                  value="www.abccampaign.com"
                  InputProps={{
                    className: classes.bin,
                    endAdornment: (
                      <InputAdornment position="end">
                        <MdOutlineContentCopy />
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
