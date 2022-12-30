import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBname] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);

  const loadProduct = async () => {
    // console.log(name, price, category, brand, file);

    if (!name || !price || !category || !brand || !file) {
      setError(true);
      return false;
    }
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userid);
    let result = await fetch("http://localhost:5000/add-products", {
      method: "post",
      body: JSON.stringify({ name, price, category, brand, file }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    alert("Product Added Successfully");
  };
  return (
    <div className="ml-[550px] items-center justify-center mt-4 fixed text-center ">
      <h2 className="text-4xl mt-6">You Can Add Product Here</h2>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
        />
        <br />
        {error && !name && (
          <div className="text-red-600 text-left">
            <span>Enter Valid Name</span>
          </div>
        )}
        <br />
        <input
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className=" bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
           text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
        />
       <br />
        {error && !price && (
          <div className="text-red-600 text-left">
            <span>Enter Valid Price</span>
          </div>
        )}
         <br />
        <input
          type="text"
          placeholder="Product Brand Name"
          value={brand}
          onChange={(e) => setBname(e.target.value)}
          className=" bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
           text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
        />
        <br />
        {error && !brand && (
          <div className="text-red-600 text-left">
            <span>Enter Valid Bran Name</span>
          </div>
        )}
         <br />
        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className=" bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
           text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
        />
        <br />
        {error && !category && (
          <div className="text-red-600 text-left">
            <span>Enter Valid Category</span>
          </div>
        )}
        <br />
        <input
          type="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
        <br />
        {error && !file && (
          <div className="text-red-600 text-left">
            <span>Upload Valid File</span>
          </div>
        )}
        <br />
        <button
          onClick={loadProduct}
          className="bg-red-800 px-1 py-1 rounded-lg text-white "
        >
          Ok Sumbit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
