import User from '../../../../models/user';

const validateSignup = (username, emailAddress, password, confirmPassword) => {
  const errors = {};

  // Username validations
  if (username.trim() === '') {
    errors.username = 'Username is required';
  } else if (username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  } else if (username.trim().length > 10) {
    errors.username = 'Username should be less than 10 character';
  } else {
    // Letters, numbers and underscore
    const regEx = /^[\w-_.]*$/;
    if (!username.trim().match(regEx)) {
      errors.username = 'Invalid username';
    } else {
      // Make sure username doesn't exist
      const userUsername = User.findOne({ username });
      if (userUsername) {
        errors.username = 'This username is taken';
      }
    }
  }

  // Phone number validations
  if (emailAddress.trim() === '') {
    errors.emailAddress = 'Email is required';
  } else {
    const emailRegEx = /\S+@\S+\.\S+/;
    if (!emailAddress.trim().match(emailRegEx)) {
      errors.emailAddress = 'Invalid Email Address';
    } else {
      // Make sure email doesn't exist
      const userEmail = User.findOne({ 'email.emailAddress': emailAddress });
      if (userEmail) {
        errors.emailAddress = 'Email already exists';
      }
    }
  }

  // Password validations
  if (password.trim() === '') {
    errors.password = 'Password is required';
  } else if (password.trim().length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  } else if (password.trim().length > 15) {
    errors.password = 'Password should be less than 15 character';
  }

  // Confirm password
  if (confirmPassword.trim() === '') {
    errors.confirmPassword = 'Retype your password';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export default validateSignup;
