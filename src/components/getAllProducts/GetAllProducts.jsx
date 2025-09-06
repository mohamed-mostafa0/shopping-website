import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from "framer-motion";

export default function GetAllProducts() {

  const tabs  = [
    {category:'All'},
    {category:'Men\'s Fashion'},
    {category:'Women\'s Fashion'},
    {category:'Electronics'}
  ]
  const [activeTab, setactiveTab] = useState('All');
  
  function selected(tabName){ 
    setactiveTab(tabName)
  }

  function getAllProducts(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products?limit=50&page=1')
  }
  
  const {data , error , isError , isLoading } = useQuery({
      queryKey: ['products'],
      queryFn:getAllProducts,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10
    })
  
    if(isLoading){
      return <div className='h-screen flex justify-center items-center '><BounceLoader color="#070708" /></div>
    }
    if(isError){
      return <div className='h-screen flex justify-center items-center '><h1 className='text-red-500'>Error: {error.message}</h1></div>
    }

    const products = data.data?.data;

    const category = products?.filter((product) => {
      if(activeTab === 'All') return true;
      return product.category.name === activeTab;
    });
    
  return (
    <div className="md:container mx-auto">
      <div className="my-20">
        
        {/* Category Tabs */}
        <div className='flex justify-center items-center mb-15 mt-25 '>
          {tabs.map((tab , index)=>(
            <button  
              key={index}
              className={`px-4 py-2 mx-3 cursor-pointer ${activeTab === tab.category 
                ? 'bg-black text-white rounded-sm' 
                : 'text-gray-500 hover:text-black font-semibold border-b-2 border-transparent hover:border-black duration-300'}`} 
              onClick={()=>selected(tab.category)}
            >
              {tab.category}
            </button> 
          ))}
        </div>

        {/* Product Grid with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-4">
          <AnimatePresence mode="wait">
            {category?.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/productDetails/${product._id}`}>
                  <div 
                    className=" bg-white min-w-80 rounded-lg text-center hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] duration-300 group overflow-hidden"
                  >
                    <img
                      className="rounded-t-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      src={product.imageCover}
                      alt={product.title}
                    />
                    <div className="p-5">
                      <h5 className="mb-2 font-semibold tracking-tight text-gray-900">
                        {product.title}
                      </h5>
                      <div className="icons flex justify-center items-center my-4">
                        <FaStar className="text-amber-500" />
                        <p className="ml-2 mr-7 text-gray-400">{product.ratingsAverage}</p>
                        <FaHeart className="text-gray-200 hover:text-red-600 mr-2 duration-100" />
                        <p className="text-gray-400">{product.ratingsQuantity}</p>
                      </div>
                      <p className="mb-6 text-gray-700 font-bold">
                        {product.price} EGP
                      </p>
                      <div className="buttons">
                        <NavLink>
                          <button className="cursor-pointer px-4 text-sm py-1 font-bold bg-black text-white hover:bg-white hover:text-black border-2 border-black mr-3 duration-300">
                            ADD TO CART
                          </button>
                        </NavLink>
                        <Link to={`/productDetails/${product._id}`}>
                          <button className="cursor-pointer px-4 text-sm py-1 font-bold bg-white text-black hover:bg-black hover:text-white border-2 border-black duration-300">
                            VIEW
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
