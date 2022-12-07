import React from "react";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  supportBox: {
    padding: "40px",
    "& .contactUsBox": {
      background: theme.palette.background.heading,
      padding: "50px",
      borderRadius: "20px",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        padding: "15px",
      },
      "& h5": {
        fontSize: "14px",
        padding: "10px 0",
      },
    },
    [theme.breakpoints.only("xs")]: {
      padding: "15px",
    },
  },
  submit: {
    backgroundColor: "#6437C0",
    fontSize: "16px",
    border: " 0.5px solid #6437C0",
    borderRadius: "100px",
    padding: "8px 22px",
    width: "calc(100% - 168px)",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  bin: {
    "& textfeild": {
      paddingLeft: "15px",
      "& .MuiInputBase-input": {
        height: "100vh !important",
      },
     
    },
  },
  chooseButton: {
    backgroundColor: "#6437C0",
    borderRadius: "100px",
    border: " 0.5px solid #6437C0",
  },
  imageHolder: {
    position: "relative",
    "& img": {
      position: "absolute",
      left: "50%",
      top: "-97px",
      transform: "translateX(-50%)",
      [theme.breakpoints.down("md")]: {
        top: "-50px",
        maxWidth: "54px",
      },
    },
  },

  inputBox: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px !important",
    },
    "& .MuiInput-root": {
      boxShadow: "inset -10px -10px 20px rgb(255 255 255 / 10%), inset 10px 10px 20px rgb(0 0 0 / 0%) !important",
      borderRadius: "10px !important",
    },
    "& .MuiInputBase-inputMultiline": {
      padding: "1rem 1.5rem",
    }
  },
}));

export default function SignIn() {
  const classes = useStyles();
  return (
    <Paper className={classes.supportBox} elevation={2}>
      <Container maxWidth="lg">
        <Box className="contactUsBox" mt={5}>
          <Box align="center" className={classes.imageHolder}>
            <img src="images/Ellipse 183.png" alt="" />
            &nbsp;
            <Box mb={5}>
              <Typography
                component="h1"
                style={{ paddingBottom: "8px" }}
                variant="h4"
              >
                Hi ! Username
              </Typography>
              <Typography variant="h5" style={{ color: "#7784DA" }}>
                For more information you can connect us.
              </Typography>
              <Typography component="h1" variant="h4">
                Contact Us
              </Typography>
            </Box>
          </Box>
          <Container maxWidth="xs">
            <Box>
              <form className={classes.form} noValidate>
                <Box mt={1} className={classes.inputBox}>
                  <TextField
                    id="outlined-basic"
                    // variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    placeholder="Enter the subject"
                    autoComplete="email"
                    autoFocus
                    InputProps={{
                      className: classes.bin,
                    }}
                  />
                </Box>
                <Box mt={3} className={classes.inputBox}>
                  <TextField
                  id="outlined-basic"
                    multiline
                    minRows={6}
                    // variant="outlined"
                    autoComplete="off"
                    name="message"
                    fullWidth
                    className={classes.textFeild}
                    placeholder="Description"
                    // style={{ borderRadius: "10px !important" }}
                    InputProps={{
                      className: classes.bin,
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <label>Attachment</label>
                </Box>
                <Box mt={2}>
                  <input type="file" accept=".jpg,.jpeg,.png,.pdf" className="chooseFile" />
                </Box>

                <Box align="center" mt={3} mb={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="gradientButton"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Container>
        </Box>
      </Container>
    </Paper>
  );
}
