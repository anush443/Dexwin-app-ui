import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100vh",
    overflowX: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      overflow: "unset",
    },
  },
  left: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    [theme.breakpoints.down("xs")]: {
      height: 360,
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="sm">
          <Box className={classes.content}>{children}</Box>
        </Container>
      </Box>
    </>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};

export default LoginLayout;
