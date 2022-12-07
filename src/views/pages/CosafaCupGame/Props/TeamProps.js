import React from "react";
import CosafaAccordion from "src/component/CosafaAccordion";
import { makeStyles, Grid } from "@material-ui/core";

const cardData = [
  {
    heading: "All Statistic",
    description: [
      {
        text1: "Luka Doncic to have 7+ assists",
        num1: "+300",
        num2: "+150",
        text2: "Luka Doncic to have 7+ assists",
      },
    ],
  },
  {
    heading: "Assist",
    description: [
      {
        text1: "Luka Doncic to have 7+ assists",
        num1: "+300",
        num2: "+150",
        text2: "Luka Doncic to have 7+ assists",
      },
    ],
  },
  {
    heading: "Rebounds",
    description: [
      {
        text1: "Luka Doncic to have 7+ assists",
        num1: "+300",
        num2: "+150",
        text2: "Luka Doncic to have 7+ assists",
      },
    ],
  },
];

export default function PlayersProps(props) {
  const { playersPropsData, type } = props;

  return (
    <>
      <Grid container spacing={2}>
        {cardData &&
          cardData?.map((playersPropsData, index) => {
            return (
              <Grid item xs={12}>
                <CosafaAccordion
                  playersPropsData={playersPropsData}
                  type="teamProps"
                  key={index}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
