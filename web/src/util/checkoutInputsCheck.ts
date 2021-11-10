const mailRegex =
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;

// Some default error checker functions
const checkWordCount = (value: string, min: number, max = min) => {
  const length = value.split(" ").length;
  if (length < min || length > max) {
    return "Invalid format.";
  }
  return null;
};

const checkLength = (value: string) => {
  if (value.length < 5) {
    return "Min. length is 5!";
  }
  return null;
};

const checkPhoneNumber = (value: string) => {
  if (
    !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
      value
    )
  ) {
    return "Invalid format.";
  }
  return null;
};

const checkEmail = (value: string) => {
  if (!mailRegex.test(value)) {
    return "Invalid format.";
  }
  return null;
};

const checkDigits = (value: string) => {
  if (!/^\+?\d+$/.test(value)) {
    return "Digits only!";
  }
  return null;
};

// Checks identifier to input value pairs based on identifier's checking rules

const checkoutInputCheck = (
  identifier: string,
  value: string,
  setError: (error: string) => void
) => {
  if (typeof value !== "string") {
    value = "";
  }

  //   Append specific test functions to identifier
  const tests: Function[] = [];

  switch (identifier) {
    case "fullname":
      tests.push(checkLength);
      tests.push((value: string) => checkWordCount(value, 2, 4));
      break;
    case "phone":
      tests.push(checkLength);
      tests.push(checkDigits);
      tests.push(checkPhoneNumber);
      break;
    case "email":
      tests.push(checkLength);
      tests.push(checkEmail);
      break;
    case "zip":
      tests.push(checkLength);
      tests.push(checkDigits);
      break;
    case "emoney":
      tests.push(checkLength);
      tests.push(checkDigits);
      break;
    case "emoney-pin":
      tests.push(checkDigits);
      break;
    default:
      tests.push(checkLength);
  }

  //   Loop through selected tests and return first that does not pass
  for (const testItem of tests) {
    const result = testItem(value);
    if (result) {
      return setError(result);
    }
  }
};

export default checkoutInputCheck;
