import React from 'react'
import { useState } from 'react';
import TopBar from "src/layouts/DashboardLayout/TopBar/index.js";
import LeaderBoard from 'src/views/pages/LeaderBoard/LeaderBoard';
import {makeStyles,Grid,} from "@material-ui/core";


const useStyles =makeStyles (()=>({
    body: {
        padding:"10rem 8rem",
        position:"relative",
    },
}))

function LeaderboardLayout() {
const classes= useStyles();
const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Grid style={{backgroundColor:"#222222"}}>
        <Grid xs={12}><TopBar     
        onMobileNavOpen={() => setMobileNavOpen(true)}
        isMobileNavOpen={isMobileNavOpen} 
        />
        </Grid> 
        <Grid xs={12} className={classes.body}><LeaderBoard/></Grid>
    </Grid>
  )
}

export default LeaderboardLayout