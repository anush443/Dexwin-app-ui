import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Grid,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import { KeyboardDatePicker } from "@material-ui/pickers";

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 13,
    "@media (max-width: 1533px)": {
      fontSize: 12,
    },
    "@media (max-width: 1279px)": {
      fontSize: 13,
    },
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      // background: theme.palette.background.paper,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, date, icon) {
  return { name, calories, fat, carbs, protein, date, icon };
}

const rows = [
  createData(
    "#UII1234Trsfd",
    "BUSD",
    "BOT Wars VS BOT Philipines",
    "0.021",
    " 12-08-22  01:21 PM",
    "09XD........A02A",
    "images/table_icon1.png"
  ),
  createData(
    "#UII1234Trsfd",
    "BUSD",
    "BOT Wars VS BOT Philipines",
    "0.021",
    " 12-08-22  01:21 PM",
    "09XD........A02A",
    "images/table_icon1.png"
  ),
  createData(
    "#UII1234Trsfd",
    "BUSD",
    "BOT Wars VS BOT Philipines",
    "0.021",
    " 12-08-22  01:21 PM",
    "09XD........A02A",
    "images/table_icon1.png"
  ),
  createData(
    "#UII1234Trsfd",
    "BUSD",
    "BOT Wars VS BOT Philipines",
    "0.021",
    " 12-08-22  01:21 PM",
    "09XD........A02A",
    "images/table_icon.png"
  ),
  createData(
    "#UII1234Trsfd",
    "BUSD",
    "BOT Wars VS BOT Philipines",
    "0.021",
    " 12-08-22  01:21 PM",
    "09XD........A02A",
    "images/table_icon.png"
  ),
];

const useStyles = makeStyles((theme) => ({
  TransactionBox: {
    padding: "25px 15px",

    "& h5": {
      color: theme.palette.text.white,
    },
  },
  table: {
    // minWidth: 864,
    "& .tableHead": {
      background: theme.palette.background.heading,
    },
 
  },
  heading: {
    background: theme.palette.background.heading,
    borderRadius: "100px",
    padding: "20px 30px",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tablebody: {
    boxShadow: "0px 0px 20px rgb(0 0 0 / 20%)",
  },
  inputFeild: {},
  paginationBox: {
    display: "flex",
    justifyContent: "end",
    marginTop: "15px",
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();
  const [currentvalue, setCurrentValue] = useState("All");
  const [fromData, setFromData] = useState();

  return (
    <Paper mt={4} elevation={2} className={classes.TransactionBox}>
      <Box className={classes.heading}>
        <Typography variant="h5">Transactions History</Typography>
        {/*<Box>
          <img
            src="images/pro.png"
            alt="flag"
            style={{ marginRight: "15px" }}
          />

          <img src="images/pro.png" alt="flag" />
  </Box>*/}
      </Box>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={6} lg={2}>
            <Select
              onChange={(e) => setCurrentValue(e.target.value)}
              value={currentvalue}
              label="Age"
              style={{ width: "100%" }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Mental Health">Mental Health</MenuItem>
              <MenuItem value="Menstrual Health"> Menstrual Health</MenuItem>
              <MenuItem value="Personal Safety">Personal Safety</MenuItem>
              <MenuItem value="Support Service">Support Service</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={8} md={6} lg={10}>
            <KeyboardDatePicker
              className={classes.inputFeild}
              margin="normal"
              disableFuture={true}
              InputLabelProps={{ shrink: true }}
              format="DD/MM/YYYY"
              value={fromData}
              onChange={(date) => {
                setFromData(new Date(date));
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Paper elevation={2}>
          <TableContainer>
            <Table className={classes.table} aria-label="customized table">
              <TableHead className="tableHead">
                <TableRow>
                  <StyledTableCell>Transaction ID</StyledTableCell>
                  <StyledTableCell align="left">Crypto Name</StyledTableCell>
                  <StyledTableCell align="left">
                    Tournament Name
                  </StyledTableCell>
                  <StyledTableCell align="left">Amount</StyledTableCell>
                  <StyledTableCell align="left">Date & Time</StyledTableCell>
                  <StyledTableCell align="left">From Address</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.tablebody}>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <Box className="flexjustify">
                        <img src={row.icon} alt="imag" /> &nbsp; &nbsp;
                        {row.name}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                    <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            <Box className={classes.paginationBox}>
              <Pagination count={10} shape="rounded" />
            </Box>
          </TableContainer>
        </Paper>
      </Box>
    </Paper>
  );
}
