import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";

const GptSearchPage = () => {
  return (
    <div className="h-screen w-screen">
      <div className="fixed -z-10">
        <img
          alt="background"
          className="h-screen w-screen object-cover"
          src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className=" ">
        <GptSearchBar />
      </div>
      <div className="my-24 mx-auto">
        <GptSearchResults />
      </div>
    </div>
  );
};

export default GptSearchPage;
