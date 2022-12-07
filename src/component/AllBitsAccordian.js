import { Box } from "@material-ui/core";
import React from "react";
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  IconButton,
  Toolbar,
  AppBar,
  Slide,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Dialog from "@material-ui/core/Dialog";
import { BsArrowLeft } from "react-icons/bs";
const useStyles = makeStyles((theme) => ({
  ButtonBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  greenButton: {
    background: "#00FFAB",
    boxShadow: " 0px 0px 11px rgba(0, 255, 171, 0.5)",
    color: "#000",
    fontSize: "17px",
    fontWeight: 700,
  },
  fullscreenModal: {
    "& .MuiDialog-paperFullScreen": {
      top: "26px",
      height: "calc(100% - 80px)",
      background: theme.palette.background.paper,
    },
  },
  appBar: {
    position: "relative",
    background: theme.palette.background.tablehead,
    borderRadius: "43px",
    "& h5": {
      fontSize: "13px",
    },
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dailogHeader: {
    width: "100%",
    "& button": {
      marginRight: "10px",
      "&.active": {
        background:
          "radial-gradient(98.18% 613.64% at 78.18% 50%, rgba(51, 153, 170, 0.81) 0%, rgba(51, 153, 170, 0) 100%) , radial-gradient(60% 120.26% at 40% 60%, #6437C0 0%, #6437C0 100%) , linear-gradient(159.8deg, #7784DA 24.32%, #7784DA 53.17%)",
      },
    },
  },
  root: {
    width: "100%",

    "& .accordiantitle": {
      background: theme.palette.background.tablehead,
    },
    "& .accordiandetails": {
      background: theme.palette.background.tablehead,
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  AccordionBox: {
    display: "flex",
    background: theme.palette.background.AccordianBackground,
    width: "100%",
    justifyContent: "space-between",
    borderRadius: "4px",
    padding: "20px",
    "& h5": {
      color: "#7784DA",
    },
    "& .butnsec": {
      display: "flex",
      flexDirection: "row",
      "& button": {
        width: "83px",

        height: "30px",
        background:
          "radial-gradient(60.37% 50% at 50% 50%, rgba(255, 16, 16, 0.5) 0%, rgba(255, 0, 0, 0) 100%), linear-gradient(159.8deg, #FDB26D 24.32%, #FA6131 89.49%)",
        boxShadow: "0px 0px 11px #CF2B2B",
        borderRadius: "10px",
      },
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  BtnStyle: {
    width: "83px !important",
    height: "30px !important",
    background: "#FFFFFF !important",
    color: "#FA9131",
    boxShadow: "0px 0px 11px #CF2B2B !important",
    borderRadius: "10px !important",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ({ newtab, handleClose }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.UserBox}>
      <Box className={classes.ButtonBox}></Box>

      <></>

      <Dialog
        fullScreen
        className={classes.fullscreenModal}
        open={newtab}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <BsArrowLeft />
            </IconButton>
            <Box>
              <Typography variant="h5">All Bets</Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box p={2}>
          <div className={classes.root}>
            <Box>
              <input type="checkbox" />
            </Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordiantitle"
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography className={classes.heading} color="primary">
                      Selected bet
                    </Typography>
                  </Box>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      className={classes.heading}
                      color="primary"
                      style={{ paddingRight: "152px" }}
                    >
                      Yes
                    </Typography>
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "85px" }}
                      color="primary"
                    >
                      No
                    </Typography>
                  </Box>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "152px" }}
                    >
                      Yes
                    </Typography>
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "56px" }}
                    >
                      No
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails className="accordiandetails">
                <Grid container spacing={3}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.AccordionBox}>
                      <Box>
                        <Typography variant="h5">
                          Luka Doncic to have 7+ assists
                        </Typography>
                      </Box>

                      <Box className="butnsec">
                        <Button
                          variant="contained"
                          style={{ marginRight: "90px" }}
                        >
                          +300
                        </Button>
                        <Button
                          variant="contained"
                          className={classes.BtnStyle}
                        >
                          +150
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.AccordionBox}>
                      <Box>
                        <Typography variant="h5">
                          Luka Doncic to have 7+ assists
                        </Typography>
                      </Box>

                      <Box className="butnsec">
                        <Button
                          variant="contained"
                          style={{ marginRight: "90px" }}
                        >
                          +300
                        </Button>
                        <Button
                          variant="contained"
                          className={classes.BtnStyle}
                        >
                          +150
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordiantitle"
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography className={classes.heading}>
                      Selected bet
                    </Typography>
                  </Box>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "152px" }}
                    >
                      Yes
                    </Typography>
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "85px" }}
                    >
                      No
                    </Typography>
                  </Box>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "152px" }}
                    >
                      Yes
                    </Typography>
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "56px" }}
                    >
                      No
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails className="accordiandetails">
                <Grid container spacing={3}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.AccordionBox}>
                      <Box>
                        <Typography variant="h5">
                          Luka Doncic to have 7+ assists
                        </Typography>
                      </Box>

                      <Box className="butnsec">
                        <Button
                          variant="contained"
                          style={{ marginRight: "90px" }}
                        >
                          +300
                        </Button>
                        <Button
                          variant="contained"
                          className={classes.BtnStyle}
                        >
                          +150
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.AccordionBox}>
                      <Box>
                        <Typography variant="h5">
                          Luka Doncic to have 7+ assists
                        </Typography>
                      </Box>

                      <Box className="butnsec">
                        <Button
                          variant="contained"
                          style={{ marginRight: "90px" }}
                        >
                          +300
                        </Button>
                        <Button
                          variant="contained"
                          className={classes.BtnStyle}
                        >
                          +150
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordiantitle"
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography className={classes.heading}>
                      Selected bet
                    </Typography>
                  </Box>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "152px" }}
                    >
                      Yes
                    </Typography>
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "85px" }}
                    >
                      No
                    </Typography>
                  </Box>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "152px" }}
                    >
                      Yes
                    </Typography>
                    <Typography
                      className={classes.heading}
                      style={{ paddingRight: "56px" }}
                    >
                      No
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails className="accordiandetails">
                <Grid container spacing={3}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.AccordionBox}>
                      <Box>
                        <Typography variant="h5">
                          Luka Doncic to have 7+ assists
                        </Typography>
                      </Box>

                      <Box className="butnsec">
                        <Button
                          variant="contained"
                          style={{ marginRight: "90px" }}
                        >
                          +300
                        </Button>
                        <Button
                          variant="contained"
                          className={classes.BtnStyle}
                        >
                          +150
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Box className={classes.AccordionBox}>
                      <Box>
                        <Typography variant="h5">
                          Luka Doncic to have 7+ assists
                        </Typography>
                      </Box>

                      <Box className="butnsec">
                        <Button
                          variant="contained"
                          style={{ marginRight: "90px" }}
                        >
                          +300
                        </Button>
                        <Button
                          variant="contained"
                          className={classes.BtnStyle}
                        >
                          +150
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </Dialog>
    </Box>
  );
}
