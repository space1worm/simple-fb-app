import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SpinnerButton from "../SpinnerButton.component";
import InputField from "./InputField.component";

import { useAuth } from "../../context/auth.context";

import { SignInSchema } from "../../lib/validation";

import { ISignInFormInputs } from "../../types/app/app.interfaces";
interface Props {
  openRegisterHandler: () => void;
}

export default function SignInForm({
  openRegisterHandler,
}: Props): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const { signin, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<ISignInFormInputs>({
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = async (data: ISignInFormInputs) => {
    setSubmitted(true);
    try {
      await signin(data.email, data.password);
      setSubmitted(false);
    } catch (e) {
      console.log(e);
      setSubmitted(false);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch {
      console.log('Something went wrong...');
    };
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in
        </h1>
        <div className="flex items-center flex-col space-y-4">
          <button
            onClick={handleGoogleSignIn}
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
                Sign in with Google
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
              register={register("email", { required: true, minLength: 6 })}
              id="email"
              type="text"
              title="Email"
              placeholder="example@example.com"
              autoComplete="true"
              errorMsg={errors.email?.message}
              isDirty={dirtyFields.email}
            />

            <InputField
              register={register("password", { required: true, minLength: 6 })}
              id="password"
              type="password"
              title="Password"
              placeholder="••••••••"
              autoComplete="true"
              errorMsg={errors.password?.message}
              isDirty={dirtyFields.password}
            />
          </div>

          <SpinnerButton spin={submitted}>
            Log In
          </SpinnerButton>

          <button
            onClick={openRegisterHandler}
            className="text-sm hover:underline font-light text-gray-500 dark:text-gray-400"
          >
            {`Don't`} have an account?
          </button>
        </form>
      </div>
    </div>
  );
}
