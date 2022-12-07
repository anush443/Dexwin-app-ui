import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid, Paper
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
   date: {
    color: "#787878"
   },
  NotificationBox: {
    padding: "25px 15px",
    margin: "0px 0 20px",
    "& img": {
      borderRadius: "25px",
      [theme.breakpoints.only("xs")]:{
        borderRadius: "15px",
      },
    },
  },
  notiHead: {
    background: theme.palette.background.heading,
    borderRadius: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    marginBottom: "10px",
    "@media (max-width:425px)": {
      padding: '15px',
    },



    "& h3": {
      color: "#39AED0",
      fontSize: "16px",
      [theme.breakpoints.down("xs")]: {
        textAlign: 'right',
      }


    },

  },
  notificate: {
    padding: "10px 17px",
    borderRadius: "20px",
    marginBottom: "20px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
    },
    "& h5": {
      fontSize: "17px",
      lineHeight: "25px",
      maxWidth: "400px",
      text: theme.palette.text.noticetext,
      [theme.breakpoints.down("xs")]: {
        fontSize: '11px',
        lineHeight: '18px',
      }
    },
    "& h6": {
      color: "#39AED0",
      maxWidth: "400px",
      lineHeight: "20px",
      [theme.breakpoints.down("xs")]: {
        fontSize: '11px !important',
        lineHeight: '14px',
      },
    },
    },
    "& p": {
      fontSize: "11px",
      fontWeight: "400",
      color: "#787878",
    
  },
  secondgrid: {
    [theme.breakpoints.down("xs")]: {
      marginTop: '-13px'
    }
  },
  paragraphbox: {
    marginTop: '15px',
    [theme.breakpoints.down("xs")]: {
      marginTop: '2px',
    }
  }
}));
const notificationData = [
  {
    img: "images/notification_img.png",
    id: 1,
    title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
    subTitle:
      "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
    date: "04th July 2022",
    time: "01:00 PM",
  },
  {
    img: "images/notification_img.png",
    id: 1,
    title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
    subTitle:
      "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
    date: "04th July 2022",
    time: "01:00 PM",
  },
  {
    img: "images/notification_img.png",
    id: 1,
    title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
    subTitle:
      "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
    date: "04th July 2022",
    time: "01:00 PM",
  },
  {
    img: "images/notification_img.png",
    id: 1,
    title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
    subTitle:
      "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
    date: "04th July 2022",
    time: "01:00 PM",
  },

];

const Notification = () => {
  const classes = useStyles();
  return (


    <Paper className={classes.NotificationBox} elevation={2}>
      <Box className={classes.notiHead}>
        <Typography variant="h4">Notifications</Typography>
        <Typography variant="h3">Clear All</Typography>
      </Box>



      <Grid container spacing={1} alignItems="center">
        {notificationData.map((allData) => {
          return (
            <>
              <Grid item xs={12}>
                <Paper className={classes.notificate} elevation={2}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item sm={6} md={4} xs={6}>
                      <img src={allData.img} alt="image" width="100%" />
                    </Grid>

                    <Grid item sm={6} md={8} xs={6} >
                      <Box className={classes.secondgrid}>
                        <Typography variant="h5">{allData.title}</Typography>
                        <Box className={classes.paragraphbox}>
                          <Typography variant="h6" style={{}}>
                            {allData.subTitle}
                          </Typography>
                        </Box>

                        <Box mt={2}>
                          <Typography className={classes.date}>
                            {allData.date} &nbsp;&nbsp; {allData.time}{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                  </Grid>
                </Paper>
              </Grid>
            </>
          );
        })}

      </Grid>

    </Paper>


  );
};

export default Notification;
