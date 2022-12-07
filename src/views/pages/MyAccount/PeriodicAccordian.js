import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "linear-gradient(180deg, #424344 0%, # 100%)",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Summary: {
    background: "#2B2C31",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            In Q4, how many points will Kobe Bryant have
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.Summary}>
          <Grid container spacing={1}>
            <Grid item lg={6} md={6} xs={12}>
              <Box>
                <TextField
                  fullWidth
                  placeholder="Boot Wars "
                  InputProps={{
                    className: classes.bin,
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        className={classes.InputAdornmentBox}
                      >
                        31.02
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Box>
                <TextField
                  fullWidth
                  placeholder="Boot Wars "
                  InputProps={{
                    className: classes.bin,
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        className={classes.InputAdornmentBox}
                      >
                        1.02
                      </InputAdornment>
                    ),
                  }}
                />
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
        >
          <Typography className={classes.heading}>
            In Q4, how many points will Kobe Bryant have
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.Summary}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
