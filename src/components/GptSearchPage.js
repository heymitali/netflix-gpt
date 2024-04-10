import React from "react";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";

const GptSearchPage = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="fixed -z-10">
        <div className="absolute w-full h-full bg-black bg-opacity-40 z-10"></div>
        <img
          alt="background"
          className="h-screen w-screen object-cover"
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="w-screen">
        <div className="text-white font-extrabold text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-center w-full pt-[10rem] lg:pt-[14rem] 2xl:pt-[16rem] mb-6">
          <span>Navigate the movieverse with AI precision!</span>
        </div>

        <GptSearchBar />
        <GptSearchResults />
      </div>
    </div>
  );
};

export default GptSearchPage;
