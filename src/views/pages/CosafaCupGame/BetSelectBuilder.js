import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  makeStyles,
  TextField,
  Select,
  InputAdornment,
  MenuItem,
  Button,
  Divider,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  Avatar,
} from "@material-ui/core";
import GloballySearchArea from "src/component/GloballySearchArea";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import FormControl from "@material-ui/core/FormControl";
import { Games } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    padding: "10px 20px",
    paddingBottom: " 50px",
    "& .headingContent": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& div": {
        marginLeft: "15px",
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
    borderRadius: "4px",
    background: "#2B2C31",
    boxShadow:
      "inset 0px -1px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.51)",
  },
  formControl2: {
    width: "100%",
    borderRadius: "100px !important",
    "& .selectmodalBox": {
      boxShadow:
        "inset 0px -1px 4px rgb(0 0 0 / 25%), inset 0px 4px 4px rgb(0 0 0 / 51%)",
      borderRadius: "4px",
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
const DepositeWallet = () => {
  const history = useHistory();
  const classes = useStyles();
  const [language, setLanguage] = useState("Lakers");
  const [language2, setLanguage2] = useState("Phoenix Suns");
  const [bet, setBet] = useState("Team total");
  const [status, setStatus] = useState("Status");
  const [event, setEvent] = useState("Event");
  const [awards, setAwards] = useState("Awards");
  const [games, setGames] = useState("November 20th, 2022");
  const [player, setPlayer] = useState("Select Player 1");
  const [open, setOpen] = React.useState(false);
  const [select1, setSelect1] = useState("BTC");
  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };
  const [select, setSelect] = useState("Deposite");
  const [widthdraw, setWidthdraw] = useState("Withdraw");
  const handleChange2 = (event) => {
    setWidthdraw(event.target.value);
  };
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper elevation={2} className={classes.bannerBox}>
      <Box className="mainBox" mt={2}>
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
                      <Grid item xs="6" align="right">
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
                  // input={<BootstrapInput />}
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
                  // input={<BootstrapInput />}
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
                  // input={<BootstrapInput />}
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
                  // input={<BootstrapInput />}
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
                  // input={<BootstrapInput />}
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
                  // input={<BootstrapInput />}
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
                  // input={<BootstrapInput />}
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
                  // input={<BootstrapInput />}
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
            <Grid item xs={6} md={4}>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  style={{
                    border: "1px solid rgb(51, 153, 170)",
                    fontSize: "12px",
                    boxShadow:
                      "-10px -10px 20px rgb(255 255 255 / 11%), 10px 10px 20px rgb(0 0 0 / 25%)",
                  }}
                >
                  View All Available Bets
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
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

export default DepositeWallet;
