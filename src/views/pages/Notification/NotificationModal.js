import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Paper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "#1A1A1A",
    padding: "18px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  para: {
    padding: "5px 7px 8px 31px",
    font: "normal 700 14px/18px K2D",
    color: "#FFFFFF",
  },
  PostBox: {
    paddingBottom: "50px",

    "& h3": {
      color: "#FFFFFF",
      font: "normal 700 24px/31px K2D",
    },
    "& h2": {
      color: "#FFFFFF",
      font: "normal 700 14px/18px K2D",
    },
    "& p": {
      lineHeight: "27px",
      [theme.breakpoints.down("md")]: {
        lineHeight: "20px",
        fontSize: "12px !important",
      },
    },
    "& .subbox": {
      marginTop: "10px",
      background: theme.palette.background.heading,

      borderRadius: "30px",
    },
    "& .subchild": {
      "& .paddingsec": {
        padding: "17px 21px 20px",
        display: "flex",
        alignItems: "center",
        "& h3": {
          fontSize: "18px",
        },
      },

      "& .baby": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
  },
  noti:{
    display: "flex",
    gap: "1rem"
  }
}));
const notificationData = [
  {
    id: 1,
    title:
      "You may receive information about your placed bet via 3 different notifications methods.",
  },
  {
    id: 2,
    title:
      "You may receive information about your placed bet via 3 different notifications methods.",
  },
  {
    id: 3,
    title:
      "You may receive information about your placed bet via 3 different notifications methods.",
  },
  {
    id: 4,
    title:
      "You may receive information about your placed bet via 3 different notifications methods.",
  },
];

const Notification = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Paper className={classes.PostBox} elevation={2}>
      <div className={classes.background}>
        <Typography variant="h3">NOTIFICATIONS</Typography>
        <Typography variant="h2">Close</Typography>
      </div>
      <Box style={{ marginTop: "20px" }}>
        {notificationData.map((noti) => {
          return (
            <>
            <div className={classes.noti}>
              <Typography variant="body1" className={classes.para}>{noti.title}</Typography>
              <img src="images/closeIcon.svg" alt="close" />
              </div>
            </>
          );
        })}
      </Box>
    </Paper>
  );
};

export default Notification;
