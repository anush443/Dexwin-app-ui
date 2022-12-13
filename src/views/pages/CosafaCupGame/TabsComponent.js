import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Tooltip,
  Typography,
  Button,
  //Coming soon
  // InputAdornment,
  // Paper,
  // Grid,
  // Avatar,
  // Dialog,
  // DialogContent,
  // DialogTitle,
  // TextField,
  // IconButton,
} from "@material-ui/core";
import Popular from "./Popular";
import "react-multi-carousel/lib/styles.css";
import Periodic from "./Periodic";
import ExoticComponent from "./Exotic";
import { ModalContext } from "src/component/context";
//Coming Soon
// import BetBuilder from "./BetBuilder";
// import { BsSearch } from "react-icons/bs";
// import PropsIndex from "./Props/PropsIndex";
// import AllBets from "./AllBets";
// import Spot from "./Spot";
// import Players from "./Players";
// import BetBuilderModal from "src/component/BetBuilderModal";
// import FuturesComponent from "src/views/pages/Dashboard/FuturesComponent";
// import Carousel from "react-multi-carousel";
// import Dropdown from "react-dropdown";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const useStyles = makeStyles((theme) => ({
  PostBox: {
    padding: "20px",
    paddingBottom: "0px",
    "& .butnsec": {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      flexWrap: "wrap",
    },
    "& button": {
      padding: "8px 8px",
      minWidth: "114px",
      height: "42px",
      borderRadius: "10px",
      fontSize: "13px",
      marginRight: "24px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
      },
      "&.active": {
        top: "0px !important",
        border: "1px solid #70D5FB",
      },
    },
  },
  maincontent: {
    padding: "0px 40px",
    height: "auto !important",
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
  },
  btn: {
    backgroundColor: "#2B2B2B !important",
    borderRadius: "30px !important",
  },
  btneuro: {
    backgroundColor: "#2B2B2B !important",
    borderRadius: "30px !important",
  },
  btn1: {
    backgroundColor: "#2B2B2B !important",
    padding: "0.5rem",
  },
  btnNBA: {
    backgroundColor: "#2B2B2B !important",
    borderRadius: "100px !important",
    width: "8rem !important",
    padding: "15px",
    border: "1px solid #70D5FB",
  },
  select: {
    width: "10%",
    left: "0",
    marginRight: "40%",
    marginTop: "5%",
    backgroundColor: "grey",
    padding: "2rem",
  },
  tooltip: {
    fontSize: "15px",
  },
}));

