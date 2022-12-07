import React from "react";
import {
  Paper,
  Box,
  Typography,
  IconButton,
  Container,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IoCloseOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

import AccordianAllBitsSection from "src/component/AccordianAllbitsSection";
const useStyles = makeStyles((theme) => ({
  PostBox: {
    background: theme.palette.background.paper,
    height: "auto",
    marginBottom: "15px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "30px",
    "& h6": {
      color: theme.palette.text.primary,
    },
    "& h5": {
      margin: "12px 1px 12px 0px !important",
    },
    "& .titlesec": {
      height: "56px",
      background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
      borderRadius: "30px 30px 0px 0px",
      paddingRight: "18px",
      "& .child": {
        padding: "12px 24px",
      },
      "& .subbaby": {
        display: "flex",
        alignItems: "center",
      },
    },
    "& svg": { color: "white", fontSize: "20px" },
    "& .imgsec": {
      background:
        "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(/images/bansketballbanner.png)",
      height: "251px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "0px",
      "& button": {
        background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        border: "0.2px solid #383838",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
        borderRadius: "5px",
        color: "#FA9131",
        fontSize: "20px",
        height: "28px",
        transform: "scale(0.7, 1)",
      },
      "& .scorecew": {
        width: "71px",
        height: "60px",
        background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        borderRadius: "10px",
        "& body2": {
          textAlign: "center",
        },
      },
    },
  },
  paddingsectionx: {
    padding: "10px 15px 25px 0px",
  },
}));
export default function (props) {
  const { setpopup } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.PostBox}>
      <Box className="titlesec baby">
        <Box className="child">
          <Box className="baby">
            <Box className="subbaby">
              <img src="images/vectorsec.png" alt="Hello" />
              &nbsp;&nbsp;&nbsp;
              <Typography variant="h6">COSAFA Cup</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="baby">
          <IconButton>
            <IoCloseOutline onClick={() => setpopup(false)} />
          </IconButton>
        </Box>
      </Box>

      <Box className={classes.paddingsectionx}>
        <AccordianAllBitsSection />
      </Box>
    </Paper>
  );
}
