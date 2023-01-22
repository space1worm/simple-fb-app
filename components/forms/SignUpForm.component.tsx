import { useState, useRef } from "react";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import SpinnerButton from "../SpinnerButton.component";
import InputField from "./InputField.component";

import { useAuth } from "../../context/auth.context";

import { ISignUpFormInputs } from "../../types/app/app.interfaces";
import { SignUpSchema } from "../../lib/validation";


interface Props {
  openRegisterHandler: () => void;
}

export default function SignUpForm({
  openRegisterHandler,
}: Props): JSX.Element {
  const { signup, signInWithGoogle } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<ISignUpFormInputs>({
    mode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = async (data: ISignUpFormInputs) => {
    setSubmitted(true);
    try {
      await signup(data.email, data.password);
      console.log('cool');
    } catch (e) {
      console.log(e);
    }
  };

  const checkBoxRef = useRef<null | HTMLInputElement>(null);

  const handleGoogleSignUp = async () => {
    if (!checkBoxRef.current?.checked) return alert("nope");

    try {
      await signInWithGoogle();
    } catch {
      console.log('Something went wrong...');
    }
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
              type="text"
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
                {...register("terms")}
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
          <SpinnerButton spin={submitted}>
            Create an account
          </SpinnerButton>
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
