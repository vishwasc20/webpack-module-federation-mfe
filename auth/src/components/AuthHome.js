import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Icon,
  TextField,
  Paper,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

export default function AuthHome(props) {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    loginDiv: {
      display: "flex",
      justifyContent: "center",
      padding: "2rem",
    },
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
    root: {
      padding: theme.spacing(3, 2),
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
      paddingBottom: "2rem",
    },
    textFieldFullWidth: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
      paddingBottom: "2rem",
    },
    loginBtn: {
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem'
    },
  }));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.goBack();
  };

  const classes = useStyles();

  return (
    <div className={classes.loginDiv}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          LOGIN
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            id="margin-normal"
            name="planName"
            className={classes.textFieldFullWidth}
          />
          <TextField
            label="Password"
            id="margin-normal"
            name="planName"
            type="password"
            className={classes.textFieldFullWidth}
          />
          <div className={classes.loginBtn}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              LOGIN
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
