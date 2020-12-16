import { makeStyles, withStyles } from "@material-ui/core/styles";
import { grey, blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import React from "react";
import IconButton from "@material-ui/core/IconButton";

// REACT ICON
import * as RIIcons from "react-icons/ri";
import * as BIIcons from "react-icons/bi";

export const ColorTest = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      background: "linear-gradient(45deg, #2471A3    30%, #2471A3    90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
    },
  }));

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      style={{ width: `${props.width}` }}
      endIcon={<BIIcons.BiAddToQueue />}
    >
      {props.text}
    </Button>
  );
};

export const ColorPrimaryButton = (props) => {
  const ButtonRef = withStyles((theme) => ({
    root: {
      background: "linear-gradient(45deg, #2471A3    30%, #2471A3    90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
    },
  }))(Button);

  return (
    <ButtonRef
      style={{ width: `${props.width}` }}
      variant="contained"
      color="primary"
      endIcon={<BIIcons.BiAddToQueue />}
    >
      {props.text}
    </ButtonRef>
  );
};

export const ColorRefreshButton = (props) => {
  const ButtonRef = withStyles((theme) => ({
    root: {
      background: "linear-gradient(45deg, #283747   30%, #283747   90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
    },
  }))(Button);

  return (
    <ButtonRef
      variant="contained"
      color="primary"
      endIcon={<RIIcons.RiRefreshLine />}
    >
      {props.text}
    </ButtonRef>
  );
};

export const ColorExcelButton = (props) => {
  const ButtonRef = withStyles((theme) => ({
    root: {
      background: "linear-gradient(45deg, #45B39D  30%, #45B39D  90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
    },
  }))(Button);

  return (
    <ButtonRef
      variant="contained"
      color="primary"
      endIcon={<RIIcons.RiFileExcel2Line />}
    >
      {props.text}
    </ButtonRef>
  );
};

export const ColorResetButton = (props) => {
  const ButtonRef = withStyles((theme) => ({
    root: {
      background: "linear-gradient(45deg, #A93226  30%, #A93226  90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
    },
  }))(Button);

  return (
    <ButtonRef
      variant="contained"
      color="primary"
      fullWidth
      endIcon={<BIIcons.BiReset />}
    >
      {props.text}
    </ButtonRef>
  );
};
