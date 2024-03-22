import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex justify-around">
      <form className="w-1/2">
        <input
          className="bg-purple-100 m-2 w-[80%] rounded-lg p-2 text-black"
          placeholder="Feeling happy, sad, thrilled? Discover movies to match."
        />
        <button className="bg-purple-500 m-2 rounded-lg w-20 p-2">Find</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
