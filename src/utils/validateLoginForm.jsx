

const validateLoginForm = (email, password) => {

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!isEmailValid) {
    return ('Email is invalid');
  }
  if (!isPasswordValid) {
    return ('Password is invalid');
  }
  return null;
}

export default validateLoginForm;