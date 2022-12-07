import React from "react";
import { Swap } from "@swing.xyz/ui";
import "@swing.xyz/ui/theme.css";
import { makeStyles, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .headingBox": {
      background: theme.palette.background.heading,
      display: " flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& .headingContent": {
        display: " flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px 0px",
        paddingLeft: "35px",
        "& figure": {
          margin: "5px",
        },
        "& div": {
          paddingLeft: "25px",
        },
      },
    },
    "& .mainBox": {
      padding: "30px",
    },
  },
}));
export default function BridgeAssets() {
  const classes = useStyles();
  return (
    <div className="swap-custom">
      {" "}
      <Swap />
    </div>
  );
}
