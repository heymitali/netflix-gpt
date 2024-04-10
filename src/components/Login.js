import React, { useRef, useState } from "react";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { LOGIN_BG } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
          updateProfile(user, { displayName: name?.current?.value })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
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
          console.log(user);
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            setErrorMessage("Invalid credentials! Try again.");
          } else {
            console.log(error.message);
          }
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
          src={LOGIN_BG}
          alt="background"
        />
      </div>

      <div className="absolute w-full flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="z-20 p-2 px-5 bg-black bg-opacity-60 text-white xl:my-6 xl:mx-auto right-0 left-0 rounded-lg h-auto w-[30rem] sm:w-[18rem] lg:w-[20rem] xl:w-[25rem] mt-28 sm:mt-20 lg:mt-28 xl:mt-24 mx-6"
        >
          <h1 className="font-bold text-xl md:text-2xl xl:text-3xl p-2 m-2 pl-0 ml-1">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="text-sm lg:text-md xl:text-md w-full p-2 my-2 xl:p-2 xl:mb-3 rounded-md bg-transparent text-white border-2 border-gray-500"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="text-sm lg:text-md xl:text-md w-full p-2 my-2 xl:w-full xl:p-2 xl:mb-3 rounded-md bg-transparent text-white border-2 border-gray-500"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="text-sm lg:text-md xl:text-md w-full p-2 my-2 xl:w-full xl:p-2 xl:mb-3 rounded-md bg-transparent text-gray-500 border-2 border-gray-500"
          ></input>
          <p className="font-bold text-red-600 py-2">{errorMessage}</p>
          <button
            className="p-2 xl:p-4 my-2 w-full font-bold text-sm xl:text-md bg-red-600 rounded-md text-center hover:brightness-50"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-gray-300 py-4 cursor-pointer hover:underline text-sm xl:text-md"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix?  Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
