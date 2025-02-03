import * as yup from "yup"
export const REGISTRATION_SCHEMA = yup.object().shape({
  firstName:yup.string().required("First name is required").min(3,"First name must be at least 3 characters long").max(50, "First name cannot exceed 50 characters"),
  lastName:yup.string().required("Last name is required").min(3,"First name must be at least 3 characters long").max(50, "First name cannot exceed 50 characters"),
  email:yup.string().email("Invalid email address").required("Email is required")
})