import React, { useState } from "react";
import { assets } from "../../assets/assets";

interface LoginPopupProps {
  setShowLogin: (value: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup absolute z-30 w-full h-auto  grid place-content-center bg-none ">
      <form
        action=""
        className="login-popup-container  max-w-96 bg-white  flex flex-col gap-7 rounded-xl text-base p-6 justify-center  mt-24  "
      >
        <div className="login-title  flex justify-between text-center font-bold text-xl  ">
          <h2 className="signup">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className=" cursor-pointer w-4"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="  border border-gray-300 p-3 rounded-sm"
            />
          )}{" "}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="  border border-gray-300 p-3 rounded-sm"
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            className="  border border-gray-300 p-3 rounded-sm"
          />
        </div>
        <button className=" border-none p-3 rounded-md text-white bg-orange-500 font-medium cursor-pointer ">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition flex items-start gap-2 mt-3.5 font-sans">
          <input type="checkbox" required className=" mt-1" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className=" text-orange-500 font-semibold cur"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-orange-500 font-semibold cursor-pointer font-sans underline transform hover:translate-x-3 transition duration-300 ease-in-out"
            >
              Login here
            </span>
          </p>
        )}{" "}
      </form>
    </div>
  );
};

export default LoginPopup;
