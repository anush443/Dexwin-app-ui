import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  makeStyles,
  Select,
  MenuItem,
  Button,
  Divider,
  IconButton,
  Paper,
  Dialog,
  DialogContent,
  DialogContentText,
  Avatar,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useHistory } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { MdArrowDropDown } from "react-icons/md";
import FormControl from "@material-ui/core/FormControl";
import CosafaAccordion from "src/component/CosafaAccordion";
import GloballySearchArea from "src/component/GloballySearchArea";

const useStyles = makeStyles((theme) => ({
  arrowGrid: {
    padding: "8px 17px 8px 8px !important",
  },
  root: {
    position: "relative",
    "& datepickerBox": {
      position: "",
    },
    "& .headingBox": {
      width: "100%",
      background: theme.palette.background.heading,
      borderRadius: "30px 30px 0px 0px",
      padding: "15px",
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        padding: "10px 0px 10px 50px",
      },
      "& .logoBox": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& figure": {
          margin: "0px",
          width: "50px",
          height: "50px",
          position: "relative",
          boxShadow:
            "inset 0.2rem 0.2rem 0.5rem #050606, inset -0.2rem -0.2rem 0.5rem #4f4b4b",
          borderRadius: "50%",
          padding: "10px",
          // [theme.breakpoints.down("xs")]: {
          //   width: "30px",
          //   height: "30px",
          // },
          "& img": {
            maxWidth: "100%",
            minHeight: "100%",
          },
        },
      },
      "& h6": {
        marginLeft: "15px",
        marginLeft: "20px",
        "& span": {
          color: "#9B9B9B",
          fontSize: "18px",
          marginLeft: "15px",
        },
      },
    },
    "& .mainContent": {
      padding: "20px",
      "& .headingContent": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "& div": {
          marginLeft: "15px",
        },
      },
    },
  },
  dialogboxModal: {
    "& .borderBox": {
      background: theme.palette.background.heading,
      padding: "19px",
    },
  },
  dialogbox: {
    position: "relative",
    maxHeight: "95%",
    [theme.breakpoints.down("sm")]: {
      overflowY: "scroll",
    },
  },
  selectbox2: {
    borderRadius: "4px",
    background: theme.palette.background.walletselect1,
  },
  selectbox3: {
    borderRadius: "50px",
    // background: "#2B2C31",
    // boxShadow:
    //   "inset 0px -1px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.51)",
  },
  formControl2: {
    width: "100%",
    borderRadius: "100px !important",
    "& .selectmodalBox": {
      boxShadow:
        "0.3rem 0.3rem 0.6rem #0f1111, -0.22rem -0.12rem 0.5rem 2px #333131",
      borderRadius: "50px",
      padding: "10px",
      cursor: "pointer",
    },
  },
}));

const detailscard = [
  {
    image: "images/image 3.png",
    discription: "ETH",
  },
  {
    image: "images/image 3.png",
    discription: "ETH",
  },
  {
    image: "images/image 3.png",
    discription: "ETH",
  },
  {
    image: "images/image 3.png",
    discription: "ETH",
  },
  {
    image: "images/image 3.png",
    discription: "ETH",
  },
  {
    image: "images/image 3.png",
    discription: "ETH",
  },
  {
    image: "images/image 3.png",
    discription: "ETH",
  },
];

const cardData = [
  {
    heading: "ALL STATISTICS",
    description: [
      {
        text1: "Luka Doncic to have 7+ assists",
        num1: "+300",
        num2: "+150",
        text2: "Luka Doncic to have 7+ assists",
      },
    ],
  },
  {
    heading: "ASSISTS",
    description: [
      {
        text1: "Luka Doncic to have 7+ assists",
        num1: "+300",
        num2: "+150",
        text2: "Luka Doncic to have 7+ assists",
      },
    ],
  },
  {
    heading: "ASSISTS",
    description: [
      {
        text1: "Luka Doncic to have 7+ assists",
        num1: "+300",
        num2: "+150",
        text2: "Luka Doncic to have 7+ assists",
      },
    ],
  },
];

