import React from "react";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="">
      <div>
        <img
          alt="background"
          className="object-cover w-screen h-screen -z-30"
          src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
