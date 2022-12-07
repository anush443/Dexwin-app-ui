import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
  IconButton,
  Paper,
  Avatar,
} from "@material-ui/core";
import { BiPencil } from "react-icons/bi";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfileCard from "src/component/ProfileCard";
import { FiEdit2 } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SnackbarService from "src/services/SnackbarService";

const useStyles = makeStyles((theme) => ({
  myAccountBox: {
    marginTop: "20px",
    position: "relative",
    padding: "50px 15px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
    "& .accountText": {
      color: theme.palette.text.primary,
      fontSize: "19px !important",
      fontWeight: "700",
      marginBottom: "40px",
      color: "#39AED0",
      [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
      },
    },
    "& .centering": {
      borderRight: "1px solid #413F3F",
      marginTop: "30px",

      [theme.breakpoints.down("sm")]: {
        border: "none",
      },
    },
    "& .secondgrid": {
      paddingLeft: "30px !important",
      [theme.breakpoints.only("xs")]: {
        paddingLeft: "10px !important",
      },
    },

    "& .infoBox": {
      padding: "6px 0px",
      display: "flex",
      alignItems: "center",
      "& h5": {
        fontSize: "15px",
        color: theme.palette.text.primary,
        fontWeight: "600",
        [theme.breakpoints.down("md")]: {
          fontSize: "13px",
        },
      },
      "& h6": {
        color: theme.palette.text.primary,
        color: "#39AED0",
        fontSize: "15px",
        fontWeight: "500",
        [theme.breakpoints.only("xs")]: {
          whiteSpace: "nowrap",
          width: "calc(100% - 10px)",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      "& svg": {
        color: "#787878 !important",
        marginRight: "15px",
        fontSize: "20px",
        [theme.breakpoints.only("xs")]: {
          marginRight: "8px",
        },
      },
    },
    "& .accountImg": {
      position: "relative",
      "& img": {
        cursor: "pointer",
        position: "relative",
        maxWidth: "148px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "4px solid #515151",
      },
    },
    "& p": {
      whiteSpace: "nowrap",
      width: "102px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .editprofile": {
      position: "absolute",
      right: "5px",
      bottom: "60px",
      width: "32px",
      height: "32px",
      background: "#787878",
      borderRadius: "50%",
      Transform: "translate(-50%, -50%)",
      cursor: "pointer",
    },
  },
  AvatarIcon: {
    cursor: "pointer",
    position: "absolute",
    right: "40px",
    fontSize: "18px",
  },
}));

const TokenInfo = () => {
  const classes = useStyles();

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
      <Box>
        <ProfileCard />
        <Paper className={classes.myAccountBox} mt={2} elevation={2}>
          <Box className="editBox">
            <Avatar
              className={classes.AvatarIcon}
              component={Link}
              to="/edit-profile"
            >
              <BiPencil />
            </Avatar>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3} className="centering">
              <Box className="accountImg" align="center">
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
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={9} lg={9} className="secondgrid">
              <Typography className="accountText" variant="h6">
                My Account
              </Typography>
              <Box mb={5}>
                <Grid container spacing={1}>
                  <Grid item xs={5} sm={5} md={6} lg={4}>
                    <Box className="infoBox">
                      <PersonIcon />
                      <Typography variant="h5">User Name :</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={6} lg={8}>
                    <Box className="infoBox">
                      <Typography variant="h6">Anthany Stark</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5} sm={5} md={6} lg={4}>
                    <Box className="infoBox">
                      <EmailIcon />
                      <Typography variant="h5">Email Address :</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={6} lg={8}>
                    <Box className="infoBox">
                      <Typography variant="h6">
                        AnthanyStark@gmail.com
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5} sm={5} md={6} lg={4}>
                    <Box className="infoBox">
                      <PhoneIphoneIcon />
                      <Typography variant="h5">Phone Number :</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={6} lg={8}>
                    <Box className="infoBox">
                      <Typography variant="h6">+91 98765433212</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5} sm={5} md={6} lg={4}>
                    <Box className="infoBox">
                      <FaFacebook />
                      <Typography variant="h5">Facebook URL :</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={6} lg={8}>
                    <Box className="infoBox">
                      <Typography variant="h6">
                        facebook.com/anthony123
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5} sm={5} md={6} lg={4}>
                    <Box className="infoBox">
                      <InstagramIcon />
                      <Typography variant="h5">Instagram :</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={6} lg={8}>
                    <Box className="infoBox">
                      <Typography variant="h6">
                        instagram.com/anthony123
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5} sm={5} md={6} lg={4}>
                    <Box className="infoBox">
                      <FiTwitter />
                      <Typography variant="h5">Twitter URL :</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={6} lg={8}>
                    <Box className="infoBox">
                      <Typography variant="h6">
                        twitter.com/anthony123
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5} sm={5} md={6} lg={4}>
                    <Box className="infoBox">
                      <FaDiscord />
                      <Typography variant="h5">Discord :</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={6} lg={8}>
                    <Box className="infoBox">
                      <Typography variant="h6">
                        discord.com/anthony123
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};
export default TokenInfo;
