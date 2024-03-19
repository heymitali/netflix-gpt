import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <form className="fixed z-20 w-3/12 pl-14 pr-14 pt-6 pb-6 m-8 bg-black bg-opacity-60 text-white my-36 mx-auto right-0 left-0 rounded-lg h-auto">
        <h1 className="font-bold text-3xl p-2 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 rounded-md bg-transparent text-white border-2 border-gray-500"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 my-4 rounded-md bg-transparent text-white border-2 border-gray-500"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className=" w-full p-4 my-4 rounded-md bg-transparent text-gray-500 border-2 border-gray-500"
        ></input>
        <button className=" p-5 my-4 w-full font-bold bg-red-600 rounded-md text-center">
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
