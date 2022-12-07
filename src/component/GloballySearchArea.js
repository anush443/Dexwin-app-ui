import React, { useState, useContext } from "react";
import {
  makeStyles,
  TextField,
  Box,
  IconButton,
  InputAdornment,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import FuturesComponent from "src/views/pages/Dashboard/FuturesComponent";
import { OddsContext } from "src/context/Odds";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    "& .searchBox": {
      "& .MuiOutlinedInput-root": {
        borderRadius: "100px",
        height: "50px",

        "& .MuiOutlinedInput-input": {
          height: "28px",
        },
      },
    },
  },
}));

function GloballySearchArea(props) {
  const { type, setCardData, cardData, getOddsContextData } = props;
  const classes = useStyles();
  const oddsContext = useContext(OddsContext);

  const [query, setQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  const changeHandler = (event) => {
    setQuery(event.target.value);
    if (query != "" && query != null && query != undefined) {
      const filterData = cardData.filter((item) => {
        return item.question.includes(query);
      });
    } else {
      getOddsContextData();
    }
  };

  return (
    <>
      <Box className={classes.root}>
        {type === "TopHeaderSearchArea" ? (
          <Button
            // id="outlined-basic"
            // type="button"
            value={"Search"}
            variant="contained"
            color="primary"
            style={{
              background: "#222222",
              boxShadow: "inset -10px -10px 20px rgb(255 255 255 / 10%), inset 10px 10px 20px rgb(0 0 0 / 50%)",
              borderRadius: "68px",
              height: "50px",
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              color: "#FFFFFF",
            }}
            fullWidth
            // className="searchBox"
            onClick={() => setDialogOpen(true)}
          >
            <InputAdornment position="start">
              <IconButton
                style={{ fontSize: "20px", padding: "0px" }}
                className="iconbtn"
              >
                <BsSearch style={{ color: "#FFFFFF", fontSize: "16px" }} />
              </IconButton>
            </InputAdornment>{" "}
            Search
          </Button>
        ) : (
          <Box>
            <TextField
              id="outlined-basic"
              type="search"
              variant="outlined"
              fullWidth
              placeholder="Search"
              className="searchBox"
              value={query}
              onChange={(event) => changeHandler(event)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <IconButton
                      style={{ fontSize: "20px", padding: "0px" }}
                      className="iconbtn"
                    >
                      <BsSearch
                        style={{ color: "#8d8d8f", fontSize: "16px" }}
                      />
                    </IconButton>{" "}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
      </Box>
      <Dialog
        maxWidth="lg"
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>Search...</DialogTitle>
        <IconButton
          className={classes.icons}
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "5px",
            right: "0",
            zIndex: "999",
          }}
        >
          <img src="images/close.png" alt="image" onClick={handleClose} />
        </IconButton>
        <DialogContent dividers>
          <Box className={classes.root} mb={3}>
            <TextField
              id="outlined-basic"
              type="search"
              // value="Search"
              variant="outlined"
              fullWidth
              placeholder="Search"
              className="searchBox"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <IconButton
                      style={{ fontSize: "20px", padding: "0px" }}
                      className="iconbtn"
                    >
                      <BsSearch
                        style={{ color: "#8d8d8f", fontSize: "16px" }}
                      />
                    </IconButton>{" "}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <FuturesComponent />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GloballySearchArea;
