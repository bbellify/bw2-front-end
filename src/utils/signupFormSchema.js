import * as Yup from "yup";

const signupFormSchema = Yup.object().shape({
  username: Yup.string()
      .required("Please enter username")
  ,
  password: Yup.string()
    .required("Please enter password")
    .min(8, "Password must be more than 8 characters"),
    phone: Yup.string()
    .required("Please enter a phone number")
    .min(9, "Please enter a valid phone number"),
});

export default signupFormSchema;