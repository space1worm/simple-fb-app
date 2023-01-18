import { string, object, ref, boolean } from "yup";
import { YupInterface } from "../types/app/app.types";

import {
    ISignInFormInputs,
    ISignUpFormInputs,
} from "../types/app/app.interfaces";

export const SignInSchema = object<YupInterface<ISignInFormInputs>>({
    email: string()
        .email("Please provide valid Email")
        .required("E-mail is required"),
    password: string()
        .min(6, "must be minimum 6 characters")
        .required("Please Enter your password"),
});

export const SignUpSchema = object<YupInterface<ISignUpFormInputs>>({
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
