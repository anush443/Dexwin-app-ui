import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Grid, Avatar, Hidden, Button, Dialog } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavLink from "./NavLink";
import TopBar from "./TopBar";
import Sidebet from "src/component/Sidebet";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .flexjustify": {
      "& h6": {
        color: "#FA9131",
        fontSize: "12px",
        marginLeft: "9px",
      },
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    position: "absolute",
    zIndex: "999",
    top: "80px",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 340,
    flexShrink: 0,
    "@media (max-width: 1366px)": {
      width: `240px`,
    },
    "& p": {
      color: "#FA9131",
    },
    "& .star": {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    },
    "& h5": {
      fontSize: "11px",
      color: "#39AED0",
      marginLeft: "12px",
    },
    "& h6": {
      color: theme.palette.text.primary,
      marginLeft: "12px",
      fontSize: "13px",
    },
    "& .accordinBox": {
      display: "flex",
      alignItems: "center",
      "& .headingText": {
        color: "#FA9131",
        fontSize: "13px",
      },
    },
    "& .accordindetailBox": {
      display: "flex",
      alignItems: "center",
    },
  },

  content: {
    height: "calc(100vh - 80px)",
    marginTop: "80px",
    width: "100%",
    flexGrow: 1,
    padding: "0 10px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "5px",
    paddingLeft: "10px",
  },
  sidebarleft: {
    background: theme.palette.background.default,
    overflow: "auto",
    height: "calc(100% - 123px)",
    boxShadow:
      "-5px -5px 20px rgb(191 191 191 / 10%), 10px 10px 20px rgb(0 0 0 / 34%)",
    borderRadius: "10px",
    marginTop: "10px",
    marginLeft: "18px",
  },
  sideBetBox: {
    borderRadius: "30px",
    width: "325px",
    minWidth: "325px",
    overflow: "auto",
    height: "calc(100% - 10px)",
    background: theme.palette.background.heading,
    "@media (max-width: 1366px)": {
      width: "280px",
      minWidth: "280px",
    },
    "@media (max-width: 991px)": {
      position: "absolute",
    },
  },
  sideBetBoxInner: {
    padding: "15px",
  },
  childrenBox: {
    padding: "13px 26px 5px 16px",
    height: "100%",
    width: "100%",
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  contentBox: {
    height: "calc(100% - 10px)",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingRight: "15px",
    "@media (max-width: 767px)": {
      paddingRight: "0px",
    },
    "& .MuiDialog-paperFullWidth": {
      height: "calc(100% - 230px)",
    },
  },
  cut: {
    position: "absolute",
    top: "1.5rem",
    left: "3rem",
    font: "normal 400 14px/21px Poppins",
    color: "#7CDDDA",
    textShadow: "0px 0px 7px #7CDDDA"
  }
}));

const DashboardLayout = ({ children, onMobileClose, openMobile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [open, setOpen] = useState({
    open: false,
  });
  function sayHello() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").classList.remove("hidden");
    document.getElementById("main").style.marginLeft = "290px";
    document.getElementById("openbutton").classList.add("hide");
    document.getElementById("closebutton").classList.remove("hide");
  }
  function cloneNav() {
    document.getElementById("mySidenav").style.width = "53px";
    document.getElementById("main").style.marginLeft = "80px";
    document.getElementById("openbutton").classList.remove("hide");
    document.getElementById("mySidenav").classList.add("hidden");
    document.getElementById("closebutton").classList.add("hide");
    document.getElementById("closecut").style.display = "none";
  }

  return (
    <div className={classes.root}>
      <TopBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        isMobileNavOpen={isMobileNavOpen}
      />
      <CssBaseline />
      <Box>
        <div id="mySidenav" className={`${classes.sidebarleft} sidenav`}>
          <Box>
              <div id="closecut" className={classes.cut} >HOUSE CUT: 3%</div>
            <Avatar id="closebutton" onClick={cloneNav} className="closebtn ">
              <ArrowBackIcon style={{ color: "#FFFFFF !important" }} />
            </Avatar>
          
          </Box>

          <Avatar
            id="openbutton"
            onClick={sayHello}
            className="closebtn hide rightarrow"
          >
            <ArrowForwardIcon />
          </Avatar>

          <NavLink />
        </div>
      </Box>
      <main id="main" style={{ paddingTop: "88px", marginLeft: "290px" }}>
        <div className={classes.contentBox} id="main-scroll">
          <div className={classes.childrenBox}>{children}</div>
          <Hidden mdDown>
            <Box className={classes.sideBetBox}>
              <Box className={classes.sideBetBoxInner}>
                <Sidebet />
              </Box>
            </Box>
          </Hidden>
          {sideBarOpen && (
            <Dialog
              open={sideBarOpen}
              onClose={() => setSideBarOpen(false)}
              fullWidth
              maxWidth="xs"
            >
              <Box p={2}>
                <Sidebet />
              </Box>
            </Dialog>
          )}
          {location.pathname !== "/my-bets" && (
            <Hidden lgUp>
              <Box className="rightSideBarButton">
                <Button onClick={() => setSideBarOpen(true)}>MY BETS</Button>
              </Box>
            </Hidden>
          )}
        </div>
      </main>
    </div>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.node,
  children2: PropTypes.node,
};

export default DashboardLayout;
