import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignup } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [signupForm, setSignupForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef("");
  const password = useRef("");
  const name = useRef("");

  const toggleSignupForm = () => {
    setSignupForm(!signupForm);
  };

  const onButtonClick = async () => {
    let signupValidateResult = validateSignup(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setErrorMessage(signupValidateResult);

    if (!signupValidateResult && signupForm) {
      // Signup
      try {
        let signupResult = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = signupResult.user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      }
    } else if (!signupValidateResult && !signupForm) {
      // Login
      try {
        let signinResult =await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = signinResult.user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute p-10 bg-black opacity-90 w-3/12 my-40 mx-auto text-white right-0 left-0 rounded-lg"
      >
        <h1 className="font-bold text-4xl py-4">
          {signupForm ? "Sign Up" : "Sign In"}
        </h1>
        {!signupForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-600"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-2 w-full bg-gray-600"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-600"
          ref={password}
        />
        <p className="text-red-400 font-semibold text-lg py-2">
          {errorMessage}
        </p>
        <button
          onClick={onButtonClick}
          className="p-4 my-4 bg-red-700 w-full text-2xl font-bold"
        >
          {signupForm ? "Sign Up" : "Sign In"}
        </button>
        <p
          onClick={toggleSignupForm}
          className="py-4 cursor-pointer hover:text-gray-400"
        >
          {signupForm
            ? "New to NetflixGPT? Signup now"
            : "Already a Member? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
