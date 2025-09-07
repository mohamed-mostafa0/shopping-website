import axios from 'axios'
import React, { useEffect, useState } from 'react'
import photo from '../../assets/imgi_12_hero_2.jpg'
import { Link, NavLink } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { useQuery } from '@tanstack/react-query'

export default function FeaturedProducts() {



    const getFeaturedProducts = () => {
      return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }
    const res = useQuery({
      queryKey:['featuredProducts'],
      queryFn: getFeaturedProducts,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10
    })
    const products = res.data?.data.data

    

 
  return <>
    
    <div className='bg-gray-50 pb-10'>
    <div className='container '>
        <div className='py-20'>
                <div className='text-center mb-15'>
                    <div className='col-span-2'>   
                    <h2 className='text-gray-400 font-semibold tracking-wider '>AWSOME PRODUCTS</h2>
                    <h1 className='font-extrabold text-4xl text-gray-800 tracking-wide my-3'>Featured Products</h1>
                    <p className='text-gray-400 lg:px-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                    </div>
                  
                </div>
                {products?  <>
                
                    <div className='grid grid-cols-10 p-10 bg-white gap-x-30 mb-10 onScroll2'>
                        <div className='col-span-5'>
                            <img src={products[26].imageCover} className='object-cover h-130 w-full '  />
                        </div>
                       
                        <div className='col-span-5 '>
                            <h1 className='text-3xl font-semibold mb-5'>About This Product</h1>
                            <p className='leading-7 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum consectetur ipsam molestiae neque dolores nostrum praesentium facere, non reprehenderit maxime tempore ab expedita eos sit necessitatibus fugiat nesciunt magnam vel tempora explicabo harum obcaecati maiores distinctio? Officiis error eum expedita adipisci facilis facere tenetur, enim repellat odio magnam quia optio architecto repellendus repudiandae quaerat maiores porro, reprehenderit eaque. Exercitationem.</p>
                            <p className='mt-3 mb-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt.</p>
                            <span className='font-bold text-2xl '>Price:</span>
                            <p className='mt-3 text-2xl text-gray-500 mb-5 font-semibold'>{products[26].price} EGP</p>
                            <NavLink>
                    <button className="cursor-pointer px-4 text-sm py-1 font-bold bg-black text-white hover:bg-white hover:text-black border-2 border-black mr-3 duration-400">
                      ADD TO CART
                    </button>
                  </NavLink>
                  <Link to={`/productDetails/${products[26]._id}`}>
                    <button className="cursor-pointer px-4 text-sm py-1 font-bold bg-white text-black hover:bg-black hover:text-white border-2 border-black duration-300">
                      VIEW DETAILS
                    </button>
                    
                    
                  </Link>
            
                        </div>
                    </div>
                    <div className='grid grid-cols-10 p-10 bg-white gap-x-30'>
                        
                       
                        <div className='col-span-5 '>
                            <h1 className='text-3xl font-semibold mb-5'>About This Product</h1>
                            <p className='leading-7 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum consectetur ipsam molestiae neque dolores nostrum praesentium facere, non reprehenderit maxime tempore ab expedita eos sit necessitatibus fugiat nesciunt magnam vel tempora explicabo harum obcaecati maiores distinctio? Officiis error eum expedita adipisci facilis facere tenetur, enim repellat odio magnam quia optio architecto repellendus repudiandae quaerat maiores porro, reprehenderit eaque. Exercitationem.</p>
                            <p className='mt-3 mb-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt.</p>
                            <span className='font-bold text-2xl '>Price:</span>
                            <p className='mt-3 text-2xl font-semibold text-gray-500 mb-5'>{products[25].price} EGP</p>
                            <NavLink>
                    <button className="cursor-pointer px-4 text-sm py-1 font-bold bg-black text-white hover:bg-white hover:text-black border-2 border-black mr-3 duration-400">
                      ADD TO CART
                    </button>
                  </NavLink>
                  <Link to={`/productDetails/${products[25]._id}`}>
                    <button className="cursor-pointer px-4 text-sm py-1 font-bold bg-white text-black hover:bg-black hover:text-white border-2 border-black duration-300">
                      VIEW DETAILS
                    </button>
                  </Link>
            
                        </div>
                        <div className='col-span-5'>
                            <img src={products[25].imageCover} className='object-cover h-130 w-full '  />
                        </div>
                    </div>
                
                </> :<div className="h-screen flex justify-center items-center w-full">
            <BounceLoader color="#070708" />
          </div> }

    
                    


              <div>
              <div>   

              </div>
                    
                </div>
        </div>
          <div className='w-[600px] h-[0.7px] bg-gray-500 rounded-full m-auto '></div>
    </div>  
    </div>

   
  
  
  </>
}
