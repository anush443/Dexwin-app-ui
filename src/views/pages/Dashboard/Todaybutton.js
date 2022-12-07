import React, { useEffect, useState } from "react";
import { Paper, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getOddAPI } from "src/services/ApiCall";

const useStyles = makeStyles((theme) => ({
  PostBox: {
    "& .scorecew": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "25px",
      padding: "3px 8px",
      background: theme.palette.background.secondDeault,
      "& figure": {
        margin: "0px",
        width: "25px",
        height: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          maxWidth: "100%",
          maxHeight: "100%",
        },
      },
      "& p": {
        textAlign: "center",
      },
    },
  },
}));

export default function (props) {
  let { id, homeImg, awayImg } = props;
  const [threeWayOdds, setThreeWayOdds] = useState([]);
  var status = false;

  useEffect(() => {
    getThreeWayOddAPIOddUsignid(id);
  }, []);

  const getThreeWayOddAPIOddUsignid = async (id) => {
    try {
      const endPoint = "threeWayOddAPI";
      const response = await getOddAPI(endPoint, id);
      status = true;
      if (response.data.status == "success") {
        setThreeWayOdds(response.data.data[0].bookmakers[0].bets[0].values);
      } else {
        setThreeWayOdds([]);
      }
    } catch (error) {}
  };

  const classes = useStyles();

  return (
    <>
      <Box className={classes.PostBox}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="scorecew">
              <figure>
                <img src={awayImg} />
              </figure>
              <Typography variant="body1">
                {threeWayOdds.length > 0 ? threeWayOdds[2].odd : "-"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="scorecew">
              <Typography variant="h4">OT</Typography>
              <Typography variant="body1">
                {threeWayOdds.length > 0 ? threeWayOdds[1].odd : "-"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="scorecew">
              <figure>
                <img src={homeImg} />
              </figure>
              <Typography variant="body1">
                {threeWayOdds.length > 0 ? threeWayOdds[0].odd : "-"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
