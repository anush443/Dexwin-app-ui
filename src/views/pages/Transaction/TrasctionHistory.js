import React, { useState } from "react";
import { Typography, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TransctionTable from "./TransctionTable";
import { KeyboardDatePicker } from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
  PostBox1: {
    height: "100vh",
    marginBottom: "15px",
    padding: "10px 20px",
    background: theme.palette.background.paper,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    borderRadius: "30px",
    "& .subbox": {
      marginTop: "10px",
      background: theme.palette.background.tablehead,
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      borderRadius: "30px",
    },
    "& .subchild": {
      "& .paddingsec": {
        padding: "17px 21px 20px",
        display: "flex",
        alignItems: "center",
        "& h3": {
          fontSize: "18px",
          color: theme.palette.text.primary,
        },
      },
    },
    "& button": {
      marginBottom: "0px !important",
    },
  },
  formControl: {
    margin: theme.spacing(5),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  MainBox: {
    display: "flex",
    alignItems: "center",
  },
  inputFeild: {
    "& input": {
      borderRadius: "0px",
      paddingLeft: "10px",
      background: "transparent",
    },
  },
  mainPaper: {
    background: theme.palette.background.paper,

    boxShadow: " 0px 0px 20px rgba(0, 0, 0, 0.5)",
  },
  selectbox: {
    backgroundColor: "transparent",
    borderRadius: "4px !important",
    border: "1px solid #787878",
    boxShadow: "none",
    "& svg": {
      color: theme.palette.text.primary,
    },
  },
}));
export default function (props) {
  const classes = useStyles();
  const [toData, setToData] = useState();

  const [select, setSelect] = useState("Withdraw");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <Paper className={classes.mainPaper}>
      <Box className={classes.PostBox1}>
        <Box className="subbox">
          <Box className="subchild">
            <Box className="child">
              <Box className="baby"></Box>
            </Box>
            <Box className="paddingsec">
              <Box>
                <Typography variant="h3">Trasactions History</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.MainBox} mt={2}>
          <FormControl>
            <Select
              className={classes.selectbox}
              variant="outlined"
              size="small"
              fullWidth
              name="weather"
              value={select}
              onChange={handleChange}
              style={{ height: "46px" }}
            >
              <MenuItem value={"Withdraw"}>Deposit</MenuItem>
              <MenuItem value={"Cloudy"}>Cloudy</MenuItem>
              <MenuItem value={"Rainy"}>Rainy</MenuItem>
            </Select>
          </FormControl>

          <Box>
            <KeyboardDatePicker
              style={{ marginLeft: "8px", height: "46px" }}
              className={classes.selectbox}
              margin="normal"
              id="date-picker-dialog"
              format="YYYY-MM-DD HH:mm"
              disableFuture
              value={toData}
              onChange={(date) => setToData(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Box>
        </Box>
        <Box mt={4}>
          <TransctionTable />
        </Box>
      </Box>
    </Paper>
  );
}
