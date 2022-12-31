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
      <div className=" bg-emerald-100 w-[270px] h-screen text-black fixed">
        <div className="py-4 px-4 text-black">
          <div>
          <h1 className="text-2xl font-bold  hover:text-violet-900 text-black">
            E-Dashboard
          </h1>
          </div>
        </div>
        
        {
          auth ? 
          <ul className="py-4 text-black">
          <li className="block px-4 py-2 font-semibold hover:bg-green-200 hover:text-white rounded-lg ">
            <Link to="/">Products </Link>
          </li>
<<<<<<< auth
          <li className="block px-4 py-2 font-semibold text-black hover:bg-green-200 hover:text-violet-900 rounded-lg">
            <Link to="/add">Add Products </Link>
          </li>
          <li className="block px-4 py-2 font-semibold text-black hover:bg-green-200 hover:text-violet-900 rounded-lg">
            <Link to="/update">Update Product </Link>
          </li>

          <li className="block px-4 py-2 font-semibold text-black hover:bg-green-200 hover:text-violet-900 rounded-lg">
=======
          <li className="block px-4 py-2 font-semibold text-black hover:bg-emerald-500 hover:text-white rounded-lg">
            <Link to="/add">Add Products </Link>
          </li>
          <li className="block px-4 py-2 font-semibold text-black hover:bg-emerald-500 hover:text-white rounded-lg">
            <Link to="/update">Update Product </Link>
          </li>

          <li className="block px-4 py-2 font-semibold text-black hover:bg-emerald-500 hover:text-white rounded-lg">
>>>>>>> local
            <Link to="/profile">Profile </Link>
          </li>
        
        <Link
            onClick={logout}
            to="signup"
<<<<<<< auth
            className="block px-4 py-2 font-semibold text-black hover:bg-green-200 hover:text-violet-900 rounded-lg"
=======
            className="block px-4 py-2 font-semibold text-black hover:bg-emerald-500 hover:text-white rounded-lg"
>>>>>>> local
          >
            Logout({JSON.parse(auth).name})
          </Link>
          </ul>
        : <ul>
        <Link
              to="/login"
<<<<<<< auth
              className="block px-4 py-2 font-semibold text-black hover:bg-green-200 hover:text-violet-900 rounded-lg"
=======
              className="block px-4 py-2 font-semibold text-black hover:bg-emerald-500 hover:text-white rounded-lg"
>>>>>>> local
            >
              Login
            </Link>
            <Link
              to="/signup"
<<<<<<< auth
              className="block px-4 py-2 font-semibold text-black hover:bg-green-200 hover:text-violet-900 rounded-lg"
=======
              className="   block px-4 py-2 font-semibold text-black hover:bg-emerald-500 hover:text-white rounded-lg"
>>>>>>> local
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
