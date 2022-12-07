import React from "react";
import { makeStyles, Box, IconButton } from "@material-ui/core";
import { ModalContext } from "./context";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modalStyles: {
    position: "absolute",
    top: "95px",
    left: "28px",
    borderRadius: "20px",
    paddingTop: "10px",
    height: "calc(100% - 108px)",
    boxShadow: "0px 0px 20px rgb(0 0 0 / 50%)",
    background: theme.palette.background.default,
    zIndex: "99",
    width: "calc(100% - 405px)",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
    },
    "@media (max-width: 1366px)": {
      width: "calc(100% - 240px)",
    },
    "@media (max-width: 991px)": {
      width: "100%",
    },
  },
  modalStylesBG: {
    width: "calc(100% - 20px)",
    height: "calc(100% - 10px)",
    margin: "0 auto",

  },
  modalStylesForMobileView: {
    position: "absolute",
    top: "100px",
    left: "25%",
    borderRadius: "20px",
    paddingTop: "10px",
    height: "calc(100% - 255px)",
    boxShadow: "0px 0px 20px rgb(0 0 0 / 50%)",
    background: theme.palette.background.default,
    zIndex: "99",
    width: "calc(100% - 410px)",
    overflow: "auto",
  }

}));

const Modal = ({ children, toggleModal, type }) => {
  const classes = useStyles();
  return (
    <ModalContext.Consumer>
      {context => {
        if (context.showModal) {
          return (
            <Box className={type === "SidebarModalForMobile" ? `${classes.modalStylesForMobileView}` : `${classes.modalStyles}`}>
              <Box className={classes.modalStylesBG}>
                {children}
                <IconButton onClick={context.toggleModal} style={{
                  position: "absolute",
                  top: "20px",
                  right: "28px"
                }}><CloseIcon style={{ color: "#fff" }} /></IconButton>
              </Box>
            </Box>
          );
        }
        return null
      }}
    </ModalContext.Consumer>
  );
};

export default Modal;