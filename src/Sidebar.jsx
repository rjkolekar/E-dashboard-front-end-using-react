import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    alert("Successfully logged out");
    navigate("/signup");
  };

  return (
    <>
      <div className=" bg-red-900 w-[270px] h-screen fixed">
        <div className="py-4 px-4 text-white">
          <h1 className="text-2xl font-bold  hover:text-violet-900 text-white">
            E-Dashboard
          </h1>
        </div>
        
        {
          auth ? 
          <ul className="py-4 text-white">
          <li className="block px-4 py-2 font-semibold hover:bg-red-400 hover:text-violet-900 rounded-lg">
            <Link to="/">Products </Link>
          </li>
          <li className="block px-4 py-2 font-semibold text-white hover:bg-red-400 hover:text-violet-900 rounded-lg">
            <Link to="/add">Add Products </Link>
          </li>
          <li className="block px-4 py-2 font-semibold text-white hover:bg-red-400 hover:text-violet-900 rounded-lg">
            <Link to="/update">Update Product </Link>
          </li>

          <li className="block px-4 py-2 font-semibold text-white hover:bg-red-400 hover:text-violet-900 rounded-lg">
            <Link to="/profile">Profile </Link>
          </li>
        
        <Link
            onClick={logout}
            to="signup"
            className="block px-4 py-2 font-semibold text-white hover:bg-red-400 hover:text-violet-900 rounded-lg"
          >
            Logout({JSON.parse(auth).name})
          </Link>
          </ul>
        : <ul>
        <Link
              to="/login"
              className="block px-4 py-2 font-semibold text-white hover:bg-red-400 hover:text-violet-900 rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 font-semibold text-white hover:bg-red-400 hover:text-violet-900 rounded-lg"
            >
              SignUp
            </Link>
         </ul>
}



        
      </div>
    </>
  );
};

export default Navbar;
