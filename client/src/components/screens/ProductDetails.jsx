import React, {  useEffect, useState } from "react";

// import products from "../../data/products";
import { useNavigate, useParams } from "react-router-dom";
// import { cartContext } from "../../App";



const ProductDetails = () => {
  // const {setCartDetails} = useContext(cartContext)
  
  // const [cartdetails, setCartdetails] =useState({
  //   name:""
  // })
  
  // const { setCartDetails } = useContext(CartContext);

  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  const params = useParams();
  const { id } = params;

  async function getProducts() {
    const response = await fetch(`http://localhost:5000/listings/${id}`);

    const data = await response.json();

    setDetails(data);
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  // useEffect(() => {
  //   console.log(cartdetails);
  // }, [cartdetails]);

  function onAddtoCartClick() {
    const obj = {
      title: details.title,
      price: details.price,
      image:details.images?.[0]?.url,
      stock:details.stock
      ? details.stock < 10
        ? "few in stock"
        : "in stock"
      : "oops! not in stocks"


    };

    // setCartdetails(obj);
    // setCartDetails(obj)
    // console.log(obj);
    

    navigate("/cart", { state: obj });
  }

  return (
    <>
      {/* <Header obj={cartdetails}/> */}
      <>
        {/* <div>
      {products[id].name}
    </div> */}
        <div className=" p-5 ">
          {details && (
            <section className="py-8 bg-white md:py-16 antialiased">
              <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                  <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                    <img
                      className="w-full hidden dark:block"
                      src={details.images?.[0]?.url || "fallback-image.png"}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 sm:mt-8 lg:mt-0">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-black">
                      {details.title}
                    </h1>
                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                      <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-black">
                        ₹{details.price}
                      </p>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1">
                          {/* your SVG stars here */}
                        </div>
                        <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                          ({details.ratings?.average})
                        </p>
                        <a className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-black">
                          {details.ratings?.count}
                        </a>
                        <span className="bg-green-500 p-1 rounded">
                          {details.stock
                            ? details.stock < 10
                              ? "few in stock"
                              : "in stock"
                            : "oops! not in stocks"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                      <a className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Add to favorites
                      </a>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onAddtoCartClick}
                      >
                        Add to cart
                      </button>
                    </div>

                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                    <p className="mb-6 text-black">{details.description}</p>
                    <p className="text-black">
                      Two Thunderbolt USB 4 ports and up to two USB 3 ports.
                      Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless. Color
                      matched Magic Mouse with Magic Keyboard or Magic Keyboard
                      with Touch ID.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </>

      {/*  */}
    </>
  );
};

export default ProductDetails;

// what if when i want detail in array:
//setDetails([data]); // wrap in an array

// {details.map((item, index) => (
//   <section key={index}>
//     <h1>{item.title}</h1>
//     <img src={item.images?.[0]?.url} alt={item.title} />
//     <p>{item.description}</p>
//     {/* etc... */}
//   </section>
// ))}

//
