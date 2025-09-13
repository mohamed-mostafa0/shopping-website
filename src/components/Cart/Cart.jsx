import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/CartContext';
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

export default function Cart() {

    const {getUserCart , cartProducts , totalCartPrice , updateCount , deleteCartItem} = useContext(cartContext)
    const [counter, setCounter] = useState(1)


    const increaseCounter = () => {
        if (counter < 50) {
          setCounter(counter+1);
        }
      };
    
      const decreaseCounter = () => {
        if (counter > 1) {
          setCounter(counter-1);
        }
        
      };

      
  
useEffect(()=>{
   getUserCart()
    

}

,[])

function handleProductQuantity(id , newCount){
  updateCount(id , newCount)
}

function handleDeleteProduct(id){
  deleteCartItem(id)
}


  return <>
    <div className='mt-30'>
        <div className='container'>

            <div className='mb-8'>
                <h1 className='text-3xl font-bold mb-1'>Your Cart</h1>
                <p className='text-black/70 text-sm'>Total cart price: {totalCartPrice} EGP  </p>  
            </div>

            <div>
       
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                        <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                          {cartProducts ? (
                            cartProducts.length > 0 ? (
                              cartProducts.map((product) => (
                                
                                <tr
                                  key={product.product._id}
                                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                  
                                  <td className="p-4">
                                    <Link to={`/productDetails/${product.product._id}`}>
                                    <img
                                      src={product?.product?.imageCover}
                                      className="w-16 md:w-32 max-w-full max-h-full"
                                      alt="loading"
                                    />
                                    </Link>
                                    
                                  </td>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white max-w-[450px]">
                                    {product?.product?.title}
                                  </td>

                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {product.price} EGP
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="flex items-center">
                                      {/* decrease */}
                                      <button
                                        className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full"
                                        type="button"
                                        onClick={() =>
                                          handleProductQuantity(product.product._id, product.count - 1)
                                        }
                                      >
                                        <svg
                                          className="w-3 h-3"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 2"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 1h16"
                                          />
                                        </svg>
                                      </button>

                                    
                                      <div className="ms-3">
                                        <input
                                          type="number"
                                          disabled
                                          value={product.count}
                                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg block px-2.5 py-1"
                                        />
                                      </div>

                                    
                                      <button
                                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full"
                                        type="button"
                                        onClick={() =>
                                          handleProductQuantity(product.product._id, product.count + 1)
                                        }
                                      >
                                        <svg
                                          className="w-3 h-3"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 18"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 1v16M1 9h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </td>

                                  
                                  <td className="px-6 py-4">
                                    <button
                                      onClick={() => handleDeleteProduct(product.product._id)}
                                      className="font-medium text-red-600 hover:underline"
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                            
                              <tr>
                                <td colSpan="5" className="h-[60vh] text-center">
                                  <div className="flex flex-col justify-center items-center h-full text-gray-500">
                                    <p className="text-xl font-semibold mb-4">🛒 Your cart is empty</p>
                                    <a
                                      href="/allProducts"
                                      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300"
                                    >
                                      Shop Now
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            )
                          ) : (
                            
                            <tr>
                              <td colSpan="5" className="h-[60vh] text-center">
                                <div className="flex justify-center items-center h-full">
                                  <BounceLoader color="#070708" />
                                </div>
                              </td>
                            </tr>
                          )}
                </tbody>

                </table>
                </div>


            </div>

        </div>
    </div>
  
  
  </>
}
