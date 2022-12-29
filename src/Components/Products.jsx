import React, { useState, useEffect } from "react";

const Products = () => {
 const [product, setProduct] = useState()
  
   
   useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(json => console.log((json)))
     
   }, []);
 
  return (
    <div className="ml-[270px] text-4xl">
      <h2>Products Page</h2>
    </div>
  );
};

export default Products;
