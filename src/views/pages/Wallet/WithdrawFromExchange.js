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
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectbox3: {
    borderRadius: "4px",
    background: "#2B2C31",
    boxShadow:
      "inset -10px -10px 20px rgb(255 255 255 / 8%), inset 10px 10px 20px rgb(0 0 0 / 25%)",
  },
  formControl2: {
    width: "100%",
    borderRadius: "100px !important",
  },
  copyicon: {},
  exchange: {
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
}));

const Deposit = () => {
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
      <Box className={classes.exchange}>
        <Grid container spacing={2}>
          <Grid item lg={12} xs={12}>
            <Box>
              <Grid item lg={12} xs={12}>
                <Box
                  className="justifyBetween"
                  style={{ margin: "0rem 0.5rem" }}
                >
                  <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                    Withdraw
                  </Typography>
                  <Typography variant="body1" style={{ color: "#787878" }}>
                    Max 000.35BTC
                  </Typography>
                </Box>
              </Grid>
              {/* <Box mt={2}>
                <Typography variant="body1">BUSD Withdraw*</Typography>
              </Box> */}
              <Box mt={1}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Withdrawl Address*"
                  className={classes.copyicon}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={12} xs={12}>
            {/* <Box className="justifyBetween">
              <Typography variant="body1">Amount</Typography>
              <Typography variant="body1" style={{ color: "#787878" }}>
                Max 000.35BTC
              </Typography>
            </Box> */}
            <Box mt={1}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Amount*"
                className={classes.copyicon}
              />
            </Box>
          </Grid>
        </Grid>
        <Box align="right" mt={1}>
          <Typography variant="body1">
            <span style={{ color: "#7784DA" }}>Available Balance</span>: 0.345
            BTC
          </Typography>
        </Box>

        <Box align="center" mt={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className="gradientButton"
          >
            Withdraw
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Deposit;
