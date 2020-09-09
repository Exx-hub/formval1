//email
// needs to have more then 0 characters
// needs to have email format
//password
// needs to be more than 10 chars

export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S/.test(values.email)) {
    errors.email = "Email is invalid.";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 10) {
    errors.password = "Passwords needs at least 10 characters.";
  }

  return errors;
}
