import {
  nameInputValidation,
  phoneNameInputValidation,
  emailInputValidation,
} from "./validation";

export const inputFields = [
  { name: "name", validation: nameInputValidation, placeholder: "Name" },
  {
    name: "phone",
    validation: phoneNameInputValidation,
    placeholder: "Phone number",
  },
  { name: "email", validation: emailInputValidation, placeholder: "Email" },
];
