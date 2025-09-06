import React from 'react'
import { motion } from "framer-motion";

export default function LandingPage() {
  return <>
  
      <div className="landing-page">
        <div className="h-screen background overflow-hidden">
        
          <motion.div initial={{opacity:0,  y:100 }} animate={{opacity:1 , y:0}} transition={{duration:1}}>
          
          <div className="lg:container p-20 m-auto h-screen flex items-center ">
            <div className="grid grid-cols-12 justify-center w-full">
              <div className="col-span-12 lg:col-span-5 text-center lg:text-left mx-auto">
              
                <h1 className="text-white text-7xl font-extrabold">Shop With Us</h1>
                <p className="text-white my-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                  assumenda ea quo cupiditate facere deleniti fuga officia.
                </p>
                <div>
                  <button className="btn1 font-bold md:mb-2 mr-2 mb-2">Shop Now</button>
                  <button className="bg-white text-black border-white border-2 hover:bg-transparent py-4 px-10 font-bold hover:text-white duration-100 cursor-pointer">
                    Club Membership
                  </button>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
         
        </div>
      </div>
    
  
  </>
}
