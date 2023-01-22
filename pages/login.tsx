import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SignInForm from "../components/forms/SignInForm.component";
import SignUpForm from "../components/forms/SignUpForm.component";

import { useAuth } from "../context/auth.context";

export default function Login(): JSX.Element {
    const { user } = useAuth();
    const router = useRouter();
    const [register, setRegister] = useState(false);

    const toggleForms = () => setRegister(!register);

    useEffect(() => {
        if (user) router.push('/');
        else router.push('login');

    }, [user])

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
