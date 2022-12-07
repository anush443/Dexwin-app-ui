import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainTokenBox: {
    background: theme.palette.background.paper,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    padding: "10px 15px 20px",
    "& p": {
      color: "#787878",
    },
    "& h6": {
      fontSize: "14px",
      color: theme.palette.text.primary,
    },
  },

  spanText: {
    color: theme.palette.text.primary,
  },
}));

const BalenceCard = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            <Box className={classes.mainTokenBox}>
              <Typography variant="body1">Balance</Typography>
              <Grid container>
                <Grid item lg={4} md={4}>
                  <Box>
                    <Box>
                      <img src="./images/imgpsh_fullsize_anim (5).png" alt="" />
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        0.000217
                        <span className={classes.spanText}>BNB</span>
                      </Typography>
                      <Typography variant="body1">( $ 165.23 )</Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={4} md={4}>
                  <Box>
                    <Box>
                      <img src="./images/imgpsh_fullsize_anim (6).png" alt="" />
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        0.000217
                        <span className={classes.spanText}>BNB</span>
                      </Typography>
                      <Typography variant="body1">( $ 165.23 )</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BalenceCard;
