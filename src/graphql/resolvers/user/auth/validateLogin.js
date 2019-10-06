const validateLogin = (emailAddress, password) => {
  const errors = {};

  const emailRegEx = /\S+@\S+\.\S+/;

  if (emailAddress.trim() === '') {
    errors.emailAddress = 'Email is required';
  } else if (!emailAddress.trim().match(emailRegEx)) {
    errors.emailAddress = 'Invalid Email Address';
  }

  // Password validations
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export default validateLogin;
