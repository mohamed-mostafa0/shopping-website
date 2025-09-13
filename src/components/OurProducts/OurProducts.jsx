import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {BounceLoader} from "react-spinners";
import { useQuery } from '@tanstack/react-query';
import { motion } from "framer-motion";
import { cartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';

export default function () {


  const {addProductToCart} = useContext(cartContext)


    function getAllProducts(){
      return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }


    const {data , error , isError , isLoading , isFetching} = useQuery({
      queryKey: 'test',
      queryFn:getAllProducts,
      gcTime: 3000
    })
    console.log(data);

    if(isLoading){
      return <div className='h-screen flex justify-center items-center '><BounceLoader color="#070708" /></div>
    }
    if(isError){
      return <div className='h-screen flex justify-center items-center '><h1 className='text-red-500'>Error: {error.message}</h1></div>
    }

    const products = data.data.data;
    

    async function handleAddToCart(id){
      
      const res =await addProductToCart(id)
      res? toast.success('Added To Cart',{duration:3000,position:'top-right'}) : toast.error('Failed To Add',{duration:3000,position:'top-right'})
      
    }


  return <>
  
  
   

    <div className="md:container mx-auto">
    <div className="my-20">
   
    <div className="mb-15">
      <p className="text-gray-400 font-light text-center">Popular Products</p>

      <h1 className="text-4xl font-extrabold text-center my-3">Our Products</h1>
      <p className="text-center text-gray-500 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
      </p>
      
      
    </div>

    {/* Products Grid */}
    <div className="container test">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
        {
          products.slice(27,33).map((product) => (
            <div 
              key={product._id}
              className=" bg-white rounded-lg text-center hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] duration-300 group overflow-hidden"
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  src={product.imageCover}
                  alt={product.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 font-semibold tracking-tight text-gray-900">
                    {product.title}
                  </h5>
                </a>
                <div className="icons flex justify-center items-center my-4">
                  <FaStar className="text-amber-500" />
                  <p className="ml-2 mr-7 text-gray-400">{product.ratingsAverage}</p>
                  <a href="#">
                    <FaHeart className="text-gray-200 hover:text-red-600 mr-2 duration-100" />
                  </a>
                  <p className="text-gray-400">{product.ratingsQuantity}</p>
                </div>
                <p className="mb-6 font-normal text-gray-700">
                  {product.description}
                </p>
                <div className="buttons">
                  <NavLink>
                    <button className="cursor-pointer px-4 text-sm py-1 font-bold bg-black text-white hover:bg-white hover:text-black border-2 border-black mr-3 duration-300"
                     onClick={()=>handleAddToCart(product._id)} >
                      CART
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
          ))}

          
          
      </div>
      <div className='pages flex justify-center items-center mt-10 w-full' >
            <Link to="/allProducts">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300 cursor-pointer">
                View More Products
              </button>
            </Link>
          </div>
    </div>
  </div>
</div>

  
  </>
}
