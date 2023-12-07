export const nameInputValidation = {
  required: "Name is required",
  pattern: {
    value: /^[A-Z].*/,
    message: "First name should start with capital letter",
  },
};
export const phoneNameInputValidation = {
  required: "Phone number is required",
  pattern: {
    value: /^\d+$/,
    message: "Invalid phone number, only digits are allowed",
  },
  maxLength: {
    value: 20,
    message: "You have limit up to 20 symbols in your last name",
  },
};
export const emailInputValidation = {
  required: "Email is required",
  pattern: {
    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    message: "Invalid email",
  },
};
