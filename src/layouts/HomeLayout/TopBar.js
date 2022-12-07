import React, { useState, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  IconButton,
  Hidden,
  Dialog,
  Grid,
  TextField,
  Button,
  Tooltip
} from "@material-ui/core";
import SwipeableTemporaryDrawer from "./RightDrawer";
import { GiWallet } from "react-icons/gi";
import Logo from "src/component/Logo";
import DialogContent from "@material-ui/core/DialogContent";
import { BsChatLeftDots } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { useHistory } from "react-router-dom";
import SettingsContext from "src/context/SettingsContext";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },

  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  desktopDrawer: {
    position: "absolute",
    right: 80,
    top: 30,
    width: 450,

    height: 450,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      right: 0,
    },
  },
  iconbutton: {
    // color: theme.palette.secondary.main,
    color: "#9F9F9F",
    position: "relative",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0px",
    },
    "& div": {
      height: "5px",
      width: "5px",
      borderRadius: "50%",
      backgroundColor: "#e31a89",
      position: "absolute",
      top: "7px",
      right: "8px",
    },
  },
  mainheader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "& .leftBox": {
      width: "306px",
      [theme.breakpoints.down("md")]: {
        width: "200px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "150px",
      },
      "& img": {
        [theme.breakpoints.down("xs")]: {
          paddingLeft: "0 !important",
        },
      },
    },
    "& .rightBox": {
      width: "calc(100% - 306px)",
      [theme.breakpoints.down("md")]: {
        width: "calc(100% - 200px)",
      },
      [theme.breakpoints.down("xs")]: {
        width: "calc(100% - 150px)",
      },
      "& .menubox": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
  },
  searchBox: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  tooltip: {
    fontSize: "15px"
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <TopBarData />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default TopBar;

export function TopBarData() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const themeSeeting = useContext(SettingsContext);

  const changeTheme = (type) => {
    themeSeeting.saveSettings({
      theme: type,
    });
  };
  const searchBox = (
    <Tooltip title="Coming Soon" className={classes.tooltip}> 
    <Box className={classes.searchBox}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="Text Field"
        placeholder="Search"
        type="search"
        fullWidth
      />
    </Box>
    </Tooltip>
  );
  return (
    <>
      <Box style={{ width: "100%" }}>
        <Grid container>
          <Grid item xs={12}>
            <Box className={classes.mainheader}>
              <Box className="leftBox">
                <Logo
                  width="125"
                  style={{
                    paddingTop: "0px",
                    paddingLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Box className="rightBox">
                <Grid container alignItems="center">
                  <Hidden xsDown>
                    <Grid item sm={5} md={4}>
                      {searchBox}
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} sm={7} md={8}>
                    <Box className="menubox">
                      <IconButton
                        className={classes.iconbutton}
                        onClick={() => history.push("/chat-history")}
                      >
                        <BsChatLeftDots size={18} />
                      </IconButton>
                      <IconButton
                        className={classes.iconbutton}
                        onClick={() => history.push("/wallet")}
                      >
                        <GiWallet size={18} />
                      </IconButton>
                      <IconButton
                        className={classes.iconbutton}
                        onClick={() => history.push("/notifications")}
                      >
                        <MdNotifications size={18} />
                        <Box></Box>
                      </IconButton>
                      <SwipeableTemporaryDrawer />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Hidden smUp>
            <Grid item xs={12}>
              <Box>{searchBox}</Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </>
  );
}
