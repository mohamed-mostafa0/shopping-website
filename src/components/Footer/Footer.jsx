import React from 'react'
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter, FaTelegramPlane , FaCcVisa} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



export default function Footer() {
  return <>
  
    <footer className=' mt-20 text-white bg-black px-20 py-15 '>
          <div className='border-b-2 border-white pb-10'>
        <div className='container m-auto grid grid-cols-3 gap-20 '>
        <div className='col-span-1'>
            <h1 className='text-3xl font-bold mb-7'>Fresh Cart</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero
                , praesentium ab atque? Quidem maxime, numquam dolores</p>
                <div>
                    <div className='flex items-center gap-3 mt-4'>
                        <FaPhone/>
                        <span>+62-9841-0988-4327</span>
                    </div>
                    <div className='flex items-center gap-3 mt-4'>
                    <FaLocationDot />
                    <span>Noida, Uttar Pradesh</span>
                    </div>
                </div>  
        </div>

        <div>
            <h1 className='text-3xl font-bold mb-7'>Quick Links</h1>
            <ul className='grid grid-cols-2 gap-y-3'>
                  <li>Home</li>  
                  <li>Home</li>  
                  <li>Servies</li>  
                  <li>Services</li>  
                  <li>Contact Us</li>  
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>  
                  <li>Privacy Policy</li>  

            </ul>
        </div>


            <div>
         <h1 className='text-3xl font-bold mb-7'>Follow Us</h1>

                <div className='links flex gap-6 text-3xl'>
                    <FaFacebookF className='cursor-pointer hover:scale-110 duration-200'/>
                    <FaTwitter  className='cursor-pointer  hover:scale-110 duration-200'/>
                    <FaInstagram className='cursor-pointer  hover:scale-110 duration-200'/>
                    <FaTelegramPlane className='cursor-pointer  hover:scale-110 duration-200'/>
                </div>
                <h1 className='text-2xl font-semibold my-7'>Payment Methods</h1>
                <div>
                <div className='links flex gap-6 text-3xl'></div>
                    
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className='h-8'/>
                </div>
            
            </div>
        </div>
          </div>
       
        <p className='pt-5 text-center'>Copyright © 2024 Company Name. All rights reserved.</p>
    </footer>
  
  </>
}
