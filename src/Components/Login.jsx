import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, SetPassword] = useState();
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  let login = async () => {
    if(!email || !password){
      setError(true)
      return false
    }

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
    console.log(result)
  };

  return (
    <>
      <div className="ml-[220px] flex items-center justify-start">
        <div className="ml-16 mr-0 h-[260px] w-[450px]">
          <img className="" src="./1.webp" alt="" />
           
            </div>
        <div className="items-center justify-center ">
<<<<<<< auth
          <div className="mt-16 ml-[230px]">
            <h1 className="text-4xl ">Login </h1>
          </div>
          <div className="w-full max-w-xs ml-[200px] border border-black mt-8 p-10 rounded-3xl">
            <h2 className="font-bold text-xl ml-8">Please Login </h2>
=======
          <div className="mt-10 ml-[230px]">
            <p className="text-2xl">Welcome to E-Dashborad</p>
          </div>
          <div className="w-full max-w-xs ml-[200px] border border-black mt-8 p-16 rounded-3xl">
            <h2 className="font-bold text-xl ml-8 text-emerald-700 ">
              Please Login{" "}
            </h2>
            
>>>>>>> local
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Email/UserName"
              className=" bg-emerald-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400 mt-10"
            />
<<<<<<< auth
             {error && !email && (
                <div className="text-red-600 text-left">
                  <span>Email field is required</span>
                </div>
              )}
            <br />
            <br />
=======
            {error && !email && (
              <div className="text-red-600 text-left">
                <span>Email field is required</span>
              </div>
            )}
            
        
>>>>>>> local
           

            <input
              value={password}
             
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className=" bg-emerald-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
            />
<<<<<<< auth
             {error && !email && (
                <div className="text-red-600 text-left">
                  <span>Password field is required </span>
                </div>
              )}
            <br />
            <br />
=======
            {error && !email && (
              <div className="text-red-600 text-left">
                <span>Password field is required </span>
              </div>
            )}
           
            
>>>>>>> local

            <button
              onClick={login}
              className="bg-emerald-500 hover:text-white px-3 py-1 rounded-lg  text-black ml-14 mt-6 "
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
