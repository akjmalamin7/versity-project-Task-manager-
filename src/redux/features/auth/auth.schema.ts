import * as yup from "yup"
export const REGISTRATION_SCHEMA = yup.object().shape({
  firstName:yup.string().required("First name is required").min(3,"First name must be at least 3 characters long").max(50, "First name cannot exceed 50 characters"),
  lastName:yup.string().required("Last name is required").min(3,"First name must be at least 3 characters long").max(50, "First name cannot exceed 50 characters"),
  email:yup.string().email("Invalid email address").required("Email is required"),
  mobile:yup.string().required("Phone number is required")
  .matches(/^[0-9]+$/, "Phone number must be numeric")
  .min(11, "Phone number must be at least 10 digits"),
  photo:yup.string(),
  password:yup.string().required("Password is required").min(6,"Password must be at least 6 characters log")
})
export const LOGIN_SCHEMA = yup.object().shape({
  email:yup.string().email("Invalid email address").required("Email is required"),
  password: yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters long"),
})