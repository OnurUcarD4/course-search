import React from "react";
import { useDispatch } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";
import { setUserToken } from "../../../redux/slices/userSlice";

const HeaderArea = () => {
  const dispatch = useDispatch();

  return (
    <div className="mt-4 text-2xl bg-white h-24 items-center flex font-semibold drop-shadow-md">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col ml-4">
          <span className="">Course Search System</span>
          <span className="text-xs font-thin">v1.0</span>
        </div>
        <div className="mr-4  flex text-sm">
          <div className="w-16">
            <img
              className="rounded-full"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
          </div>
          <div className="font-semibold flex flex-col ml-4 mt-1">
            <span>Erokan Canbazoğlu</span>
            <span className="text-xs font-thin">Director at PHD Tech.</span>
            <button
              onClick={() => {
                dispatch(setUserToken(null));
                toast.success("Successfully logged out.", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
              className="hover:bg-red-400 duration-300 items-center flex justify-center hover:text-white hover:bg-opacity-80 text-gray-300 rounded-lg mt-2"
            >
              <HiOutlineLogout className="text-lg" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderArea;
