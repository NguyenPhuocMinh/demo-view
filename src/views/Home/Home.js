import React from 'react';
import classNames from 'classnames';
import {
  makeStyles,
} from '@material-ui/core';
import { Apple } from '@material-ui/icons';
// core components
import {
  Header,
  HeaderLink,
  Footer,
  Parallax,
} from '../../components';
// background
import bg3 from '../../assets/img/background/bg3.jpg';
// section view components
import BookingTour from './Sections/BookingTour';
import TourInCountry from './Sections/TourInCountry';
import TourOutSide from './Sections/TourOutSide';
import FavoritePlace from './Sections/FavoritePlace';
import FavoriteNextPlace from './Sections/FavoriteNextPlace';

import styles from '../../assets/jss/views/home/homeStyle';

const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();

  return (
    <React.StrictMode>
      <div>
        <Header
          brand="Apple Travel"
          rightLinks={<HeaderLink />}
          leftLinks={<Apple />}
          fixed
          color="rose"
          changeColorOnScroll={{
            height: 400,
            color: "dark"
          }}
        />

        <Parallax image={bg3}></Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <BookingTour />
          <TourInCountry />
          <TourOutSide />
          <FavoritePlace />
          <FavoriteNextPlace />
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  )
};

export default Home;