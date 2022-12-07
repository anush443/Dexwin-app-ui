import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  FormGroup,
  FormControlLabel,
  Box,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  mainbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    border: "1px solid #f1f1f1",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },

    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    background: "#39AED0",
    border: "1px solid #39AED0",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      background: "#39AED0",
    },
  },
});
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

function CosafaFilterComponent(props) {
  const { type, getCheckBox, setCheckBoxData } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setTimeout(() => {
      setCheckBoxData(state);
      getCheckBox();
    }, 500);
  };

  const clickA = () => {
    state.checkedA = !state.checkedA;
    setCheckBoxData(state);
    getCheckBox();
  };

  const clickB = () => {
    state.checkedB = !state.checkedB;
    setCheckBoxData(state);
    getCheckBox();
  };

  const clickF = () => {
    state.checkedF = !state.checkedF;
    setCheckBoxData(state);
    getCheckBox();
  };

  const clickG = () => {
    state.checkedG = !state.checkedG;
    setCheckBoxData(state);
    getCheckBox();
  };

  return (
    <>
      <Box className={classes.mainbox}>
        <FormGroup row>
          <FormControlLabel
            control={
              <StyledCheckbox
                checked={state.checkedA}
                onClick={clickA}
                name="checkedA"
              />
            }
            label="Q1"
            className="paddingsec"
          />
          <FormControlLabel
            control={
              <StyledCheckbox
                checked={state.checkedB}
                onClick={clickB}
                name="checkedB"
              />
            }
            label="Q2"
            className="paddingsec"
          />
          <FormControlLabel
            control={
              <StyledCheckbox
                checked={state.checkedF}
                onClick={clickF}
                name="checkedF"
              />
            }
            label="Q3"
            className="paddingsec"
          />
          <FormControlLabel
            control={
              <StyledCheckbox
                checked={state.checkedG}
                onClick={clickG}
                name="checkedG"
              />
            }
            label="Q4"
          />
        </FormGroup>
      </Box>
    </>
  );
}

export default CosafaFilterComponent;
