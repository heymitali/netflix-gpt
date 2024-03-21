import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, USER_PROFILE_PIC } from "../utils/constants";

function Header() {
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
        <div className="flex w-1/2 justify-end">
          <div>
            <img
              className="w-14 h-14 ml-4 mt-4 mr-10 mb-0 p-1 rounded-lg "
              alt="usericon"
              src={USER_PROFILE_PIC}
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

export default Header;
