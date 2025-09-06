// import React, { useContext, useState } from 'react'
// import {useFormik} from 'formik'
// import * as yup from 'yup'
// import  axios  from "axios";
// import { useNavigate } from 'react-router-dom';
// import { authContext } from '../../context/AuthContext';
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";




// export default function Login() {

//   const {setuserToken}=useContext(authContext)

  
  

//     const navigate = useNavigate()

//     const [submitted, setsubmitted] = useState(null)
//     const [errMsg, seterrMsg] = useState(null)

//     async function submit (values){
//         const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
//         .then(
//             function(x){
//                 setsubmitted(true)
//                 seterrMsg(false)
//                 setuserToken(x.data.token)
                
//                 localStorage.setItem('token' ,x.data.token)
                

//                 setTimeout(() => {
//                     navigate('/Home')
//                 },1000)

                
//             }
//         ).catch(
//             function(x){
//                 setsubmitted(false)
//                 seterrMsg(x.response.data.message)
                
                
//             }
//         )
        
        
        
//     }

// const registerationFormik =  useFormik({
//     initialValues:{

//         email:"",

//         password:"",

//     },
//     onSubmit:submit

//     ,validationSchema:yup.object().shape({

//         email:yup.string().email('please enter a valid email'),
//         password:yup.string().min(6,"passowrd must be at least 6 characters"),


//     })
    
// })




    
//   return <>
  
  
//   {/* <div className='flex justify-content-center items-center min-h-200'>
    
// <form className="max-w-md mx-auto p-10 bg- rounded-3xl w-100" onSubmit={registerationFormik.handleSubmit}>

//     <h1 className='mb-10 font-semibold text-4xl '>Login</h1>

//     {submitted? <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
//   <span class="font-medium">Welcome !</span> 
// </div>: ''}

// {errMsg? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//   <span class="font-medium">{errMsg}</span> 
// </div>
// : ''}

    

//   <div className="relative z-0 w-full mb-5 group">
//     <input type="email" value={registerationFormik.values.email} onChange={registerationFormik.handleChange} onBlur={registerationFormik.handleBlur} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//     <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email </label>
//     {registerationFormik.errors.email && registerationFormik.touched.email ? <div className="mt-2 p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//     <span className="font-medium">{registerationFormik.errors.email}</span>
//     </div> :''}
//   </div>

//   <div className="relative z-0 w-full mb-5 group">
//     <input type="password" value={registerationFormik.values.password}  onChange={registerationFormik.handleChange} onBlur={registerationFormik.handleBlur}  name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required />
//     <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//     {registerationFormik.errors.password && registerationFormik.touched.password ? <div className="mt-2 p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//     <span className="font-medium">{registerationFormik.errors.password}</span>
//     </div> : ''}
//   </div>

  
  
//   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// </form>

//   </div> */}


//   <div className='container relative w-full min-h-screen '>
//     <div className='forms-container absolute w-full h-full top-0 left-0 '>
//       <div className='signin-signup absolute top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-1/2 grid grid-cols-2 grid-rows-2'>
//         <div className='sign-in-form'>
//           <form action="" className='flex items-center justify-center flex-col sign-in-form col-span-1 row-span-1'>
//             <h1 className='mb-10 font-semibold text-4xl '>Sign in</h1><h1 className='mb-10 font-semibold text-4xl '>Login</h1>
//             <div className='input-field max-w-[380px] w-full h-[55px] bg-gray-200 my-[10px] rounded-[55px] grid grid-cols-12' >
      
//               <div className='col-span-2 flex items-center justify-center'>
//                 <FaUser  className='text-center text-gray-400'/>
//                 </div>
//               <input type="text" className='col-span-10 outline-0 border-0 font-semibold' placeholder='Username' />
//             </div>
//             <div className='input-field max-w-[380px] w-full h-[55px] bg-gray-200 my-[10px] rounded-[55px] grid grid-cols-12' >
      
//               <div className='col-span-2 flex items-center justify-center'>
//                 <FaLock className='text-center text-gray-400'/>
//                 </div>
//               <input type="text" className='col-span-10 outline-0 border-0 font-semibold' placeholder='password' />
//             </div>
            
//             <button className='w-[150px] h-[49px] borde-0 outline-0 rounded-[49px] cursor-pointer bg-black text-white hover:bg-gray-900 duration-100'>Login</button>  
        
