// Checks identifier to input value pairs based on identifier's checking rules

const checkoutInputCheck = (
  identifier: string,
  value: string,
  setError: (error: string) => void
) => {
  if (typeof value !== "string") {
    value = "";
  }

  // Some default error checker functions
  const checkLength = () => {
    if (value.length < 5) {
      return setError("Min. length is 5!");
    }
  };

  switch (identifier) {
    case "fullname":
      if (value.split(" ").length < 2) {
        return setError("Enter full name!");
      }
      return checkLength();
    default:
      return checkLength();
  }
};

export default checkoutInputCheck;
