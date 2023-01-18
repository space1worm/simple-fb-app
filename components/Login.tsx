import { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function Login(): JSX.Element {
  const [register, setRegister] = useState(false);

  const toggleForms = () => setRegister(!register);

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
