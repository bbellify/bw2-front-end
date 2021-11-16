import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
  username: Yup.string()
      .required("Please enter username")
  ,
  password: Yup.string()
    .required("Please enter password")
    .min(8, "Password must be more than 8 characters"),
});

export default loginFormSchema;