import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { BiCopy } from "react-icons/bi";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FiTwitter } from "react-icons/fi";
import ProfileCard from "src/component/ProfileCard";
const useStyles = makeStyles((theme) => ({
  centering: {
    borderRight: "1px solid #413F3F",
    marginTop: "30px",

    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },

  secondgrid: {
    paddingLeft: "30px !important",
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "10px !important",
    },
  },
  profileBox: {
    background: theme.palette.background.paper,
    boxShadow: " 0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "30px",
    position: "relative",
    padding: "40px 25px 75px 25px",
    "& .profileBoxImg": {
      "& img": {
        cursor: "pointer",
        position: "relative",
        maxWidth: "150px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "4px solid #515151",
      },
    },
  },

  accountText: {
    color: theme.palette.text.primary,
    fontSize: "19px !important",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#7784DA",
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
    },
  },
  infoBox: {
    alignItems: "center",
    padding: "6px 0px",
    display: "flex",
    [theme.breakpoints.only("xs")]: {
      padding: "10px 0px 0px",
    },

    "& input::placeholder": {
      fontSize: "13px",
    },
    "& svg": {
      color: "#787878 !important",
      marginRight: "15px",
      fontSize: "20px",
      [theme.breakpoints.down("md")]: {
        marginRight: "5px",
        fontSize: "17px",
      },
    },

    "& h5": {
      fontSize: "16px",
      color: theme.palette.text.primary,
      fontWeight: "600",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },
  updatabtn: {
    minWidth: "180px",
    padding: "10px 0px",

    background:
      "linear-gradient(100deg, rgba(100,55,192,1) 0%, rgba(100,55,192,1) 100%)",
    fontSize: "15px",
  },
}));

const EditProfileInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerBox}>
      <Box className="textField1">
        <Container>
          <ProfileCard />
          <Box className={classes.profileBox} mt={2}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                className={classes.centering}
              >
                <Box className="profileBoxImg" align="center">
                  <img
                    src="images/profile_img.png"
                    width="85%"
                    alt="Profile Pic "
                  />
                  <Box mt={2}>
                    <Typography variant="body2">
                      0xc51s5aa.....&nbsp;
                      <BiCopy style={{ color: "#FA9131", cursor: "pointer" }} />
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                className={classes.secondgrid}
              >
                <Typography className={classes.accountText} variant="h6">
                  My Account
                </Typography>

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className={classes.infoBox}>
                      <PersonIcon />
                      <Typography variant="h5">User Name &nbsp;:</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      variant="outlined"
                      color="primary"
                      placeholder="Enter name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className={classes.infoBox}>
                      <EmailIcon />
                      <Typography variant="h5">
                        Email Address &nbsp;:
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Enter email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className={classes.infoBox}>
                      <PhoneIphoneIcon />
                      <Typography variant="h5">Phone Number &nbsp;:</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter phone number "
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className={classes.infoBox}>
                      <FaFacebook />
                      <Typography variant="h5">Facebook URL &nbsp;:</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Enter facebook url"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className={classes.infoBox}>
                      <InstagramIcon />
                      <Typography variant="h5">Instagram &nbsp;:</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Enter instagram url"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className={classes.infoBox}>
                      <FiTwitter />
                      <Typography variant="h5">Twitter URL &nbsp;:</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Enter twitter url"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className={classes.infoBox}>
                      <FaDiscord />
                      <Typography variant="h5">Discord &nbsp;:</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Enter discord url"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box align="center" mt={3}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.updatabtn}
                      >
                        Update
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default EditProfileInfo;
