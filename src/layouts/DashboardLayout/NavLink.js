import { Link, NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  MenuItem,
  Avatar,
  Grid,
  Tooltip,
  Dialog,
  Typography
} from "@material-ui/core";
import { AuthContext } from "src/context/Auth";
import { useLocation } from "react-router-dom";
import SwapModal from "src/component/SwapModal";

const useStyles = makeStyles((theme) => ({
  MenuItem: {
    color: "#787878",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
    "&.active": {
      background:
        "radial-gradient(98.18% 613.64% at 78.18% 50%, rgba(51, 153, 170, 0.81) 0%, rgba(51, 153, 170, 0) 100%) , radial-gradient(60% 120.26% at 40% 60%, #6437C0 0%, #6437C0 100%) , linear-gradient(159.8deg, #7784DA 24.32%, #7784DA 53.17%)",
    },
    "& svg": {
      fontSize: "15px",
      color: "#787878",
    },
    "& .menuText": {
      paddingLeft: "14px",
    },

    "& .MuiAvatar-root": {
      width: "30px",
      height: "30px",
    },
  },
  tooltip: {
    fontSize: "15px"
  }
}));

const headersData = [
  {
    label: "Home",
    href: "/",
    icon: "images/homeblue.svg",
    active: "images/homeactive.svg",
    tooltipName: "Home"
  },

  {
    label: "My Bets",
    href: "/my-bets",
    icon: "images/mybets.svg",
    active: "images/mybetsblue.svg",
    tooltipName: "My Bets"
  },
  {
    label: "Referral",
    href: "/referrals",
    icon: "images/group.svg",
    active: "images/refblue.svg",
    tooltipName: "Coming Soon"
  },
  {
    label: "Leaderboard",
    href: "",
    icon: "images/leader.svg",
    active: "images/leadblue.svg",
    tooltipName: "Coming Soon"
  },
  {
    label: "Favourite Bets",
    href: "",
    icon: "images/favs.svg",
    active: "images/favsblue.svg",
    tooltipName: "Coming Soon"

  },
  {
    label: "My Account",
    href: "",
    icon: "images/myaccount.svg",
    active: "images/accountblue.svg",
    tooltipName: "Coming Soon"
  },
  {
    label: "Wallet",
    href: "/wallet",
    icon: "images/wallet.svg",
    active: "images/walletblue.svg",
    tooltipName: "Wallet"
  },
  {
    label: "Transactions",
    href: "",
    icon: "images/transaction.svg",
    active: "images/transactionblue.svg",
    tooltipName: "Coming Soon"
  },

  {
    label: "Preferences",
    href: "",
    icon: "images/prefernces.svg",
    active: "images/preferncesblue.svg",
    tooltipName: "Coming Soon"
  },
  {
    label: "Learn To Bet",
    href: "",
    icon: "images/book.svg",
    active: "images/bookblue.svg",
    tooltipName: "Coming Soon"
  },

  {
    label: "Rules",
    href: "",
    icon: "images/rule.svg",
    active: "images/ballblue.svg",
    tooltipName: "Coming Soon"
  },


  {
    label: "FAQ",
    href: "",
    icon: "images/ball.svg",
    active: "images/fablue.svg",
    tooltipName: "Coming Soon"
  },

  // {
  //   label: "Bridge Assets",
  //   href: "/bridge-assets",
  //   icon: "images/inter.svg",
  //   active: "images/interblue.svg",
  // },
 
  // {
  //   label: "Notifications",
  //   href: "/notifications",
  //   icon: "images/noti.svg",
  //   active: "images/notiblue.svg",
  // },
  
  {
    label: "Support",
    href: "",
    icon: "images/support.svg",
    active: "images/supblue.svg",
    tooltipName: "Coming Soon"
  },
];

export default function (props) {
  const classes = useStyles();
  const location = useLocation();

  const auth = useContext(AuthContext);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [openSwap, setOpenSwap] = useState(false);

  const handleCloseSwap = () => {
    setOpenSwap(false);
  };

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };

  useEffect(() => {
    if (auth.isLogin()) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  });

  return (
    <>
      {isConnected &&
        headersData.map(({ label, href, icon, active, tooltipName}) => {
          return (
            <>
              <NavLink
                activeClassName="active"
                exact
                {...{
                  key: label,
                  color: "inherit",
                  to: href ? href : "",
                }}
              >
                <Tooltip title={<Typography className={classes.tooltip}>{tooltipName}</Typography>}  arrow>
                <MenuItem className={`${classes.MenuItem} menuitem`}>
                  <div className="navlinkIcon">
                    {location.pathname == href ? (
                      <img style={{ marginTop: "10px" }} src={active}></img>
                    ) : (
                      <img style={{ marginTop: "10px" }} src={icon}></img>
                    )}
                  </div>
                  {location.pathname == href ? (
                    <span className="menuText activeLink">{label}</span>
                  ) : (
                    <span className="nonActive">{label}</span>
                  )}
                </MenuItem>
                </Tooltip>
              </NavLink>
            </>
          );
        })}

      {!isConnected &&
        headersData.map(({ label, href, icon }) => {
          return (
            <>
              <NavLink
                activeClassName="active"
                exact
                {...{
                  key: label,
                  color: "inherit",
                  to: "",
                }}
              >
                <MenuItem className={`${classes.MenuItem} menuitem`}>
                  <div className="navlinkIcon">
                    <img style={{ marginTop: "8px" }} src={icon}></img>{" "}
                  </div>
                  {(location.pathname == href || href === '/referrals') ? (
                    <span className="menuText activeLink">{label}</span>
                  ) : (
                    <span className="nonActive" >
                      {label}
                    </span>
                  )}
                </MenuItem>
              </NavLink>
            </>
          );
        })}
      <Dialog
        open={openSwap}
        onClose={() => setOpenSwap(false)}
        fullWidth
        width="sm"
        style={{ borderRadius: "10px !important" }}
      >
        <SwapModal handleCloseSwap={handleCloseSwap} />
      </Dialog>
    </>
  );
}
