import React, { useEffect, useState } from "react";
import axios from "axios";
// import Product from "../Pages/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    fetch('http://localhost:5000/products')
            .then(res=>res.json())
            .then(json=>console.log(json));
  };

  return (
    <div className="container mx-auto mt-10 fixed">
      <span className="">
        <h1 className="text-4xl font-bold text-center">Shop Now </h1>
      </span>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {products.map((item) => (
          <div key={item._id} className=" p-[20px] bg-white items-center text-center border border-red-100">
            {/* <img src={item.image} alt="" className="h-[160px] ml-6" /> */}
            <h5 className="h-[110px] font-semibold">{item.name}</h5>
            <h5 >Rs.{item.price}</h5>
            <button className="border border-spacing-1 rounded-md px-2 bg-red-700 text-white">AddTCart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

