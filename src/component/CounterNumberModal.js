import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  PostBox: {
    "& .flex": {
      display: "flex",
      justifyContent: "center",
      "& h6": {
        color: "rgb(119, 132, 218)",
      },
    },
    "& .btnsec": {
      minWidth: "45px",
      height: "32px",
      background: theme.palette.background.header,
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
      borderRadius: "5px",
      color: "#FA9131",
      fontSize: "16px",
      border: "0.2px solid #383838",
      fontWeight: "600",
    },
  },
}));
export default function (props) {
  const classes = useStyles();
  return (
    <Box className={classes.PostBox} align="right">
      <Box
        className="flex"
        justifyContent="end"
        style={{ marginLeft: "-76px" }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Typography variant="body1" style={{ color: "#7784DA" }}>
          Q1
        </Typography>
        &nbsp;&nbsp;&nbsp;
        <Typography variant="body1" style={{ color: "#7784DA" }}>
          Q2
        </Typography>
        &nbsp;&nbsp;&nbsp;
        <Typography variant="body1" style={{ color: "#7784DA" }}>
          Q3
        </Typography>
        &nbsp;&nbsp;&nbsp;
        <Typography variant="body1" style={{ color: "#7784DA" }}>
          Q4
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Button className="btnsec">70</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">08</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">12</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">21</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">06</Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={2}>
        <Button className="btnsec">64</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">22</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">14</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">16</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant="body1">16</Typography>
      </Box>
    </Box>
  );
}
