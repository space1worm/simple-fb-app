import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useState, ChangeEvent, FormEvent, useRef } from "react";
import Image from "next/image";

import { signUp, signInWithGooglePopup } from "../db/user";

import InputField from "./InputField";

interface Props {
  openRegisterHandler: () => void;
}

interface FormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}
const schema = yup
  .object({
    email: yup
      .string()
      .email("Please provide valid Email")
      .required("E-mail is required"),
    password: yup
      .string()
      .min(6, "must be minimum 6 characters")
      .required("Please Enter your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default function SignUpForm({ openRegisterHandler }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormInputs>({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = async (data: FormInputs) => {
    setSubmitted(true);
    try {
      const res = await signUp(data.email, data.password);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const checkBoxRef = useRef<null | HTMLInputElement>(null);

  const handleGoogleSignUp = async () => {
    if (!checkBoxRef.current?.checked) return alert("nope");

    const resp = await signInWithGooglePopup();
    console.log(resp);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create account
        </h1>
        <div className="flex items-center flex-col space-y-4">
          <button
            onClick={handleGoogleSignUp}
            className="group bg-gray-100 min-w-full h-12 px-6 border-2  border-none rounded-lg transition duration-300 hover:bg-black active:bg-black"
          >
            <div className="relative flex items-center justify-center gap-4 w-full">
              <Image
                className="block absolute left-0 w-5"
                src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                alt="google logo"
                width={25}
                height={25}
              />
              <span className="block font-medium tracking-wide text-black text-sm transition duration-300 group-hover:text-white sm:text-base">
                Sign up with Google
              </span>
            </div>
          </button>
        </div>

        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <InputField
              id="email"
              register={register("email")}
              title="Email"
              type="email"
              placeholder="example@example.com"
              autoComplete="true"
              errorMsg={errors.email?.message}
              isDirty={dirtyFields.email}
            />
            <InputField
              id="password"
              register={register("password")}
              title="Password"
              type="password"
              placeholder="••••••••"
              autoComplete="true"
              errorMsg={errors.password?.message}
              isDirty={dirtyFields.password}
            />
            <InputField
              id="confirmPassword"
              register={register("confirmPassword")}
              title="Confirm Password"
              type="password"
              placeholder="••••••••"
              autoComplete="true"
              errorMsg={errors.confirmPassword?.message}
              isDirty={dirtyFields.confirmPassword}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                ref={checkBoxRef}
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required={true}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white  bg-gray-900 hover:bg-primary-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {submitted && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
            )}
            Create an account
          </button>
          <button
            onClick={openRegisterHandler}
            className="text-sm font-light text-gray-500 hover:underline dark:text-gray-400"
          >
            Already have an account?
          </button>
        </form>
      </div>
    </div>
  );
}
