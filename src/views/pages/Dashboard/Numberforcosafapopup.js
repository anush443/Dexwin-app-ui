import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	PostBox: {
		"& .flex": {
			display: "flex",
			"& h6": {
				color: theme.palette.primary.main,
			},
		},
	}
}));
export default function (props) {
	const classes = useStyles();
	return (
		<Box className={classes.PostBox}>
			<Box className="flex" justifyContent="end" mt={1}>
				<Typography variant="body2" color="secondary">Q1</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="secondary">Q2</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="secondary">Q3</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="secondary">Q4</Typography>
			</Box>
			<Box display="flex" alignItems="center" mt={1}>
				<Typography variant="body2" color="primary">Q1</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="primary">Q2</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="primary">Q3</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="primary">Q4</Typography>
			</Box>
			<Box display="flex" alignItems="center" mt={1}>
				<Typography variant="body2" color="primary">Q1</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="primary">Q2</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="primary">Q3</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Typography variant="body2" color="primary">Q4</Typography>
			</Box>
		</Box >
	);
}
