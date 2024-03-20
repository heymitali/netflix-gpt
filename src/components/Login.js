import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: null,
          });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: null,
          });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/invalid-credential")
            setErrorMessage("Invalid credentials! Try again.");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="">
        <div className="absolute w-full h-full bg-black bg-opacity-55 z-10"></div>
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="fixed z-20 w-3/12 pl-14 pr-14 pt-6 pb-6 m-8 bg-black bg-opacity-60 text-white my-36 mx-auto right-0 left-0 rounded-lg h-auto"
      >
        <h1 className="font-bold text-3xl p-2 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 rounded-md bg-transparent text-white border-2 border-gray-500"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full p-4 my-4 rounded-md bg-transparent text-white border-2 border-gray-500"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" w-full p-4 my-4 rounded-md bg-transparent text-gray-500 border-2 border-gray-500"
        ></input>
        <p className="font-bold text-red-600 py-2">{errorMessage}</p>
        <button
          className=" p-5 my-4 w-full font-bold bg-red-600 rounded-md text-center"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-gray-300 py-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix?  Sign Up Now"
            : "Already regirtered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
