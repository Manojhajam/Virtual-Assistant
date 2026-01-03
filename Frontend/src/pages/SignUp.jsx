import React, { useState } from 'react'
import bg from "../assets/auth.bg.jpg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from 'react-router-dom'
// const navigate = useNavigate(); 


const SignUp = () => {
  const [showPassword, setShoewpassword] = useState(false);
  return (
    <div
      className="w-full h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className="w-[90%] px-5 h-150 max-w-125 bg-[#0000003d] backdrop-blur shadow-lg shadow-black-950 flex flex-col items-center justify-center gap-5 ">
        <h1 className="text-white text-[30px] font-semibold mb-7.5">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>

        <input
          type="text"
          placeholder="Enter your Name"
          className="w-full h-15 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-5 py-2.5 rounded-full text-xl"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full h-15 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-5 py-2.5 rounded-full text-[18px]"
        />

        <div className="w-full h-15 border-2 border-white bg-transparent text-white rounded-full text-[18px] relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-full h-full outline-none border-white bg-transparent text-white placeholder-gray-300 px-5 py-2.5 rounded-full"
          />
          {!showPassword && (
            <IoEye
              className="absolute top-5 right-5 w-5 h-5 text-white cursor-pointer"
              onClick={() => setShoewpassword(true)}
            />
          )}

          {showPassword && (
            <IoEyeOff
              className="absolute top-5 right-5 w-5 h-5 text-white cursor-pointer"
              onClick={() => setShoewpassword(false)}
            />
          )}
        </div>

        <button className="min-w-37.5 h-15 mt-7.5 bg-white rounded-full text-black font-semibold text-[19px]">
          Sign Up
        </button>

        <p
          className="text-white text-[18px] cursor-pointer"
        >
          Already have an account ?{" "}
          <Link to={"/signin"} className='text-blue-400 font-semibold'>Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;  
