import React from 'react'
import { motion } from 'framer-motion'



export default function GetNotified() {


  return <>

     <div className='background2 '> 
        <div className='container  text-center '>
            <div className='py-25'>
            <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 , delay:0.1 }}
            viewport={{ once: true }}
            className='text-white text-3xl'>Get notified on each updates.</motion.h1>
    
    <motion.div 
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 , delay:0.3 }}
    viewport={{ once: true }}
    >
        <input type="text"  className='border-2 border-white my-5 py-2 px-40 outline-none placeholder-gray-300 text-sm' placeholder='Enter your email address'/>
        <button className='cursor-pointer px-8 py-2 border-white border-2 text-white hover:text-black hover:bg-white duration-150 font-bold text-sm'>SUBSCRIBE</button>
    </motion.div>
    
    <motion.p
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{ duration: 1.5 , delay:0.7 }}
    viewport={{ once: true }}
    className='text-white lg:px-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</motion.p>
            </div>
              
    
          </div>
      </div>    
  </>   
}
