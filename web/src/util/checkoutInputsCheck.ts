const mailRegex =
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;

// Some default error checker functions
const checkWordCount =
  (min: number, max = min) =>
  (value: string) => {
    const length = value.split(" ").length;
    if (length < min || length > max) {
      return "Invalid format.";
    }
    return null;
  };

const checkLength =
  (min: number, max = 99) =>
  (value: string) => {
    value = value.replace(/\s+/gi, "");
    console.log(value.length);
    if (value.length < min) {
      return `Min. length is ${min}!`;
    }
    if (value.length > max) {
      return `Max. length is ${max}!`;
    }
    return null;
  };

const checkPhoneNumber = () => (value: string) => {
  if (
    !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
      value
    )
  ) {
    return "Invalid format.";
  }
  return null;
};

const checkEmail = () => (value: string) => {
  if (!mailRegex.test(value)) {
    return "Invalid format.";
  }
  return null;
};

const checkDigits = () => (value: string) => {
  value = value.replace(/\s+/gi, "");
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
      tests.push(checkLength(5));
      tests.push(checkWordCount(2, 4));
      break;
    case "phone":
      tests.push(checkLength(5));
      tests.push(checkDigits());
      tests.push(checkPhoneNumber());
      break;
    case "email":
      tests.push(checkLength(5));
      tests.push(checkEmail());
      break;
    case "zip":
      tests.push(checkLength(5, 5));
      tests.push(checkDigits());
      break;
    case "emoney":
      tests.push(checkLength(8, 8));
      tests.push(checkDigits());
      break;
    case "emoney-pin":
      tests.push(checkLength(4, 8));
      tests.push(checkDigits());
      break;
    default:
      tests.push(checkLength(5));
  }

  //   Loop through selected tests and return first that does not pass
  for (const testItem of tests) {
    const result = testItem(value);
    if (result) {
      return setError(result);
    }
  }

  return setError(""); // Clear all previous errors
};

export default checkoutInputCheck;
