import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    // color: theme.palette.text.primary,
    background: theme.palette.background.heading,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {},
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, date) {
  return { name, calories, fat, carbs, protein, date };
}

const rows = [
  createData(
    "Head to Head",
    "If you place a Head to Head bet, all the participants who are the subject of the bet offer must start in the relevant game or competition for your bet to stand. The Dead Heat Rule(as described in the General sport Betting Rules) applies in the event of a tie."
  ),
  createData(
    "Over/Under",
    "All the participants who are the subject of the bet offer must start in the relevant game or competition for your bet to stand.The Push Rules (as described in the General sport Betting Rules) apply other than where you have the option to bet on a tie"
  ),
];

const useStyles = makeStyles({
  table: {
    marginBottom: "30px",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead
          style={
            {
              // background: "#212226",
              // boxShadow: "0px 0px 20px rgb(0 0 0 / 20%)",
            }
          }
        >
          <TableRow>
            <StyledTableCell
              style={{ borderRight: "1px solid rgb(255 255 255 / 15%)" }}
            >
              Type of Bet
            </StyledTableCell>
            <StyledTableCell align="center">Rules</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                style={{ borderRight: "1px solid rgb(255 255 255 / 15%)" }}
                component="th"
                scope="row"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell style={{ maxWidth: "300px" }}>
                {row.calories}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
