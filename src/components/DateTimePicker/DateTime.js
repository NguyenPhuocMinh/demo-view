import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  LocalizationProvider,
  DateTimePicker
} from '@material-ui/pickers';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  TextField
} from '@material-ui/core';
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import vi from 'date-fns/locale/vi';

import styles from '../../assets/jss/components/dateTimeStyle';

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        margin: "0 0 17px 0",
        paddingTop: "27px",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
          color: "#495057"
        },
      },
    },
    MuiInputBase: {
      input: {
        color: "#495057",
        height: "unset",
        "&,&::placeholder": {
          fontSize: "14px",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: "400",
          lineHeight: "1.42857",
          opacity: "1"
        },
        "&::placeholder": {
          color: "#AAAAAA"
        }
      },
    },
    MuiInput: {
      formControl: {
        marginTop: '0px !important'
      },
      underline: {
        "&:hover:not($disabled):before,&:before": {
          borderColor: "#D2D2D2 !important",
          borderWidth: "1px !important"
        },
        "&:after": {
          borderColor: '#9c27b0 !important',
        }
      }
    }
  }
});

const DateTime = (props) => {
  const {
    id,
    labelText,
    formControlProps,
  } = props;

  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(null);

  return (
    <LocalizationProvider locale={vi} dateAdapter={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <DateTimePicker
          key={id}
          renderInput={(props) => {
            return (
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                  }
                }}
                variant="standard"
                {...formControlProps}
                {...props}
              />
            )
          }}
          label={labelText}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </ThemeProvider>
    </LocalizationProvider>
  )
};

DateTime.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.node,
  formControlProps: PropTypes.object,
}

export default DateTime;