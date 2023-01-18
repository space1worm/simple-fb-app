import { string, object, ref, boolean } from "yup";
import { YupInterface } from "../types/app.types";

import { SignInFormInputs, SignUpFormInputs } from "../types/app.types";

export const SignInSchema = object<YupInterface<SignInFormInputs>>({
  email: string()
    .email("Please provide valid Email")
    .required("E-mail is required"),
  password: string()
    .min(6, "must be minimum 6 characters")
    .required("Please Enter your password"),
});

export const SignUpSchema = object<YupInterface<SignUpFormInputs>>({
  email: string()
    .email("Please provide valid Email")
    .required("E-mail is required"),
  password: string()
    .min(6, "must be minimum 6 characters")
    .required("Please Enter your password"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Passwords must match"
  ),
  terms: boolean().oneOf([true], "You must accept the terms and conditions"),
}).required();
