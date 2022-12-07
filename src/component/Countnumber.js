import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  btnsec: {
    background: theme.palette.background.default,
    boxShadow:
      "-10px -10px 20px rgb(255 255 255 / 6%), 10px 10px 20px rgb(0 0 0 / 25%)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "35px",
    "& h4": {
      color: "#FA9131",
    },
  },
  textTop: {
    "& h6": {
      color: "#7784DA",
    },
    "& p": {
      color: "#7784DA",
    },
  },
}));
export default function (props) {
  const {
    type,
    TotalAway,
    TotalHome,
    AQuater1,
    AQuater2,
    AQuater3,
    AQuater4,
    HQuater1,
    HQuater2,
    HQuater3,
    HQuater4,
  } = props;
  const classes = useStyles();
  return (
    <Box className={classes.PostBox} align="right">
      <Grid container spacing={2} direction={"column"}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {type === "CosafaGameScreen" ? (
              " "
            ) : (
              <Grid item xs={4} align="left">
                {" "}
              </Grid>
            )}
            <Grid item xs={2}>
              <Box className={classes.textTop}>
                <Typography variant="body1">Q1</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.textTop}>
                <Typography variant="body1">Q2</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.textTop}>
                <Typography variant="body1">Q3</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.textTop}>
                <Typography variant="body1">Q4</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {type === "CosafaGameScreen" ? (
              " "
            ) : (
              <Grid item xs={4} align="left">
                {" "}
                <Box className={classes.btnsec}>
                  <Typography variant="h4">{TotalAway}</Typography>
                </Box>
              </Grid>
            )}
            <Grid item xs={2}>
              <Typography variant="body1">
                {AQuater1 == null ? "-" : AQuater1}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                {AQuater2 == null ? "-" : AQuater2}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                {AQuater3 == null ? "-" : AQuater3}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                {AQuater4 == null ? "-" : AQuater4}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {type === "CosafaGameScreen" ? (
              " "
            ) : (
              <Grid item xs={4} align="left">
                {" "}
                <Box className={classes.btnsec}>
                  <Typography variant="h4">{TotalHome}</Typography>
                </Box>
              </Grid>
            )}
            <Grid item xs={2}>
              <Typography variant="body1">
                {HQuater1 == null ? "-" : HQuater1}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                {HQuater2 == null ? "-" : HQuater2}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                {HQuater3 == null ? "-" : HQuater3}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                {HQuater4 == null ? "-" : HQuater4}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
