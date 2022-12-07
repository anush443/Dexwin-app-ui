import React from "react";
import {
  Box,
  Typography,
  Grid,
  makeStyles,
  Paper,
  Divider,
} from "@material-ui/core";
import styled from "styled-components";

const DotList = styled.ul`
list-style: none;
  margin:0;
  padding:0;
  position: relative;
  &:before{
      content:"";
      display: inline-block;
      width: 2px;
       background: #363636;;
      position: absolute;
      left:3px;
      top:5px;
      height: calc(100% - 10px );`;
const SubList = styled.li`
      position: relative;
      padding-left: 15px;
      margin-bottom:15px;
      color: #787878;
      &:before{
        content:"";
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #363636;
        position: absolute;
        left:0;
        top:5px;
        border-radius: 10px;`;

const useStyles = makeStyles((theme) => ({
  dividerColor: {
    backgroundColor: "#363636",
    height: "172px",
  },
  profileCardBox: {
    position: "relative",
    "& .accountBox": {
      "& .headingBox": {
        background: theme.palette.background.heading,

        "& p": {
          color: "#39AED0",
          lineHeight: "26px",
        },
        "& h5": {
          fontSize: "20px",
          fontWeight: "600",
        },
      },
      "& .flexjustifycenter": {
        "& h5": {
          fontSize: "15px",
          lineHeight: "27px",
          marginLeft: "15px",
          fontWeight: "600",
        },
      },
      "& img": {
        width: "20px",
      },
      "& sub": {
        fontSize: "12px",
        color: "#787878",
      },
    },
    "& .priceText": {
      color: theme.palette.text.noticetext,
      fontSize: "13px",
    },
  },
}));
function Preferences() {
  const classes = useStyles();
  return (
    <Box className={classes.profileCardBox}>
      <Paper className="accountBox" elevation={2}>
        <Box className="headingBox" align="center">
          <Box style={{ padding: "10px" }}>
            <Typography variant="h5">Preferences</Typography>
          </Box>
        </Box>

        <Box pt={2} pb={2}>
          <Grid container spacing={0} alignItems="initial">
            <Grid item xs={5} lg={5} sm={6}>
              <Box className="flexjustifycenter">
                <Typography variant="h4">ODDS</Typography>
              </Box>
              <Box className="flexjustifycenter" pt={2} pb={2}>
                <div>
                  <DotList>
                    <SubList>MONEY LINE ODDS</SubList>
                    <SubList>DECIMAL ODDS</SubList>
                    <SubList>FRACTIONAL ODDS</SubList>
                  </DotList>
                </div>
              </Box>
            </Grid>
            <Grid item xs={2} lg={2} sm={6}>
              <Box className="flexjustifycenter">
                <Divider
                  className={classes.dividerColor}
                  orientation="vertical"
                />
              </Box>
            </Grid>
            <Grid item xs={5} lg={5} sm={6}>
              <Box className="flexjustifycenter">
                <Typography variant="h4">THEME</Typography>
              </Box>
              <Box className="flexjustifycenter" pt={2} pb={2}>
                <div>
                  <DotList>
                    <SubList>LIGHT</SubList>
                    <SubList>AUTO</SubList>
                    <SubList>DARK</SubList>
                  </DotList>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}

export default Preferences;
