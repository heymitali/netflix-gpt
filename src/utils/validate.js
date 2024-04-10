const checkValidData = (email, password) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword = String(password).length >= 6;

  if (!isEmail) return "Email is not valid";
  if (!isPassword)
    return "Password is not valid. Please enter atleast 6 characters.";

  return null;
};
export default checkValidData;
