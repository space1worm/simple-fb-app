import { useState, FormEvent, ChangeEvent } from "react";

import InputField from "./InputField";

import { signUp, signInWithGooglePopup } from "../db/user";

export default function Login() {
    const [userCreds, setUserCred] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserCred({
            ...userCreds,
            [e.target.id]: e.target.value
        });
    }

    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userCreds.password !== userCreds.confirmPassword) return alert('nope');

        try {
            const res = await signUp(userCreds.email, userCreds.password);
            console.log(res);
        } catch (e) {
            console.log(e)
        }
    }

    const handleGoogleSignUp = async () => {
        const resp = await signInWithGooglePopup();
        console.log(resp);
    }

    return (
        <section aria-describedby="login form" className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create account
                        </h1>
                        <div className="flex items-center flex-col space-y-4">
                            <button onClick={handleGoogleSignUp} className="group bg-gray-100 min-w-full h-12 px-6 border-2  border-none rounded-lg transition duration-300 hover:bg-black active:bg-black">
                                <div className="relative flex items-center justify-center gap-4 w-full">
                                    <img className="block absolute left-0 w-5" src="https://tailus.io/sources/blocks/social/preview/images/google.svg" alt="google logo" />
                                    <span className="block font-medium tracking-wide text-black text-sm transition duration-300 group-hover:text-white sm:text-base">Sign up with Google</span>
                                </div>
                            </button>
                        </div>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
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
                            <InputField
                                id="confirmPassword"
                                text="Confirm Password"
                                type="password"
                                placeholder="••••••••"
                                required={true}
                                autoComplete="true"
                                value={userCreds.confirmPassword}
                                onChange={onChangeHandler}
                            />
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-gray-900 hover:bg-primary-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}