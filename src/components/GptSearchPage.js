import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { useNavigate } from "react-router-dom";

const GptSearchPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/browse");
  };

  return (
    <div className="h-screen w-screen">
      <div className="fixed -z-10">
        <img
          alt="background"
          className="h-screen w-screen object-cover"
          src="https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?w=2000&t=st=1711482254~exp=1711482854~hmac=fbb784526e908eb340cca461e3fa1b6bb097cb7020722acacbf6330d691f6bd4"
        />
      </div>
      <div>
        <div className="w-28 h-8 p-4">
          <img
            alt="logo"
            onClick={handleClick}
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=150"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="text-white font-extrabold text-4xl pt-20">
          <h1>“Navigate the movieverse with AI precision!”</h1>
        </div>

        <div className=" ">
          <GptSearchBar />
        </div>
        <div className="my-24 mx-auto">
          <GptSearchResults />
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
