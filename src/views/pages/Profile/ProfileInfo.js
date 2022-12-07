import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
} from "@material-ui/core";
import { BiCopy, BiPencil } from "react-icons/bi";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FiTwitter } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  centering: {
    borderRight: "1px solid #413F3F",
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  mainbox: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },

  profileBox: {
    background: theme.palette.background.paper,
    boxShadow: " 0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "30px",
    position: "relative",
    padding: "40px 50px 75px 25px",
  },
  editBox: {
    cursor: "pointer",
    position: "absolute",
    right: "40px",
    top: "30px",
    padding: "5px 10px",
    fontSize: "18px",
    background: theme.palette.background.paper,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: " 10px",
  },
  secondgrid: {
    paddingLeft: "30px !important",
  },
  accountText: {
    color: theme.palette.text.primary,
    fontSize: "19px",
    fontWeight: "700",
    marginBottom: "60px",
    color: "#7784DA",
  },
  infoBox: {
    padding: "6px 0px",
    display: "flex",
    alignItems: "center",
    "& h5": {
      fontSize: "16px",
      color: theme.palette.text.primary,
      fontWeight: "500",
    },
    "& h6": {
      color: theme.palette.text.primary,
      color: "#7784DA",
      fontSize: "16px",
      fontWeight: "400",
    },
    "& svg": {
      color: "#787878 !important",
      marginRight: "15px",
      fontSize: "20px",
    },
  },
}));

const TokenInfo = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container
        style={{
          marginTop: "25px",
        }}
      >
        <Box className={classes.profileBox}>
          <Box className={classes.editBox}>
            <BiPencil />
          </Box>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              className={classes.centering}
            >
              <Box className={classes.mainbox}>
                <Box style={{ maxWidth: "250px" }}>
                  <img
                    src="images/imgpsh_fullsize_anim (4).png"
                    width="85%"
                    alt="Profile Pic "
                  />
                  <Typography variant="body2">
                    0xc51s5aa1ed5wdsa.....&nbsp;
                    <BiCopy style={{ color: "#FA9131", cursor: "pointer" }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              lg={9}
              className={classes.secondgrid}
            >
              <Typography className={classes.accountText} variant="h6">
                My Account
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <Box className={classes.infoBox}>
                    <PersonIcon />
                    <Typography variant="h5">User Name :</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={8}>
                  <Box className={classes.infoBox}>
                    <Typography variant="h6">Anthany Stark</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <Box className={classes.infoBox}>
                    <EmailIcon />
                    <Typography variant="h5">Email Address :</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={8}>
                  <Box className={classes.infoBox}>
                    <Typography variant="h6">AnthanyStark@gmail.com</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <Box className={classes.infoBox}>
                    <PhoneIphoneIcon />
                    <Typography variant="h5">Phone Number :</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={8}>
                  <Box className={classes.infoBox}>
                    <Typography variant="h6">+91 98765433212</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <Box className={classes.infoBox}>
                    <FaFacebook />
                    <Typography variant="h5">Facebook URL :</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={8}>
                  <Box className={classes.infoBox}>
                    <Typography variant="h6">
                      facebook.com/anthony123
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <Box className={classes.infoBox}>
                    <InstagramIcon />
                    <Typography variant="h5">Instagram :</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={8}>
                  <Box className={classes.infoBox}>
                    <Typography variant="h6">
                      instagram.com/anthony123
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <Box className={classes.infoBox}>
                    <FiTwitter />
                    <Typography variant="h5">Twitter URL :</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={8}>
                  <Box className={classes.infoBox}>
                    <Typography variant="h6">twitter.com/anthony123</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <Box className={classes.infoBox}>
                    <FaDiscord />
                    <Typography variant="h5">Discord :</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={8}>
                  <Box className={classes.infoBox}>
                    <Typography variant="h6">discord.com/anthony123</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TokenInfo;
