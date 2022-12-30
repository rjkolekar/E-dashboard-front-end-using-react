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
            .then(json=>setProducts(json));
  };

  return (
    <div className=" ml-[275px] mt-10 fixed ">
      <span className="">
        <h1 className="text-4xl font-bold text-center">Product List </h1>
      </span>
      <ul className="flex ">
        <li className="py-2 px-10 ">Sr.No</li>
        <li className="py-2 px-20 ">Name</li>
        <li className="py-2 px-20 ">Price</li>
        <li className="py-2 px-20 ">Category</li>
        <li className="py-2 px-20 ">Brand</li>
      </ul>
      {
        products.map((item,index) =>
        <ul key={item} className="flex   ">
        <li className="py-2 px-10 ">{index+1}</li>
        <li className="py-2 px-20 ">{item.name}</li>
        <li className="py-2 px-20 ">{item.price}</li>
        <li className="py-2 px-20 ">{item.category}</li>
        <li className="py-2 px-20 ">{item.brand}</li>
        </ul>
        )
      }
      

        
     
    </div>
  );
};

export default Products;

