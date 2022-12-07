import React, { useEffect, useState } from "react";
import { useLocation, matchPath, useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import PropTypes from "prop-types";
import {
  Box,
  Button,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import Logo from "src/component/Logo";
import { FaUserAlt } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { MdDashboard, MdSettings } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { RiAuctionFill } from "react-icons/ri";
import NavItem from "./NavItem";
const sections = [
  {
    items: [
      {
        title: "Explore",
        icon: MdDashboard,
        href: "/explore",
      },
      {
        title: "Profile",
        icon: FaUserAlt,
        href: "/profile",
      },
      {
        title: "Creators",
        icon: ImUsers,
        href: "/creators",
      },
      {
        title: "Auctions",
        icon: RiAuctionFill,
        href: "/auction",
      },
      {
        title: "Collections",
        icon: MdLocalOffer,
        href: "/collections",
      },
      {
        title: "Settings",
        icon: MdSettings,
        href: "/settings",
      },
    ],
  },
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }
  return acc;
}
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
    top: 72,
    background: theme.palette.background.default,
  },
  desktopDrawer: {
    width: 200,
    top: 72,
    left: "30px",
    height: "100%",
    background: theme.palette.background.default,
    borderRight: "0",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "45px",
    paddingLeft: "17px",
    borderRadius: "12px",
    marginTop: "-30px",
    "&:hover": {
      color: "#e31a89",
    },
    "& svg": {
      color: "#e31a89",
      fontSize: "20px",
    },
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box py={4}>
          {sections.map((section, i) => (
            <List
              key={`menu${i}`}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
        <Box>
          <List>
            <Button className={classes.button} onClick={() => setOpen(true)}>
              <RiLogoutCircleRFill />
              &nbsp;&nbsp;&nbsp; Logout
            </Button>
          </List>
        </Box>
      </PerfectScrollbar>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align="center">
          {"Logout"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions align="center">
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            variant="contained"
            size="large"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setOpen(false)}
            color="secondary"
            variant="contained"
            size="large"
            onClickCapture={() => {
              history.push("/");
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.mobileDrawer }}
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
      >
        {content}
      </Drawer>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