export default function (props) {
  const {
    liveLeaguesdata,
    upcommingleaguesData,
    matchId,
    teams,
    scores,
    league,
    type,
    details,
  } = props;
  const classes = useStyles();
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);
  const options = ["NBA", "CBA", "FBA"];
  const defaultOption = options[0];
  const [tabview, setTabView] = useState("POPULAR");
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [open, setOpen] = React.useState(false);              // Coming Soon

  // const handleClickOpen = () => {
  //   setDialogOpen(true);
  // };                                 // Coming Soon
  // const handleClose = () => {
  //   setDialogOpen(false);
  // };

  return (
    <>
      <Box className={classes.PostBox}>
        {/* <Grid
          xs={12}
          spacing={2}
          style={{
            backgroundColor: "#191919",
            boxShadow: "rgb(87 82 82 / 50%) -6px -8px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
            display: "flex",
            borderRadius: "20px",
          }}
        >
          <Grid
            item
            xs={2}
            style={{
              padding: "2rem",
              backgroundColor: "#222222",
              display: "flex",
              borderRadius: "14px 0px 10px 16px",
            }}
          >
            <Dropdown
              options={options}
              placeholder="BASKETBALL"
              style={{ color: "#787878" }}
            />{" "}
            <KeyboardArrowDownIcon style={{ color: "#fff" }} />
          </Grid>
          <Grid
            item
            xs={10}
   
            className="teamCarousel"
          >
            <Carousel responsive={responsive} style={{ display: "flex" }} infinite={true} centerMode={true}>
              <Button
                className={classes.btn}
                style={{ border: "2px solid #70D5FB" }}
              >
                <img
                  src="images/NBA.png"
                  style={{ width: "1rem", height: "1rem" }}
                ></img>
                &nbsp;NBA
              </Button>
              <Button className={classes.btn}>
                <img
                  src="images/EURO.png"
                  style={{ width: "1rem", height: "1rem" }}
                ></img>
                EURO LEAGUE
              </Button>
              <Button className={classes.btn}>
                <img
                  src="images/CBA.png"
                  style={{ width: "1rem", height: "1rem" }}
                ></img>
                &nbsp;CBA
              </Button>
              <Button className={classes.btn}>
                <img
                  src="images/NBA.png"
                  style={{ width: "1rem", height: "1rem" }}
                ></img>
                &nbsp;FIBA
              </Button>
   
      
      
            </Carousel>
          </Grid>
        </Grid> */}
        <Box className="butnsec">
          <Tooltip
            title={<Typography className={classes.tooltip}>Popular</Typography>}
            arrow
          >
            <Button
              className={tabview === "POPULAR" ? "active" : ""}
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setTabView("POPULAR")}
            >
              POPULAR
            </Button>
          </Tooltip>
          <Tooltip
            title={<Typography className={classes.tooltip}>Exotic</Typography>}
            arrow
          >
            <Button
              className={tabview === "exotic" ? "active" : ""}
              onClick={() => setTabView("exotic")}
              variant="contained"
              color="primary"
              size="large"
            >
              EXOTIC
            </Button>
          </Tooltip>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>Periodic</Typography>
            }
            arrow
          >
            <Button
              className={tabview === "periodic" ? "active" : ""}
              onClick={() => setTabView("periodic")}
              variant="contained"
              color="primary"
              size="large"
            >
              PERIODIC
            </Button>
          </Tooltip>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>Coming Soon</Typography>
            }
            arrow
          >
            <Button
              className={tabview === "PROPS" ? "active" : ""}
              onClick={() => setTabView("PROPS")}
              variant="contained"
              color="primary"
              size="large"
            >
              PROPS
            </Button>
          </Tooltip>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>Coming Soon</Typography>
            }
            arrow
          >
            <Button
              className={tabview === "SPOT" ? "active" : ""}
              onClick={() => setTabView("SPOT")}
              variant="contained"
              color="primary"
              size="large"
            >
              SPOT
            </Button>
          </Tooltip>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>Coming Soon</Typography>
            }
            arrow
          >
            <Button
              className={tabview === "players" ? "active" : ""}
              onClick={() => setTabView("players")}
              variant="contained"
              color="primary"
              size="large"
            >
              PARLAYS
            </Button>
          </Tooltip>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>Coming Soon</Typography>
            }
            arrow
          >
            <Button
              className={tabview === "BUILDER" ? "active" : ""}
              onClick={toggleModal}
              variant="contained"
              color="primary"
              size="large"
            >
              BET BUILDER
            </Button>
          </Tooltip>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>Coming Soon</Typography>
            }
            arrow
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={tabview === "allBets" ? "active" : ""}
              onClick={() => setTabView("allBets")}
            >
              ALL BETS
            </Button>
          </Tooltip>
          {/* <Avatar className={classes.SearchIcon}>
            <BsSearch
              style={{ cursor: "pointer" }}              // Coming Soon
              onClick={() => setDialogOpen(true)}
            />
          </Avatar> */}
        </Box>
      </Box>

      {/*------------------------------------- Coming Soon --------------------------------------- */}
      {/* <Dialog
        maxWidth="lg"
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>Search...</DialogTitle>
        <IconButton
          className={classes.icons}
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "5px",
            right: "0",
            zIndex: "999",
          }}
        >
          <img src="images/close.png" alt="image" onClick={handleClose} />
        </IconButton>
        <DialogContent dividers>
          <Box className={classes.root} mb={3}>
            <TextField
              id="outlined-basic"
              type="search"
              // value="Search"
              variant="outlined"
              fullWidth
              placeholder="Search"
              className="searchBox"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <IconButton
                      style={{ fontSize: "20px", padding: "0px" }}
                      className="iconbtn"
                    >
                      <BsSearch
                        style={{ color: "#8d8d8f", fontSize: "16px" }}
                      />
                    </IconButton>{" "}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <FuturesComponent />
        </DialogContent>
      </Dialog> */}
      <Box className="tabContainer">
        <Box className={classes.maincontent}>
          {tabview === "POPULAR" ? (
            <Popular
              details={details}
              type={type}
              liveLeaguesdata={liveLeaguesdata}
              upcommingleaguesData={upcommingleaguesData}
              matchId={matchId}
              teams={teams}
              scores={scores}
              league={league}
            />
          ) : (
            <Popular />
          )}
          {tabview === "exotic" ? (
            <ExoticComponent details={details} type={type} matchId={matchId} />
          ) : (
            ""
          )}
          {tabview === "periodic" ? (
            <Periodic details={details} type={type} matchId={matchId} />
          ) : (
            ""
          )}
          {/* {tabview === "PROPS" ? (
            <PropsIndex type={type} matchId={matchId} />
          ) : (
            ""
          )}
          {tabview === "SPOT" ? <Spot type={type} matchId={matchId} /> : ""}
          {tabview === "players" ? (                                               // Coming Soon
            <Players type={type} matchId={matchId} />
          ) : (
            ""
          )}
          {tabview === "allBets" ? (
            <AllBets type={type} matchId={matchId} />
          ) : (
            ""
          )} */}
        </Box>
      </Box>
      <ModalContext.Provider value={{ showModal, toggleModal }}>
        <div>
          {/* <BetBuilderModal canShow={showModal} updateModalState={toggleModal}>  // Coming Soon
            <BetBuilder type="betBuilderModal" />
          </BetBuilderModal> */}
        </div>
      </ModalContext.Provider>
    </>
  );
}
