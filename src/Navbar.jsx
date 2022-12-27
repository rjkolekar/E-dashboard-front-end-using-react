import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  const auth = localStorage.getItem('user')

  const logout = ()=> {
    localStorage.clear()
    alert("Successfully logged out")
  }

  

  return (
    <>
      <div className=" bg-slate-900 w-64 h-screen fixed">
        <div className="py-4 px-4 text-white">
          <h1 className="text-2xl font-bold">E-Dashboard</h1>
        </div>
        <ul className="py-4 text-white">
          <li className="block px-4 py-2 font-semibold text-white hover:bg-gray-700 rounded-lg">
            <Link to="/">Products </Link>
          </li>
          <li className="block px-4 py-2 font-semibold text-white hover:bg-gray-700 rounded-lg">
            <Link to="/add">Add Products </Link>
          </li>
          <li className="block px-4 py-2 font-semibold text-white hover:bg-gray-700 rounded-lg">
            <Link to="/update">Update Product </Link>
          </li>
          
          <li className="block px-4 py-2 font-semibold text-white hover:bg-gray-700 rounded-lg">
            <Link to="/profile">Profile </Link>
          </li>
         </ul>
          {auth ?
           
            <Link onClick={logout} to="/signup"className="block px-4 py-2 font-semibold text-white hover:bg-gray-700 rounded-lg">Logout </Link>
          
          :  
            <Link  to="/signup" className="block px-4 py-2 font-semibold text-white hover:bg-gray-700 rounded-lg">SignUp </Link>
          }
          
        
      </div>
    </>
  );
};

export default Navbar;
