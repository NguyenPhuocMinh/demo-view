import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Apple from '@material-ui/icons/Apple';
// core components
import {
  Header,
  HeaderLink,
  Footer,
  GridContainer,
  GridItem,
  Card,
} from '../../components';
import RegisterForm from '../../forms/RegisterForm';

import styles from "../../assets/jss/views/login/loginPageStyle";

import image from "../../assets/img/background/bg3.jpg";

const useStyles = makeStyles(styles);

const RegisterPage = (props) => {
  const [cardAnimation, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const handleSubmitRegister = (values) => {
    console.log("XXX", values)
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Apple Travel"
        rightLinks={<HeaderLink />}
        leftLinks={<Apple />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimation]}>
                <RegisterForm
                  classes={classes}
                  handleSubmitRegister={handleSubmitRegister}
                />
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

export default RegisterPage;