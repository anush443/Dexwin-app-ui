import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import CosafaFilterComponent from "src/component/CosafaFilterComponent";
import PlayersProps from "./PlayersProps";
import TeamProps from "./TeamProps";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  teamDropdown: {
    float: "left",
    background: "#191919",
    borderRadius: "30px !important",
  },
  root: {},
  buttonBox: {
    display: "flex",
    alignItems: "center",
    padding: "20px 0px",
    "& button": {
      padding: "8px 16px",
      minWidth: "114px",
      height: "42px",
      fontSize: "13px",
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
      },
      "&.active": {
        border: "1px solid #3399AA",
      },
    },
  },
}));

function PropsIndex() {
  const classes = useStyles();
  const [tabViews, setTabView] = useState("playersProps");

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center" justifyContent="left">
          <Grid item md={6}>
            <Button
              className={classes.teamDropdown}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              &nbsp;&nbsp;&nbsp;<span className="teamDropdown">Team</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <img src="/images/Vector (4).svg" />
              </span>
              &nbsp;&nbsp;&nbsp;
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{style: {width: '125px'}}}
            >
              <MenuItem onClick={handleClose} style={{justifyContent:"center"}}>Team</MenuItem>
              <MenuItem onClick={handleClose} style={{justifyContent:"center"}}>Team</MenuItem>
              <MenuItem onClick={handleClose} style={{justifyContent:"center"}}>Team</MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box className={classes.buttonBox}>
              <Button
                variant="contained"
                color="primary"
                className={tabViews === "playersProps" ? "active" : ""}
                onClick={() => setTabView("playersProps")}
              >
                PLAYERS PROPS
              </Button>

              <Box ml={4}>
                <Button
                  variant="contained"
                  color="primary"
                  className={tabViews === "teamProps" ? "active" : ""}
                  onClick={() => setTabView("teamProps")}
                >
                  TEAM PROPS
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CosafaFilterComponent />
          </Grid>
        </Grid>
        <Box>
          {tabViews === "playersProps" ? <PlayersProps /> : " "}
          {tabViews === "teamProps" ? <TeamProps /> : " "}
        </Box>
      </Box>
    </>
  );
}

export default PropsIndex;
