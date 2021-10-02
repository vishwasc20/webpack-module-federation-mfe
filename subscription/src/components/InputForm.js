import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import { Button, ButtonGroup, Icon, TextField, Paper, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

export function MaterialUIFormSubmit(props) {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
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
      paddingBottom: '2rem'
    },
    textFieldFullWidth: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
      paddingBottom: '2rem'
    },
    planDaysSpan: {
      fontSize: '1.2rem',
      color: 'grey',
      padding: '1rem',
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      planName: "",
      planPrice: "",
      planDescription: "",
      startDate: "",
      endDate: "",
      selectedDays: {
        'SUN': false,
        'MON': false,
        'TUE': false,
        'WED': false,
        'THU': false,
        'FRI': false,
        'SAT': false
      }
    }
  );

  const toggleDaySelection = (evt) => {
    let toggledDay = evt?.target?.innerText;
    console.log('toggle day selection - ', toggledDay);
    let selectedDays = formInput?.selectedDays;
    console.log("Current state selected days- ", selectedDays);
    selectedDays[toggledDay] = !selectedDays[toggledDay];
    setFormInput({ ["selectedDays"]: selectedDays });
  };
  
  const getSelectedDays = (daysObj) => {
    let selectedDays = [];
    Object.keys(daysObj).forEach((day) => {
      if(daysObj[day]) {
        selectedDays.push(day);
      }
    });
    return selectedDays;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let selectedDays = getSelectedDays(formInput.selectedDays);

    console.log("Form Data ", formInput);
    let newPlan = {
      name: formInput.planName,
      price: formInput.planPrice,
      description: formInput.planDescription,
      startDate: formInput.startDate,
      endDate: formInput.endDate,
      selectedDays: selectedDays,
    };
    let plans = localStorage.getItem("plans") || [];
    try {
      plans = JSON.parse(plans);
    } catch (e) {
      console.log("Err", e);
    }
    plans.push(newPlan);
    localStorage.setItem("plans", JSON.stringify(plans));

    history.push('/subscription')
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Plan Name"
            id="margin-normal"
            name="planName"
            defaultValue={formInput.planName}
            className={classes.textField}
            helperText="Enter plan name"
            onChange={handleInput}
          />
          <TextField
            label="Price"
            id="margin-normal"
            name="planPrice"
            type="number"
            defaultValue={formInput.planPrice}
            className={classes.textField}
            helperText="Enter plan price (£)"
            inputProps={{
              maxLength: 13,
              step: "0.01",
            }}
            onChange={handleInput}
          />
          <TextField
            label="Plan Description"
            id="margin-normal"
            name="planDescription"
            defaultValue={formInput.planDescription}
            className={classes.textFieldFullWidth}
            helperText="Enter plan description"
            onChange={handleInput}
            multiline
            maxRows={3}
          />
          <TextField
            id="margin-normal"
            name="startDate"
            type="date"
            defaultValue={formInput.startDate}
            className={classes.textField}
            helperText="Enter start date"
            onChange={handleInput}
          />
          <TextField
            id="margin-normal"
            name="endDate"
            type="date"
            defaultValue={formInput.endDate}
            className={classes.textField}
            helperText="Enter end date"
            onChange={handleInput}
          />
          <div>
            <span className={classes.planDaysSpan}>Plan Days: </span>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={toggleDaySelection}
                variant={formInput["selectedDays"]["SUN"] ? "contained" : ""}
              >
                SUN
              </Button>
              <Button
                onClick={toggleDaySelection}
                variant={formInput["selectedDays"]["MON"] ? "contained" : ""}
              >
                MON
              </Button>
              <Button
                onClick={toggleDaySelection}
                variant={formInput["selectedDays"]["TUE"] ? "contained" : ""}
              >
                TUE
              </Button>
              <Button
                onClick={toggleDaySelection}
                variant={formInput["selectedDays"]["WED"] ? "contained" : ""}
              >
                WED
              </Button>
              <Button
                onClick={toggleDaySelection}
                variant={formInput["selectedDays"]["THU"] ? "contained" : ""}
              >
                THU
              </Button>
              <Button
                onClick={toggleDaySelection}
                variant={formInput["selectedDays"]["FRI"] ? "contained" : ""}
              >
                FRI
              </Button>
              <Button
                onClick={toggleDaySelection}
                variant={formInput["selectedDays"]["SAT"] ? "contained" : ""}
              >
                SAT
              </Button>
            </ButtonGroup>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add Plan
          </Button>
        </form>
      </Paper>
    </div>
  );
}
