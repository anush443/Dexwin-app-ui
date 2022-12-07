import React from "react";
import { makeStyles, Box, Grid, Button } from "@material-ui/core";
import CosafaAccordion from "src/component/CosafaAccordion";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CosafaFilterComponent from "src/component/CosafaFilterComponent";

const useStyles = makeStyles((theme) => ({
  teamDropdown: {
    float: "left",
    background: "#191919",
    borderRadius: "30px !important",
  },
}));
function Players() {
  const classes = useStyles();
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
  const playerData = [
    {
      text: "Bet 1",
      desription:
        "Will Drake attend the Raptors vs Warriors game on Sunday and will Curry score 20+ points",
      number: "+300",
    },
    {
      text: "Bet 2",
      desription:
        "Will Lebron James wear the Lebron 18 for Christmas Game and score 30+ points",
      number: "+300",
    },
  ];


  return (
    <>
      <Box>
        <Box my={2}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
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
              >
                <MenuItem onClick={handleClose}>Team</MenuItem>
                <MenuItem onClick={handleClose}>Team</MenuItem>
                <MenuItem onClick={handleClose}>Team</MenuItem>
              </Menu>
            </Grid>
            <Grid item md={8} xs={12}></Grid>
          </Grid>
        </Box>

        <Box mb={3}>
        <Grid item xs={12} alignItems="right" justifyContent="right">
          <CosafaFilterComponent
            type="players"
            // getCheckBox={getCheckBox}
            // setCheckBoxData={setCheckBoxData}
          />
        </Grid>
      </Box>

        <Box className="mainBox">
          <Grid container spacing={2}>
            {playerData &&
              playerData?.map((data, index) => {
                return (
                  <Grid item xs={12}>
                    <CosafaAccordion data={data} type="players" />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Players;
