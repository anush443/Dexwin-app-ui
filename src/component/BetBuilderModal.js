import React from "react";
import { makeStyles, Box, IconButton, Avatar } from "@material-ui/core";
import { ModalContext } from "./context";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  modalStyles: {
    position: "absolute",
    top: "0px",
    left: "0px",
    borderRadius: "20px",
    height: "calc(100% - 1px)",
    paddingTop: "10px",
    boxShadow: "0px 0px 20px rgb(0 0 0 / 50%)",
    background: theme.palette.background.default,
    zIndex: "99",
    width: "100% !important",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
    },
    "@media (max-width: 1366px)": {
      width: "100% !important",
    },
    "@media (max-width: 991px)": {
      width: "100% !important",
    },
  },
  modalStylesBG: {
    width: "calc(100% - 20px)",
    height: "calc(100% - 10px)",
    margin: "0 auto",
  },
}));

const BetBuilderModal = ({ children }) => {
  const classes = useStyles();
  return (
    <ModalContext.Consumer>
      {(context) => {
        if (context.showModal) {
          return (
            <Box className={classes.modalStyles}>
              <Box className={classes.modalStylesBG}>
                {children}
                <Avatar
                  id="closebutton"
                  onClick={context.toggleModal}
                  className="closebtn "
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "28px",
                    cursor: "pointer",
                  }}
                >
                  <KeyboardBackspaceIcon style={{ color: "#fff" }} />
                </Avatar>
              </Box>
            </Box>
          );
        }
        return null;
      }}
    </ModalContext.Consumer>
  );
};

export default BetBuilderModal;
