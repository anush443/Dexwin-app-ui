import { Typography, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  UserBox: {
    display: "flex",
    alignItems: "center",
    "& figure": {
      margin: "0",
      marginLeft: "-10px",
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      overflow: "hidden",
      backgroundColor: "#101010",
      position: "relative",
      transition: "0.3s",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        height: "30px",
        width: "30px",
      },
      "&:first-child": {
        marginLeft: "0px",
      },
      "&:hover": {
        zIndex: "2",
        transform: "scale(1.2)",
      },
      "& img": {
        width: "auto",
        maxWidth: "100%",
        maxHeight: "40px",
      },
    },
    "& div": {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      overflow: "hidden",
      marginLeft: "-10px",
      fontWeight: 500,
      backgroundColor: "#676161",
      fontSize: "14px",
      zIndex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        height: "30px",
        width: "30px",
        fontSize: "12px",
      },
    },
  },
}));

export default function (props) {
  const classes = useStyles();
  return (
    <Box className={classes.UserBox}>
      <figure>
        <img src="images/user.png" />
      </figure>
      <figure>
        <img src="images/user.png" />
      </figure>
      <figure>
        <img src="images/user.png" />
      </figure>
      <Box>+5</Box>
    </Box>
  );
}
