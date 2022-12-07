import React from "react";
import { Box, Typography, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dividerColor: {
    backgroundColor: "#363636",
    height: "172px",
  },
  profileCardBox: {
    position: "relative",
    "& .accountBox": {
      "& .headingBox": {
        background: theme.palette.background.heading,

        "& p": {
          color: "#39AED0",
          lineHeight: "26px",
        },
        "& h5": {
          fontSize: "20px",
          fontWeight: "600",
        },
      },
      "& .flexjustifycenter": {
        "& h5": {
          fontSize: "15px",
          lineHeight: "27px",
          marginLeft: "15px",
          fontWeight: "600",
        },
      },
      "& img": {
        width: "20px",
      },
      "& sub": {
        fontSize: "12px",
        color: "#787878",
      },
    },
    "& .priceText": {
      color: theme.palette.text.noticetext,
      fontSize: "13px",
    },
  },
}));
function LearnToBet() {
  const classes = useStyles();
  return (
    <Box className={classes.profileCardBox}>
      <Paper className="accountBox" elevation={2}>
        <Box className="headingBox" align="center">
          <Box style={{ padding: "10px" }}>
            <Typography variant="h5">Learn To Bet</Typography>
          </Box>
        </Box>

        <Box pt={2} pb={2}></Box>
      </Paper>
    </Box>
  );
}

export default LearnToBet;
