import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SignInForm from "../components/forms/SignInForm.component";
import SignUpForm from "../components/forms/SignUpForm.component";

import { useAuth } from "../hooks/auth.context.hooks";

export default function Login(): JSX.Element {
    const { userAuth } = useAuth();
    const router = useRouter();
    const [register, setRegister] = useState(false);

    const toggleForms = () => setRegister(!register);

    useEffect(() => {
        if (userAuth) router.push('/');
        else router.push('login');

    }, [userAuth])

    return (
        <section
            aria-describedby="login form"
            className="bg-gray-50 dark:bg-gray-900 min-h-screen"
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {register ? (
                    <SignUpForm openRegisterHandler={toggleForms} />
                ) : (
                    <SignInForm openRegisterHandler={toggleForms} />
                )}
            </div>
        </section>
    );
}
