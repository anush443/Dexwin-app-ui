import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  makeStyles,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import { BiCopy } from "react-icons/bi";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  centering: {
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
    "& p": {
      marginBottom: "5px",
    },
  },

  secondgrid: {
    paddingLeft: "30px !important",
  },
  updatabtn: {
    minWidth: "180px",
    padding: "10px 0px",

    background:
      "linear-gradient(100deg, rgba(100,55,192,1) 0%, rgba(100,55,192,1) 100%)",
    fontSize: "15px",
  },
  formControl: {
    minWidth: "160px",
    backgroundColor: "#6437C0 !important",
    borderRadius: "4px !important",
  },
  selectbox: {
    backgroundColor: "#6437C0 !important",
    borderRadius: "4px !important",
    boxShadow: "none",
  },
  selectbox2: {
    borderRadius: "4px",
    background: "#6437C0",
  },
  selectbox1: {
    borderRadius: "4px",
    background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
  },

  paragraph: {
    maxWidth: "400px",
    marginTop: "2rem",

    "& P": {
      color: "#8D8D8D",
      textAlign: "center",
    },
  },
}));

const WithdrawWallet = () => {
  const classes = useStyles();
  const [select, setSelect] = useState("Withdraw");

  const claim = () => {};

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <Box className="textField">
      <Container
        style={{
          marginTop: "25px",
        }}
      >
        <Box className={classes.profileBox}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              className={classes.centering}
            >
              <Box className={classes.mainbox}>
                <Box style={{ maxWidth: "250px" }}>
                  <img
                    src="images/imgpsh_fullsize_anim (4).png"
                    width="85%"
                    alt="Profile Pic "
                  />
                  <Typography variant="body2">
                    0xc51s5aa1ed5wdsa..... &nbsp;{" "}
                    <BiCopy style={{ color: "#FA9131", cursor: "pointer" }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              lg={9}
              className={classes.secondgrid}
            >
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item lg={2} md={2} sm={2} xs={12}>
                  <Typography variant="h4">Wallet</Typography>
                </Grid>
                <Grid item lg={6} md={5} sm={6} xs={6} align="right">
                  <FormControl className={classes.formControl}>
                    <Select
                      className={classes.selectbox1}
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="weather"
                      value={select}
                      onChange={handleChange}
                    >
                      <MenuItem value={"Withdraw"}>Deposit</MenuItem>
                      <MenuItem value={"Cloudy"}>Cloudy</MenuItem>
                      <MenuItem value={"Rainy"}>Rainy</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4} md={5} sm={4} xs={6} align="right">
                  <FormControl className={classes.formControl}>
                    <Select
                      className={classes.selectbox2}
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="weather"
                      value={select}
                      onChange={handleChange}
                    >
                      <MenuItem value={"Withdraw"}>
                        Withdraw to Exch...
                      </MenuItem>
                      <MenuItem value={"Cloudy"}>Cloudy</MenuItem>
                      <MenuItem value={"Rainy"}>Rainy</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Box>
                  <Grid container spacing={2} style={{ marginTop: "4rem" }}>
                    <Grid item lg={12} xs={12}>
                      <Typography variant="body1">BUSD Address*</Typography>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Enter BUSD address"
                        className={classes.textfield}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <Box>
                        <Typography variant="body1">Amount *</Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="Enter amount"
                        ></TextField>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box align="right" mt={2}>
                    <Typography variant="body1">
                      <span style={{ color: "#7784DA", fontSize: "14px" }}>
                        Available Balance
                      </span>{" "}
                      : 0.345 BTC
                    </Typography>
                  </Box>
                  <Box align="center" mt={3} ml={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.updatabtn}
                    >
                      Withdraw
                    </Button>
                  </Box>
                  <Box className={classes.paragraph}>
                    <Typography variant="body2">
                      Minimium withdrawal is 11.10 BUSD. Your withdrawal will
                      have 1.5 BUSD subtracted from your remaining balance to
                      cover the fee required to process the transaction.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Box></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WithdrawWallet;
