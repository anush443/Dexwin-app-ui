import React from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FaqData from "./FaqData";
const useStyles = makeStyles((theme) => ({
  background: {
    background: "#1A1A1A",
    padding: "26px 0 17px 40px"
  },
  askBox: {
   padding: "0 46px"
  },
  PostBox: {
    height: "100vh",
    marginBottom: "15px",  
    "& .subbox": {
      marginTop: "10px",
      background: theme.palette.background.heading,
      borderRadius: "30px",
    },
    "& .subchild": {
      "& .paddingsec": {
        padding: "17px 21px 20px",
        display: "flex",
        alignItems: "center",
        "& h3": {
          fontSize: "18px",
        },
      },
      "& .baby": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
  },
}));
const FaqDataList = [
  {
    head: "Can I Withdraw at the time of live tournament ? ",
    summary: [
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum
        </p>
      </div>,
    ],
  },
  {
    head: "Can I Withdraw at the time of live tournament ? ",
    summary: [
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum
        </p>
      </div>,
    ],
  },
  {
    head: "Can I Withdraw at the time of live tournament ? ",
    summary: [
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum
        </p>
      </div>,
    ],
  },
  {
    head: "Can I Withdraw at the time of live tournament ? ",
    summary: [
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum
        </p>
      </div>,
    ],
  },
  {
    head: "Can I Withdraw at the time of live tournament ? ",
    summary: [
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ipsum dolor sit amet, consectetur adipiscing Lorem Ipsum
        </p>
      </div>,
    ],
  },
];
export default function (props) {
  const classes = useStyles();
  return (
    <Paper className={classes.PostBox} elevation={2}>
      <div className={classes.background}>
        <Typography variant="h3">Frequently ask questions</Typography>
      </div>
      <Box mt={5} className={classes.askBox}>
        <Grid container spacing={1}>
          {FaqDataList.map((data, i) => {
            return (
              <Grid item xs={12} sm={12} md={12} key={i}>
                <FaqData data={data} index={i} />
              </Grid>
            );
          })}
        </Grid>
      </Box>

    </Paper>
  );
}
