import { useState, ChangeEvent, FormEvent } from "react";

import { logIn, signInWithGooglePopup } from "../db/user";

import InputField from "./InputField"

type openRegisterHandler = () => void;

export default function SignInForm({ openRegisterHandler }: { openRegisterHandler: openRegisterHandler }) {
    const [userCreds, setUserCred] = useState({
        email: '',
        password: '',
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserCred({
            ...userCreds,
            [e.target.id]: e.target.value
        });
    }

    const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await logIn(userCreds.email, userCreds.password);
            console.log(res);
        } catch (e) {
            console.log(e)
        }
    }

    const handleGoogleSignIn = async () => {
        const resp = await signInWithGooglePopup();
        console.log(resp);
    }

    return <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
            </h1>
            <div className="flex items-center flex-col space-y-4">
                <button onClick={handleGoogleSignIn} className="group bg-gray-100 min-w-full h-12 px-6 border-2  border-none rounded-lg transition duration-300 hover:bg-black active:bg-black">
                    <div className="relative flex items-center justify-center gap-4 w-full">
                        <img className="block absolute left-0 w-5" src="https://tailus.io/sources/blocks/social/preview/images/google.svg" alt="google logo" />
                        <span className="block font-medium tracking-wide text-black text-sm transition duration-300 group-hover:text-white sm:text-base">Sign in with Google</span>
                    </div>
                </button>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
                <InputField
                    text="Email"
                    type="email"
                    placeholder="example@example.com"
                    id="email"
                    autoComplete="true"
                    required={true}
                    value={userCreds.email}
                    onChange={onChangeHandler}
                />
                <InputField
                    id="password"
                    text="Password"
                    type="password"
                    required={true}
                    placeholder="••••••••"
                    autoComplete="true"
                    value={userCreds.password}
                    onChange={onChangeHandler}
                />

                <button type="submit" className="w-full text-white  bg-gray-900 hover:bg-primary-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <button onClick={openRegisterHandler} className="text-sm hover:underline font-light text-gray-500 dark:text-gray-400">
                    Don't have an account?
                </button>
            </form>
        </div>
    </div>
}