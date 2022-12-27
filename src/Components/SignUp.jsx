import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    //  if(result)
    //  {
    //   navigate('/')
    //  }
    window.location.replace("/");
    
   alert('Your account has been registered successfully')
    
  };

  return (
    <>
      <div className="ml-[270px] fixed ">
        <div>
          <h1 className="text-4xl mt-16 ml-[230px]">
            User Registration
          </h1>
        </div>


        <div className="w-full max-w-xs ml-[200px] border border-slate-500 mt-8 p-10 rounded-3xl">
          <h2 className="font-bold text-xl ml-8">Please SignUp </h2>
          <br />
         

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />

          <br />
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <br />

          <button
            onClick={collectData}
            className="rounded-full bg-slate-800 px-3 py-1 mt-4 ml-16 text-white"
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
