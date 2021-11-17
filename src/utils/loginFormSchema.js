import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
  username: Yup.string()
      .required("Please enter username")
  ,
  password: Yup.string()
    .required("Please enter password")
    .min(6, "Password must be more than 6 characters"),
});

export default loginFormSchema;