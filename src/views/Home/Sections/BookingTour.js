import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import People from "@material-ui/icons/People";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
// core components
import {
  GridItem,
  GridContainer,
  Button,
  Input,
  DateTime
} from '../../../components';

import styles from "../../../assets/jss/views/home/sections/bookingTourStyle";

const useStyles = makeStyles(styles);

const BookingTour = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Đặt tour</h1>
        </div>
        <div id="booking-tour">
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText="Tên tour"
                id="tour-name"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText="Họ và tên"
                id="customer-name"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText="Số điện thoại"
                id="phone-number"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText="Email"
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <DateTime
                id="from-date"
                labelText='Ngày đến'
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <DateTime
                id='to-date'
                labelText='Ngày đi'
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText="Nơi khỏi hành"
                id="from-place"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FlightTakeoffIcon />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText="Nơi đến"
                id="to-place"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FlightLandIcon />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText="Số người"
                id="people"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <Button color="info" >Đặt tour ngay</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default BookingTour;