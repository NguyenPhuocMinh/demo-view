import React from 'react';
// components
import {
  GridContainer,
  GridItem,
  ImgMediaCard
} from '../../../components';
// material ui core
import { makeStyles } from '@material-ui/core';
import bg1 from '../../../assets/img/background/bg1.jpg';

import styles from '../../../assets/jss/views/home/sections/tourInCountryStyle';

const useStyles = makeStyles(styles);

const TourInCountry = () => {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Tour trong nước</h2>
        </div>
        <div id='tour-in-country'>
          <GridContainer spacing={3}>
            <GridItem xs={12} sm={5} md={5} lg={3}>
              <ImgMediaCard
                id='1'
                title='bg1'
                addressText="Du lich sinh thai bien"
                aboutDay='1 ngay'
                price={3000}
                img={bg1}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} lg={3}>
              <ImgMediaCard />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <ImgMediaCard />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <ImgMediaCard />
            </GridItem>
            <GridItem xs={12} sm={5} md={4} lg={3}>
              <ImgMediaCard />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <ImgMediaCard />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
};

export default TourInCountry;