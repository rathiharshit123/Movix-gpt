import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, logoutUser } from "../utils/redux/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/redux/gptSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleOnClick = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            //Error page
            console.log(error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid, email, displayName }));
                navigate("/browse");
            } else {
                dispatch(logoutUser());
                navigate("/");
            }
        });

        return () => unsubscribe;
    }, []);

    const gptSearchToggleButton = () => {
        dispatch(toggleGptSearch());
    };

    return (
        <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src={LOGO} alt="Logo" className="w-40" />
            <div>
                {user && (
                    <div>
                        <button onClick={gptSearchToggleButton} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Search Using GPT
                            </span>
                        </button>

                        <button
                            onClick={handleOnClick}
                            type="button"
                            className="m-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
