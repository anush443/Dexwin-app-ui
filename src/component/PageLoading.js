import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    padding: theme.spacing(3),
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2000,
  },
}));

export default function PageLoading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Box textAlign="center">
        <img src="/images/logo.png" alt="Loading Page" width="100" />
      </Box> */}
    </div>  
  );
}
