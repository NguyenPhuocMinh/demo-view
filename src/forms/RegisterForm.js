import React from 'react';
// components
import {
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  TextField
} from '../components';
import { Formik, Form } from 'formik';
import { validateRegisterForm } from '../validates/validateForm';
import InputAdornment from "@material-ui/core/InputAdornment";
// icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Email from "@material-ui/icons/Email";

const RegisterForm = props => {
  const { handleSubmitRegister, classes } = props;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => handleSubmitRegister(values)}
      validationSchema={validateRegisterForm()}
    >
      {(formProps) => {
        const {
          dirty,
          handleSubmit,
        } = formProps;
        return (
          <Form className={classes.form} onSubmit={handleSubmit}>
            <CardHeader color="warning" className={classes.cardHeader}>
              <h4>Đăng ký</h4>
              <div className={classes.socialLine}>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={"fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={"fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={"fab fa-google-plus-g"} />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <TextField
                label="Họ"
                type="text"
                name="firstName"
                required
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <AccountCircleIcon className={classes.inputIconsColor} />
                    </InputAdornment>,
                }}
                {...formProps}
              />
              <TextField
                label="Họ"
                type="text"
                name="lastName"
                required
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <AssignmentIndIcon className={classes.inputIconsColor} />
                    </InputAdornment>,
                }}
                {...formProps}
              />
              <TextField
                label="Email"
                type="text"
                name="email"
                required
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>,
                }}
                {...formProps}
              />
              <TextField
                label="Mật khẩu"
                type="password"
                name="password"
                required
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <LockOpenIcon className={classes.inputIconsColor} />
                    </InputAdornment>,
                }}
                {...formProps}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button
                type="submit"
                disabled={!dirty}
                color="warning"
              >
                Xác nhận
              </Button>
            </CardFooter>
          </Form>
        )
      }}
    </Formik>
  )
};

export default RegisterForm;