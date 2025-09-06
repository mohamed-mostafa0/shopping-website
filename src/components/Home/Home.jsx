import React, { useEffect, useRef } from 'react'
import GetAllProducts from '../OurProducts/OurProducts'
import Navbar from '../Navbar/Navbar'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import { motion, useAnimation, useInView } from "framer-motion";
import LandingPage from '../LandingPage/LandingPage';

export default function Home() {

  return <>

    <div className="site-wrap">
      <div className='landing-page'>
        <LandingPage/>
      </div>



    <div className='our-products mb-10'>
        <GetAllProducts/>

    </div>


  <div className='background2 '> 
    <div className='container  text-center '>
        <div className='py-25'>
        <h1 className='text-white text-3xl'>Get notified on each updates.</h1>

<input type="text"  className='border-2 border-white my-5 py-2 px-40 outline-none placeholder-gray-300 text-sm' placeholder='Enter your email address'/>
<button className='cursor-pointer px-8 py-2 border-white border-2 text-white hover:text-black hover:bg-white duration-150 font-bold text-sm'>SUBSCRIBE</button>
<p className='text-white lg:px-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
        </div>
          

      </div>
  </div>






  <div>
    <FeaturedProducts/>
  </div>
   
  </div>
  </>
}
