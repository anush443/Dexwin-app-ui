import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { IoBasketballSharp } from "react-icons/io5";
import { SiBinance } from "react-icons/si";
import { BsCheck2 } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  headerBetWin1: {
    background: "#6437C0",
    padding: "8px 12px",
    "& p.win": {
      color: "#E45A5A",
    },
  },

  headerBetWin: {
    background: theme.palette.background.cardhead,
    padding: "8px 12px",
    "& p.win": {
      color: "#E45A5A",
    },
  },
  secondMainBox: { padding: "0px 10px 5px 10px" },
  subtitle: {
    "& svg": {
      color: "#39AED0",
      fontSize: "16px",
      marginRight: "7px",
    },
    "& h6": {
      fontSize: "16px",
      lineHeight: "1.2",
      color: "#7784DA",
    },
  },
  mainBox: {
    background: theme.palette.background.cardbacground,
    borderRadius: "25px",
    overflow: "hidden",
  },
  lowerbetbox: {
    background: theme.palette.background.cardbacground,
    "& p": {
      fontSize: "12px",
      marginBottom: "4px",
      "&.green": { color: "#3BBD2A" },
      "&.blue": { color: "#7784DA" },
    },
    "& h6": {
      fontSize: "14px",
    },
    "& svg": {
      color: "yellow",
      fontSize: "14px",
      marginLeft: "10px",
    },
  },
  loweroponent: {
    borderTop: "1px dashed rgba(102, 162, 211, 0.3);",
    paddingTop: "7px",
  },
}));

export default function ActiveBetCard() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainBox}>
        <Box className={`${classes.headerBetWin} flexjustifycenter`}>
          <Typography variant="body2">10:22 PM 7/6/2022</Typography>
        </Box>
        <Box className={classes.secondMainBox}>
          <Box pb={1}>
            <Box my={1} className={`${classes.subtitle} flexjustify`}>
              <IoBasketballSharp />
              <Typography variant="body2">
                Fritz, Taylor - Nadal, Rafael
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{ color: "#7784DA" }}>
                Correct Score
              </Typography>
            </Box>
            <Box className={`${classes.subtitle} justifyBetween`}>
              <Typography variant="body2" color="primary">
                <BsCheck2 />
                2:3
              </Typography>
              <Typography variant="h6" color="primary">
                {" "}
                2.05{" "}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" style={{ color: "#FA9131" }}>
                2-3
              </Typography>
            </Box>
          </Box>
          <Box className={classes.loweroponent}>
            <Box my={1} className={`${classes.subtitle} flexjustify`}>
              <IoBasketballSharp />
              <Typography variant="body2">
                Fritz, Taylor - Nadal, Rafael
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{ color: "#7784DA" }}>
                Correct Score
              </Typography>
            </Box>
            <Box className={`${classes.subtitle} justifyBetween`}>
              <Typography variant="body2" color="primary">
                <BsCheck2 />
                2:3
              </Typography>
              <Typography variant="h6" color="primary">
                {" "}
                2.05{" "}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" style={{ color: "#FA9131" }}>
                2-3
              </Typography>
            </Box>
          </Box>
          <hr style={{ border: "1px solid rgba(71, 71, 71, 0.3)" }} />
          <Box mt={1}>
            <Box className={classes.lowerbetbox}>
              <Box className="justifyBetween">
                <Typography variant="body1" className="blue">
                  Total Odds
                </Typography>
                <Typography variant="h6" color="primary">
                  2.00{" "}
                </Typography>
              </Box>
              <Box className="justifyBetween">
                <Typography variant="body1" className="blue">
                  Total Stake
                </Typography>
                <Typography variant="body1" className="icontext">
                  {" "}
                  0.0121255 <SiBinance />{" "}
                </Typography>
              </Box>
              <Box className="justifyBetween">
                <Typography variant="body1" className="blue">
                  Payout
                </Typography>
                <Typography variant="body1" className="icontext green">
                  {" "}
                  0.0121255 <SiBinance />{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={`${classes.headerBetWin1} flexjustifycenter`}>
          <Typography variant="body2">10:22 PM 7/6/2022</Typography>
        </Box>
      </Box>
    </>
  );
}
