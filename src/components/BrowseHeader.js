import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

function BrowseHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div className="absolute w-screen p-2 m-2 z-20 flex justify-between ">
      <div className="flex w-1/2 justify-start">
        <img
          className=" m-2 w-32 h-14"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        ></img>
      </div>
      {user && (
        <div className="flex w-1/2 justify-end">
          <div>
            <img
              className="w-14 h-14 ml-4 mt-4 mr-10 mb-0 p-1 rounded-lg "
              alt="usericon"
              src="https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRH7L1z339SB5FvV78__fxkoivAD8xiqCgV3nkQtvWnGpEfaj6cFusLqDv88jdJTAsJOGu9TgwZbUB9ZkdtuOUMCb3I3P-8.png?r=f6f"
            />
            <button
              onClick={handleSignOut}
              className="font-bold ml-4 mt-0 mr-10 mb-4 p-1"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrowseHeader;
