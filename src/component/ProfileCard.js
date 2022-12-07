import React from "react";
import { Box, Typography, Grid, makeStyles, Paper } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
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
          fontFamily: "Red Hat Mono",
          fontStyle: "normal"
        },
      },
      "& .flexjustifycenter": {
        "& h5": {
          fontSize: "15px",
          lineHeight: "27px",
          marginLeft: "15px",
          fontWeight: "600",
          fontFamily: "Red Hat Mono",
          fontStyle: "normal"
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
      fontFamily: "Red Hat Mono"

    },
  },
}));
const myaccount = [
  {
    img: "images/bnb.png",
    name: "0.000217",
    price: "( $ 165.23 )",
  },
  {
    img: "images/btc.png",
    name: "0.000217",
    price: "( $ 165.23 )",
  },
  {
    img: "images/eth.png",
    name: "0.000217",
    price: "( $ 165.23 )",
  },
];

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const   TokenInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.profileCardBox}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} md={12}>
          <Paper
            className="accountBox"
            elevation={2}
            style={{ borderRadius: "25px 0px 25px 25px" }}
          >
            <Box className="headingBox" align="center">
              <Box style={{ padding: "10px" }}>
                <Typography variant="body1">TOTAL BALANCE</Typography>
                <Typography variant="h5">$ 1065.00</Typography>
              </Box>
            </Box>

            <Box pt={2} pb={2}>
              <Grid container spacing={0} alignItems="center">
                {myaccount.map((data) => {
                  return (
                    <>
                      <Grid item xs={6} lg={6} sm={6}>
                        <Box className="flexjustifycenter">
                          <img src={data.img} alt="image" />
                          <Flex>
                            <Typography variant="h5">{data.name}</Typography>
                            &nbsp;
                            <sub>BNB</sub>
                          </Flex>
                        </Box>
                      </Grid>
                      <Grid item xs={6} lg={6} sm={6} align="center">
                        <Typography variant="body1" className="priceText">
                          {data.price}
                        </Typography>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} md={12}>
          <Paper className="accountBox" elevation={2}>
            <Box className="headingBox" align="center">
              <Box style={{ padding: "10px" }}>
                <Typography variant="body1">MONEY ON BETS</Typography>
                <Typography variant="h5" className="numericals">$ 1065.00</Typography>
              </Box>
            </Box>

            <Box pt={2} pb={2}>
              <Grid container spacing={0} alignItems="center">
                {myaccount.map((data) => {
                  return (
                    <>
                      <Grid item xs={6} lg={6} sm={6}>
                        <Flex>
                          <Box className="flexjustifycenter">
                            <img src={data.img} />
                            <Flex>
                              <Typography variant="h5">{data.name}</Typography>
                              &nbsp;
                              <sub>BNB</sub>
                            </Flex>
                          </Box>
                        </Flex>
                      </Grid>
                      <Grid item xs={6} lg={6} sm={6} align="center">
                        <Typography variant="body1" className="priceText">
                          {data.price}
                        </Typography>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TokenInfo;
