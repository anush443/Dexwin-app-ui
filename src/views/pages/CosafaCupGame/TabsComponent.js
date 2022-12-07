import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Paper,
  Button,
  Grid,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import Popular from "./Popular";
import BetBuilder from "./BetBuilder";
import Periodic from "./Periodic";
import ExoticComponent from "./Exotic";
import PropsIndex from "./Props/PropsIndex";
import AllBets from "./AllBets";
import Spot from "./Spot";
import Players from "./Players";
import { ModalContext } from "src/component/context";
import BetBuilderModal from "src/component/BetBuilderModal";
import FuturesComponent from "src/views/pages/Dashboard/FuturesComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dropdown from "react-dropdown";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    height: "450px !important",
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
  },
  btn: {
    backgroundColor: "#2B2B2B !important",
    borderRadius: "30px !important",
    // borderRadius: '100px !important', width: '8rem !important', padding: '15px'
  },
  btneuro: {
    backgroundColor: "#2B2B2B !important",
    borderRadius: "30px !important",
    // borderRadius: '100px !important', width: '9rem !important', padding: '14px'
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
}));

export default function (props) {
  const { liveLeaguesdata, upcommingleaguesData, matchId, teams, scores, league, type, details } = props;
  const classes = useStyles();
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const options = ["NBA", "CBA", "FBA"];
  const defaultOption = options[0];
  const [tabview, setTabView] = useState("POPULAR");
  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  console.log(props.Data, "data");

  console.log(details, "detailstabs");
  return (
    <>
      <Box className={classes.PostBox}>
        <Grid
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
        </Grid>
        <Box className="butnsec">
          <Button
            className={tabview === "POPULAR" ? "active" : ""}
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setTabView("POPULAR")}
          >
            POPULAR
          </Button>
          <Button
            className={tabview === "PROPS" ? "active" : ""}
            onClick={() => setTabView("PROPS")}
            variant="contained"
            color="primary"
            size="large"
          >
            PROPS
          </Button>
          <Button
            className={tabview === "SPOT" ? "active" : ""}
            onClick={() => setTabView("SPOT")}
            variant="contained"
            color="primary"
            size="large"
          >
            SPOT
          </Button>
          <Button
            className={tabview === "exotic" ? "active" : ""}
            onClick={() => setTabView("exotic")}
            variant="contained"
            color="primary"
            size="large"
          >
            EXOTIC
          </Button>
          <Button
            className={tabview === "periodic" ? "active" : ""}
            onClick={() => setTabView("periodic")}
            variant="contained"
            color="primary"
            size="large"
          >
            PERIODIC
          </Button>
          <Button
            className={tabview === "players" ? "active" : ""}
            onClick={() => setTabView("players")}
            variant="contained"
            color="primary"
            size="large"
          >
            PARLAYS
          </Button>
          {/* <Button
            className={tabview === "BUILDER" ? "active" : ""}
            onClick={toggleModal}
            variant="contained"
            color="primary"
            size="large"
          >
            BET BUILDER
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={tabview === "allBets" ? "active" : ""}
            onClick={() => setTabView("allBets")}
          >
            ALL BETS
          </Button>{" "}
          <Avatar className={classes.SearchIcon}>
            <BsSearch
              style={{ cursor: "pointer" }}
              onClick={() => setDialogOpen(true)}
            />
          </Avatar>
        </Box>
      </Box>

      <Dialog
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
      </Dialog>
      <Box className="tabContainer">
        <Box className={classes.maincontent}>
          {tabview === "POPULAR" ? (
            <Popular details={details} type={type} liveLeaguesdata={liveLeaguesdata} upcommingleaguesData={upcommingleaguesData} matchId={matchId} teams={teams} scores={scores} league={league} />
          ) : (
            <Popular />
          )}
          {tabview === "PROPS" ? (
            <PropsIndex type={type} matchId={matchId} />
          ) : (
            ""
          )}
          {tabview === "SPOT" ? <Spot type={type} matchId={matchId} /> : ""}
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
          {tabview === "players" ? (
            <Players type={type} matchId={matchId} />
          ) : (
            ""
          )}
          {tabview === "allBets" ? (
            <AllBets type={type} matchId={matchId} />
          ) : (
            ""
          )}
        </Box>
      </Box>
      <ModalContext.Provider value={{ showModal, toggleModal }}>
        <div>
          <BetBuilderModal canShow={showModal} updateModalState={toggleModal}>
            <BetBuilder type="betBuilderModal" />
          </BetBuilderModal>
        </div>
      </ModalContext.Provider>
    </>
  );
}