const BetBuilder = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { type } = props;
  const [language, setLanguage] = useState("Lakers");
  const [language2, setLanguage2] = useState("Phoenix Suns");
  const [bet, setBet] = useState("Team total");
  const [status, setStatus] = useState("Status");
  const [event, setEvent] = useState("Event");
  const [awards, setAwards] = useState("Awards");
  const [games, setGames] = useState("November 20th, 2022");
  const [player, setPlayer] = useState("Select Player 1");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper elevation={2} className={classes.root}>
      {type === "betBuilderModal" ? (
        <Box className="headingBox">
          <Box className="logoBox">
            <figure>
              <img src="images/fab.png" alt="image" />
            </figure>
            <Typography variant="h6">
              BET BUILDER <span>(Create a Bet)</span>
            </Typography>
          </Box>
        </Box>
      ) : (
        " "
      )}
      <Box className="mainContent">
        {type !== "betBuilderModal" ? (
          <Box className="headingContent">
            <Avatar
              id="closebutton"
              onClick={() => history.push("/")}
              className="closebtn"
              style={{ cursor: "pointer" }}
            >
              <ChevronLeftIcon />
            </Avatar>
            <Box>
              <Typography variant="h6">Create your own Bet</Typography>
            </Box>
          </Box>
        ) : (
          " "
        )}
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="body2">Select League :</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>
                <FormControl className={classes.formControl2}>
                  <Box className="selectmodalBox" onClick={handleClickOpen}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs="6">
                        <Box
                          className={classes.selectbox}
                          display="flex"
                          alignItems="center"
                        >
                          <img src="./images/image 3.png" alt="image" />
                          <Box ml={1}>
                            <Typography
                              variant="body1"
                              style={{ cursor: "pointer" }}
                            >
                              NBA
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs="6"
                        align="right"
                        className={classes.arrowGrid}
                      >
                        <MdArrowDropDown
                          style={{ fontSize: "20px", marginRight: "-7px" }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="body2">Select Team 1 :</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>
                <Select
                  fullWidth
                  className={classes.selectbox3}
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <MenuItem value="Lakers">
                    <Box display="flex" alignItems="center">
                      <img src="/images/lakers.png" alt="image" />
                      <Box ml={1}>La Lakers</Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="body2">Select Team 2 :</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>
                <Select
                  fullWidth
                  value={language2}
                  className={classes.selectbox3}
                  onChange={(e) => setLanguage2(e.target.value)}
                >
                  <MenuItem value="Phoenix Suns">
                    <Box display="flex" alignItems="center">
                      <img src="/images/suns.png" alt="image" />
                      <Box ml={1}>Phoenix Suns</Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="body2">See Available Games :</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>
                <Select
                  fullWidth
                  value={games}
                  className={classes.selectbox3}
                  onChange={(e) => setGames(e.target.value)}
                >
                  <MenuItem value="November 20th, 2022">
                    <Box display="flex" alignItems="center">
                      November 20th, 2022
                      <Box ml={2} display="flex" alignItems="center">
                        <img src="/images/suns.png" alt="image" />
                        <Box ml={1}>vs</Box>
                        <Box ml={1}>
                          <img src="/images/lakers.png" alt="image" />
                        </Box>
                      </Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="body2">Select Bet Type :</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>
                <Select
                  className={classes.selectbox3}
                  fullWidth
                  value={bet}
                  onChange={(e) => setBet(e.target.value)}
                >
                  <MenuItem value="Team total">Team total</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="body2">Select Category :</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box>
                <Select
                  fullWidth
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={classes.selectbox3}
                >
                  <MenuItem value="Status">Status</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box>
                <Select
                  fullWidth
                  value={event}
                  className={classes.selectbox3}
                  onChange={(e) => setEvent(e.target.value)}
                >
                  <MenuItem value="Event">Event</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box>
                <Select
                  fullWidth
                  value={awards}
                  className={classes.selectbox3}
                  onChange={(e) => setAwards(e.target.value)}
                >
                  <MenuItem value="Awards">Awards</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid
              item
              xs={6}
              md={2}
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Typography variant="body2">Select Player :</Typography>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <label style={{ color: "#787878" }}>Optional</label>
              <Box mt={1}>
                <Select
                  fullWidth
                  value={player}
                  className={classes.selectbox3}
                  onChange={(e) => setPlayer(e.target.value)}
                >
                  <MenuItem value="Select Player 1">Select Player 1</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={6} md={2} align="center">
              <Box className="flexjustify" mt={3}>
                <img
                  src="images/add_playerbutton.png"
                  alt="image"
                  style={{ cursor: "pointer" }}
                />
                <Typography variant="body2" style={{ marginLeft: "7px" }}>
                  Add Player
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6} md={2}></Grid>
            <Grid item xs={8} md={6} lg={3} sm={8}>
              <Box mt={2}>
                <button className="viewAllButton">
                  View All Available Bets
                </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box p={2}>
        <Grid container spacing={2} direction={"column"}>
          {cardData &&
            cardData?.map((playersPropsData, index) => {
              return (
                <Grid item xs={12}>
                  <CosafaAccordion
                    playersPropsData={playersPropsData}
                    type="playersProps"
                    key={index}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        className={classes.dialogboxModal}
      >
        <Box className="borderBox">
          <Typography variant="h6">League</Typography>
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
        </Box>
        <Box className={classes.dialogbox}>
          <DialogContent>
            <DialogContentText>
              <Box my={1}>
                <GloballySearchArea />
              </Box>
              <Box mt={2}>
                <Grid container spacing={1}>
                  {detailscard.map((data, i) => {
                    return (
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Grid container>
                          <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Box
                              display="flex"
                              alignItems="center"
                              style={{
                                borderBottom: "1px solid #424242",
                                padding: "10px 0",
                              }}
                            >
                              <img src={data.image} alt="image" />
                              <Typography
                                variant="h6"
                                style={{ fontSize: "14px", marginLeft: "7px" }}
                              >
                                {data.discription}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </Paper>
  );
};

export default BetBuilder;
