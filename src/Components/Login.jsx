import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, SetPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  let login = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please Enter Correct Details");
    }
    // console.log(result)
  };

  return (
    <>
      <div className="ml-[220px] flex items-center justify-items-start ">
        <div className=" items-center justify-arround ml-12 mr-0 h-[260px] w-[480px]">
          <img className="" src="./1.webp" alt="" />
           
            </div>
        <div className="items-center justify-center ">
          <div className="mt-16 ml-[230px]">
            <h1 className="text-4xl ">Login </h1>
          </div>
          <div className="w-full max-w-xs ml-[200px] border border-red-400 mt-8 p-10 rounded-3xl bg-gray-200">
            <h2 className="font-bold text-xl ml-8">Please Login </h2>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
              placeholder="Enter Email/UserName"
              className="mt-16 bg-slate-200 appearance-none border-2 border-gray-200 
      rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
            />
            <br />
            <br />

            <input
              value={password}
              required
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
        text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
            />
            <br />
            <br />

            <button
              onClick={login}
              className="rounded-lg hover:bg-red-400 hover:text-violet-900 bg-red-900
       font-semibold px-3 py-1 mt-4 ml-16 text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
