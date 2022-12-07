import React, { useState } from "react";
import {
  makeStyles, Button, Box, Grid, Paper
} from "@material-ui/core";
import ActiveBetsCard from "src/component/ActiveBetsCard";
import SettleBetsCard from "src/component/SettleBetsCard";
import { DataList } from "src/Constant/Index";
import MyBets from "./MyBets";

const useStyles = makeStyles((theme) => ({
  betBox: {
    border: "0.5px solid #7784DA",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "15px",
  },
  dailogHeader: {
    padding:"15px",
    "& .mainContent": {
      "& button": {
        marginRight: "10px",
        "&.active": {
          color: "#FFF",
          border: "1px solid #70D5FB"
        },
      },
    }
  },
  sideDialogHeader: {
    padding:"20px 10px",
    "& .mainContent": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& button": {
        marginRight: "10px",
        minWidth: "55px",
        borderRadius: "10px",
        height: "30px",
        "&.active": {
          color: "#FFFFFF",
          border: "1px solid #70D5FB"
        },
      },
    }
  },
}));

export default function (props) {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={2} >
       <MyBets />
      </Paper>
    </>
  );
}
