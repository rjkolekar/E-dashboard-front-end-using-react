import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    if (result) {
      navigate("/");
    }
    // window.location.replace("/");

    alert("Your account has been registered successfully");
  };

  return (
    <>
      <div className="ml-[220px] flex items-center justify-items-start ">
      <div className=" items-center justify-arround ml-12 mr-0 h-[260px] w-[450px]">
          <img className="" src="./1.webp" alt="" />
           
            </div>
        <div className="items-center justify-center">
<<<<<<< auth
          <div className="mt-16 ml-[230px]">
             <h1 className="text-4xl">User Registration</h1>
             </div>
=======
        <div className="mt-10 ml-[230px]">
            <p className="text-2xl">Welcome to E-Dashborad</p>
          </div>
>>>>>>> local
         
        

       
<<<<<<< auth
          <div className="w-full max-w-xs ml-[200px] border border-black mt-8 p-10 rounded-3xl ">
            <h2 className="font-bold text-xl ml-8">Please SignUp </h2>
=======
          <div className="w-full max-w-xs ml-[200px] border border-black mt-8 p-16 rounded-3xl ">
            <h2 className="font-bold ml-8">Create New Account</h2>
>>>>>>> local

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className=" bg-emerald-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
            text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400 mt-10"
          />

<<<<<<< auth
          <br />
=======
          
          {
            error && !email && (
              <div className="text-red-600">
                <span>Name field is required</span>
                </div>
            )
          }
>>>>>>> local
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="bg-emerald-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
          />
<<<<<<< auth
          <br />
          <br />
=======
        
          {
            error && !email && (
              <div className="text-red-600"><span>Email field is required</span></div>
            )
          }  <br />
         
>>>>>>> local
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="bg-emerald-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
          />
<<<<<<< auth
          <br />

=======
         
          {
            error && !password &&(
              <div className="text-red-600"><span>Password is required</span></div>
            )
          }
          
>>>>>>> local
          <button
            onClick={collectData}
            className="bg-emerald-500 hover:text-white px-3 py-1 rounded-lg  text-black ml-14 mt-6 "
          >
            SignUp
          </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SignUp;