//           </form>


//           <form action="" className='flex items-center justify-center flex-col sign-up-form col-span-1 row-span-1'>
//             <h1 className='mb-10 font-semibold text-4xl '>Sign up</h1>
//             <div className='input-field max-w-[380px] w-full h-[55px] bg-gray-200 my-[10px] rounded-[55px] grid grid-cols-12' >
      
//               <div className='col-span-2 flex items-center justify-center'>
//                 <FaUser   className='text-center text-gray-400'/>
//               </div>
//               <input type="text" className='col-span-10 outline-0 border-0 font-semibold' placeholder='Name' />
//             </div>
//             <div className='input-field max-w-[380px] w-full h-[55px] bg-gray-200 my-[10px] rounded-[55px] grid grid-cols-12' >
      
//               <div className='col-span-2 flex items-center justify-center'>
//                 <MdEmail  className='text-center text-gray-400'/>
//               </div>
//               <input type="email" className='col-span-10 outline-0 border-0 font-semibold' placeholder='email' />
//             </div>
//             <div className='input-field max-w-[380px] w-full h-[55px] bg-gray-200 my-[10px] rounded-[55px] grid grid-cols-12' >
      
//               <div className='col-span-2 flex items-center justify-center'>
//                 <FaLock className='text-center text-gray-400'/>
//                 </div>
//               <input type="text" className='col-span-10 outline-0 border-0 font-semibold' placeholder='Password' />
//             </div>
//             <div className='input-field max-w-[380px] w-full h-[55px] bg-gray-200 my-[10px] rounded-[55px] grid grid-cols-12' >
      
//               <div className='col-span-2 flex items-center justify-center'>
//                 <FaLock className='text-center text-gray-400'/>
//                 </div>
//               <input type="text" className='col-span-10 outline-0 border-0 font-semibold' placeholder='Confirm password' />
//             </div>
//             <div className='input-field max-w-[380px] w-full h-[55px] bg-gray-200 my-[10px] rounded-[55px] grid grid-cols-12' >
      
//               <div className='col-span-2 flex items-center justify-center'>
//                 <FaLock className='text-center text-gray-400'/>
//                 </div>
//               <input type="tel" className='col-span-10 outline-0 border-0 font-semibold' placeholder='Phone' />
//             </div>
            
//             <button className='w-[150px] h-[49px] borde-0 outline-0 rounded-[49px] cursor-pointer bg-black text-white hover:bg-gray-900 duration-100'>Sign up</button>  
        
//           </form>
        



//         </div>

//       </div>

//     </div>

//   </div>
    

//     </>
// }


"use client";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

import Register from "../register/register";
import { authContext } from "../../context/AuthContext";


export default function SlidingAuth() {
  
  const{isSignUp , setIsSignUp } =useContext(authContext)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* Wrapper */}
      <div className="relative w-[900px] h-fit min-h-[500px]  shadow-xl rounded-2xl overflow-hidden">
        
        {/* Sliding Panel */}
        <motion.div
          animate={{ x: isSignUp ? "-63%" : "12%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-[200%] h-full flex"
        >
          {/* --- Sign In Form --- */}
          <div className="w-1/2 flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>

            {/* Username */}
            <div className="flex items-center w-80 bg-gray-200 rounded-full px-4 py-3 mb-4">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent outline-none w-full font-medium"
              />
            </div>

            {/* Password */}
            <div className="flex items-center w-80 bg-gray-200 rounded-full px-4 py-3 mb-6">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full font-medium"
              />
            </div>

            <button
             className="w-40 h-12 rounded-full bg-black text-white font-semibold hover:bg-gray-800 duration-200"
    
            >
              Login

            </button>
          </div>

          {/* --- Sign Up Form --- */}
          <Register isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
        </motion.div>

       
        <motion.div
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-black text-white flex flex-col items-center justify-center p-6"
        >
          {isSignUp ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Welcome Back!</h2>
              <p className="mb-6 text-center">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsSignUp(false)}
                className="w-32 h-11 rounded-full bg-white text-black font-semibold hover:bg-gray-200 duration-200"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4">Hello, Friend!</h2>
              <p className="mb-6 text-center">
                Enter your details and start your journey with us
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="w-32 h-11 rounded-full bg-white text-black font-semibold hover:bg-gray-200 duration-200"
              >
                Sign Up
              </button>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
