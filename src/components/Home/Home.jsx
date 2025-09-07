import React, { useEffect, useRef } from 'react'
import GetAllProducts from '../OurProducts/OurProducts'
import Navbar from '../Navbar/Navbar'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import { motion, useAnimation, useInView } from "framer-motion";
import LandingPage from '../LandingPage/LandingPage';
import Contactus from '../contactus/Contactus';
import GetNotified from '../GetNotified/GetNotified';

export default function Home() {

  return <>

    <div className="site-wraper">
      <div id='landingPage' className='landing-page'>
        <LandingPage/>
      </div>

    <div id="ourProducts" className='our-products mb-10'>
        <GetAllProducts/>

    </div>


      <div className='get-notified'>
        <GetNotified/>
      </div>

      <div id="featuredProducts" className='featured-products '>
        <FeaturedProducts/>
      </div>


      <div  id="contactUs" className='contact-us '>
        <Contactus/>
      </div>
   
  </div>
  </>
}
