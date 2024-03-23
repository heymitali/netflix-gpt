import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, USER_PROFILE_PIC } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptClick = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen p-2 m-2 z-20 flex justify-between ">
      <div className="flex w-1/2 justify-start">
        <img className=" m-2 w-32 h-14" src={LOGO} alt="logo"></img>
      </div>
      {user && (
        <>
          <div className="flex">
            <button
              onClick={handleGptClick}
              className="text-white w-28 h-12 m-3 p-1 font-medium text-sm bg-purple-600 rounded-lg"
            >
              {showGpt ? "Back to Home" : "GPT Search"}
            </button>
            <div className="">
              <div className="grid items-center">
                <img
                  className="w-14 h-14 m-2 rounded-lg "
                  alt="usericon"
                  src={USER_PROFILE_PIC}
                />
                <button
                  onClick={handleSignOut}
                  className="font-bold ml-4 mt-0 mr-10 mb-4 p-2 text-white bg-gray-500 bg-opacity-70 rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
