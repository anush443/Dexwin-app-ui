import React from "react";
import { makeStyles,Grid } from "@material-ui/core";
import CosafaAccordion from "src/component/CosafaAccordion";

const cardData = [
    {
        heading: "ALL STATISTICS",
        description: [
            {
                text1: "Luka Doncic to have 7+ assists",
                num1: "+300",
                num2: "+150",
                text2: "Lebron James to have less than 5 assists",
            }
        ]
    },
    {
        heading: "ASSISTS",
        description: [
            {
                text1: "Luka Doncic to have 7+ assists",
                num1: "+300",
                num2: "+150",
                text2: "Lebron James to have less than 5 assists",
            }
        ]
    },
    {
        heading: "ASSISTS",
        description: [
            {
                text1: "Luka Doncic to have 7+ assists",
                num1: "+300",
                num2: "+150",
                text2: "Lebron James to have less than 5 assists",
            }
        ]
    },
]



export default function PlayersProps(props) {
    const { playersPropsData, type } = props;

    return (
        <>
            <Grid container spacing={2} direction={"column"}>
                {
                    cardData && cardData?.map((playersPropsData, index) => {
                        return (
                            <Grid item xs={12}>
                                <CosafaAccordion playersPropsData={playersPropsData} type="playersProps" key={index} />

                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    );
}
