import React from "react";
import {
  makeStyles,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Box,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: theme.palette.background.tablehead,
    borderRadius: "43px",
    "& h5": {
      fontSize: "13px",
    },
  },
  bin :{

    border:"1px solid #e5e5e5"
  },
}));

const LeaderBoard = () => {
  const classes = useStyles();

  return (
    <Box mt={4}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            //   onClick={}
            aria-label="close"
          >
            <BsArrowLeft />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box mt={4}>
        <Box>
          <Typography variant="h5" color="primary">
            Top-300 leaders
          </Typography>
          <Typography variant="h6" color="primary">
            Here you can find the information about our best players! They are
            already playing, earning and enjoying! Feel free to join them!
          </Typography>
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            type="search"
            variant="outlined"
            placeholder="Search Here"
           
           
            InputProps={{
                className:classes.bin,
              endAdornment: (
                <InputAdornment position="end">
                  {" "}
                  <IconButton
                    style={{ fontSize: "20px", padding: "0px" }}
                    className="iconbtn"
                  >
                    <BsSearch style={{ color: "#1eb808", fontSize: "16px" }} />
                  </IconButton>{" "}
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderBoard;
