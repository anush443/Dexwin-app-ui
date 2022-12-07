import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
  TextField,
  Select,
  InputAdornment,
  MenuItem,
} from "@material-ui/core";
import { BiCopy } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import FormControl from "@material-ui/core/FormControl";
import ProfileCard from "src/component/ProfileCard";

const useStyles = makeStyles((theme) => ({
  centering: {
    "& .profileBoxImg": {
      "& img": {
        cursor: "pointer",
        position: "relative",
        maxWidth: "150px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "4px solid #515151",
      },
    },
    "& p": {
      whiteSpace: "nowrap",
      width: "102px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    borderRight: "1px solid #413F3F",
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  mainbox: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  profileBox: {
    background: theme.palette.background.paper,
    boxShadow: " 0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "30px",
    position: "relative",
    padding: "40px 25px 75px 25px",
    "& h4": {
      color: "#7784DA !important",
    },
    "& input::placeholder": {
      fontSize: "13px",
    },
    "& .justifyEndBox": {
      display: "flex",
      justifyContent: "end !important",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
  },
  widthdrawbox: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },

  accountText: {
    color: theme.palette.text.primary,
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "60px",
  },

  updatabtn: {
    minWidth: "180px",
    padding: "10px 0px",

    background:
      "linear-gradient(100deg, rgba(100,55,192,1) 0%, rgba(100,55,192,1) 100%)",
    fontSize: "15px",
  },
  formControl: {
    backgroundColor: "#6437C0 !important",
    borderRadius: "4px !important",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  selectbox: {
    backgroundColor: "#6437C0 !important",
    borderRadius: "100px !important",
    boxShadow: "none",
    marginRight: "10px",
  },
  selectbox2: {
    borderRadius: "4px",
    background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
  },
  selectbox3: {
    borderRadius: "4px",
    background: "#2B2C31",
    boxShadow:
      "inset 0px -1px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.51)",
  },
  formControl2: {
    width: "100%",
    height: "50px",
    borderRadius: "100px !important",
  },
  paragraph: {
    marginTop: "2rem",
    "& P": {
      color: "#8D8D8D",
    },
  },
  copyicon: {
    background: "#2B2C31",
  },
  selectBox: {
    display: "flex",
    alignItems: "center",
    "& h5": {
      fontSize: "14px",
      marginLeft: "10px",
      fontWeight: "700",
    },
    "& img": {
      width: "25px",
    },
  },
  exchange: {
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
}));

const DepositeWallet = () => {
  const classes = useStyles();
  const [select, setSelect] = useState("Deposite");
  const [widthdraw, setWidthdraw] = useState("Withdraw");
  const handleChange2 = (event) => {
    setWidthdraw(event.target.value);
  };
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const [select1, setSelect1] = useState("BTC");
  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };

  return (
    <Box className="Banner">
      <Container>
        <ProfileCard />
        <Box className={classes.profileBox} mt={2}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              className={classes.centering}
            >
              <Box className="profileBoxImg" align="center">
                <img
                  src="images/profile_img.png"
                  width="85%"
                  alt="Profile Pic "
                />
                <Box mt={2}>
                  <Typography variant="body2">
                    0xc51s5aa.....&nbsp;
                    <BiCopy style={{ color: "#FA9131", cursor: "pointer" }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <Typography variant="h4" style={{ paddingLeft: "20px" }}>
                    Wallet
                  </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Box className="justifyEndBox">
                    <FormControl className={classes.formControl}>
                      <Select
                        className={classes.selectbox}
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="weather"
                        value={select}
                        onChange={handleChange}
                      >
                        <MenuItem value={"Deposite"}>Deposit</MenuItem>
                        <MenuItem value={"Cloudy"}>Cloudy</MenuItem>
                        <MenuItem value={"Rainy"}>Rainy</MenuItem>
                      </Select>
                    </FormControl>
                    <Box className={classes.widthdrawbox}>
                      <FormControl className={classes.formControl}>
                        <Select
                          className={classes.selectbox2}
                          variant="outlined"
                          size="small"
                          fullWidth
                          name="widthdraw"
                          value={widthdraw}
                          onChange={handleChange2}
                        >
                          <MenuItem value={"Withdraw"}>Withdraw</MenuItem>
                          <MenuItem value={"Cloudy"}>Cloudy</MenuItem>
                          <MenuItem value={"Rainy"}>Rainy</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Grid>

                <Box className={classes.exchange}>
                  <Grid container spacing={2}>
                    <Grid item lg={12} xs={12}>
                      <Box mb={2}>
                        <Typography
                          variant="body2"
                          style={{ color: "#787878" }}
                        >
                          Deposit from exchange
                        </Typography>
                      </Box>

                      <FormControl className={classes.formControl2}>
                        <Select
                          className={classes.selectbox3}
                          variant="outlined"
                          size="small"
                          fullWidth
                          name="weather"
                          value={select1}
                          onChange={handleChange1}
                        >
                          <MenuItem value={"BTC"}>
                            <Box className={classes.selectBox}>
                              <img src="images/btc.png" alt="image" />
                              <Typography variant="h5">BTC</Typography>
                            </Box>
                          </MenuItem>
                          <MenuItem value={"BNB"}>
                            <Box className={classes.selectBox}>
                              <img src="images/bnb.png" alt="image" />
                              <Typography variant="h5">BNB</Typography>
                            </Box>
                          </MenuItem>

                          <MenuItem value={"ETH"}>
                            <Box className={classes.selectBox}>
                              <img src="images/eth.png" alt="image" />
                              <Typography variant="h5">ETH</Typography>
                            </Box>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <Box>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="Your BUSD deposit address"
                          className={classes.copyicon}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <MdOutlineContentCopy
                                  style={{
                                    fontSize: "20px",
                                    color: "#5C82A8",
                                    cursor: "pointer",
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box align="right" mt={2}>
                    <Typography variant="body2">
                      <span style={{ color: "#7784DA" }}>
                        Available Balance
                      </span>
                      : 0.345 BTC
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Box mt={5} align="center">
                <img
                  src="/images/Qrscanar.png"
                  alt=""
                  style={{ width: "30%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DepositeWallet;
