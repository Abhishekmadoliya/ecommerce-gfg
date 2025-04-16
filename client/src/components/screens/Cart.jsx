// import React from 'react'
// import Header from '../utility components/Header'
// // import { cartContext } from '../../App'

// const Cart = () => {
//   // const {cartDetails}= useContext(cartContext);

//   return (
//     <div>

//       <h2>cart page</h2>
//       {/* <p>{cartDetails?.title}</p> */}

//     </div>
//   )
// }

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  // const [cartproducts, setCartproducts] = useState([]);
  const location = useLocation();
  const cartdetails = location.state;

  console.log(cartdetails); // { name: "Product Title" }

  // useEffect(()=>{
  //   setCartproducts(...cartproducts,cartdetails)
  // },[cartdetails])

  // console.log(cartproducts);

  return (
    <div className="flex flex-col md:flex-row justify-around gap-6 p-3 bg-gray-100 min-h-screen">
    {/* Cart Item */}
    <div className="flex gap-4  rounded-lg shadow-md p-2 bg-white w-full md:w-2/3">
      
      {/* Product Image */}
      <div className="w-[150px] h-[150px] flex-shrink-0 bg-sky-800 rounded overflow-hidden">
        <img src={cartdetails?.image} alt={cartdetails?.name} className="w-full h-full object-contain " />
      </div>
  
      {/* Product Info */}
      <div className="flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-800">Cart Item</h2>
          <p className="text-gray-700">Product: {cartdetails?.name}</p>
          <p className="text-gray-600">Price: ₹{cartdetails?.price}</p>
          <p className="text-sm text-green-700 bg-green-100 inline-block px-2 py-1 rounded">
            {cartdetails?.stock}
          </p>
        </div>
  
        <div className="mt-4 text-right text-lg font-semibold text-gray-800">
          Total: ₹{cartdetails?.price}
        </div>
      </div>
    </div>
  
    {/* Right Side Summary / Checkout */}
    <div className="w-full md:w-1/3 bg-white  rounded-lg shadow-md p-2">
      <h3 className="text-lg font-semibold mb-4">Summary</h3>
      <p className="mb-2">Subtotal: ₹{cartdetails?.price}</p>
      <p className="mb-4">Shipping: ₹0</p>
      <hr />
      <p className="mt-4 font-bold">Total: ₹{cartdetails?.price}</p>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
    </div>
  </div>
  
  );
};
export default Cart;
