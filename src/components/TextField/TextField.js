import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextFieldCustom = props => {
  const {
    label,
    name,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    type,
    required,
    InputProps
  } = props;
  return (
    <TextField
      autoFocus
      label={label}
      margin="normal"
      fullWidth
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      required={required}
      error={!!(touched[name] && errors[name])}
      helperText={touched[name] && errors[name]}
      InputProps={InputProps}
    />
  )
};

TextFieldCustom.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
}

export default TextFieldCustom;