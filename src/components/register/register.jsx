import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import  axios  from "axios";
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { TbXboxX } from "react-icons/tb";




export default function Register({isSignUp , setIsSignUp}) {

    const navigate = useNavigate()

    const [submitted, setsubmitted] = useState(null)
    const [errMsg, seterrMsg] = useState(null)

    async function submit (values){
        const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
        .then(
            function(x){
                setsubmitted(true)
                seterrMsg(false)
                setIsSignUp(false)
                console.log(isSignUp);
                

                setTimeout(() => {
                    navigate('/login')
                },1000)

                
            }
        ).catch(
            function(x){
                setsubmitted(false)
                seterrMsg(x.response.data.message)             
            }
        )
    }

const registerationFormik =  useFormik({
    initialValues:{
        name:"",
        email:"",
        phone:"",
        password:"",
        rePassword:""
    },
    onSubmit:submit

    ,validationSchema:yup.object().shape({
        name:yup.string().min(3,"name must contain at least 3 characters").max(30,"name must not exceed 30 characters"),
        email:yup.string().email('please enter a valid email'),
        password:yup.string().min(6,"passowrd must be at least 6 characters"),
        phone:yup.string().matches(/^01[0125][0-9]{8}$/ , 'please write an egyption phone number'),
        rePassword:yup.string().oneOf([yup.ref('password')] , 'Confirm password must match password')


    })
})

  return <>
  

   <div className="w-1/2 flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

        <form  onSubmit={registerationFormik.handleSubmit}>

        {submitted? <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 text-center" role="alert">
       <span class="font-medium ">Account Created Successfully</span> 
        </div>: ''}

        {errMsg? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center" role="alert">
          <span class="font-medium ">{errMsg}</span> 
        </div>
        : ''}
        <div className={`flex items-center w-80 bg-gray-200 rounded-full px-4 py-3 mb-4 ${registerationFormik.errors.name && registerationFormik.touched.name ? "border-red-600 border-1":"border-gray-200 border-1" }`} >
              <FaUser className="text-gray-400 mr-3" />
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                className={`bg-transparent outline-none w-full font-medium ${registerationFormik.errors.name  && registerationFormik.touched.name? "text-red-600":"text-gray-900" }`}
                value={registerationFormik.values.name}
                onChange={registerationFormik.handleChange} 
                onBlur={registerationFormik.handleBlur}
              />
              <TbXboxX  className={`text-2xl ${registerationFormik.errors.name && registerationFormik.touched.name ? "text-red-600 visible":"hidden " }`} />

            </div>
            {registerationFormik.errors.name  && registerationFormik.touched.name? <div className=" mb-4 text-sm text-red-600  dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">{registerationFormik.errors.name}</span>
             </div> : ''}

           
            <div className="flex items-center w-80 bg-gray-200 rounded-full px-4 py-3 mb-4">
              <MdEmail className="text-gray-400 mr-3" />
              <input
                 name="email"
                id="email"
                type="email"
                placeholder="Email"
                className={`bg-transparent outline-none w-full font-medium ${registerationFormik.errors.email  && registerationFormik.touched.email? "text-red-600":"text-gray-900" }`}
                value={registerationFormik.values.email}
                onChange={registerationFormik.handleChange} 
                onBlur={registerationFormik.handleBlur}
              />
              <TbXboxX  className={`text-2xl ${registerationFormik.errors.email && registerationFormik.touched.email ? "text-red-600 visible":"hidden " }`} />
            </div>
            {registerationFormik.errors.email  && registerationFormik.touched.email? <div className=" mb-4 text-sm text-red-600  dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">{registerationFormik.errors.email}</span>
             </div> : ''}
           
            
            <div className="flex items-center w-80 bg-gray-200 rounded-full px-4 py-3 mb-4">
              <FaLock className="text-gray-400 mr-3" />
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                className={`bg-transparent outline-none w-full font-medium ${registerationFormik.errors.password  && registerationFormik.touched.password? "text-red-600":"text-gray-900" }`}
                value={registerationFormik.values.password}
                onChange={registerationFormik.handleChange} 
                onBlur={registerationFormik.handleBlur}
              />
              <TbXboxX  className={`text-2xl ${registerationFormik.errors.password && registerationFormik.touched.password ? "text-red-600 visible":"hidden " }`} />
            </div>
            {registerationFormik.errors.password  && registerationFormik.touched.password? <div className=" mb-4 text-sm text-red-600  dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">{registerationFormik.errors.password}</span>
             </div> : ''}
           
            <div className="flex items-center w-80 bg-gray-200 rounded-full px-4 py-3 mb-4">
              <FaLock className="text-gray-400 mr-3" />
              <input
                name="rePassword"
                id="rePassword"
                type="password"
                placeholder="Confirm Password"
                className={`bg-transparent outline-none w-full font-medium ${registerationFormik.errors.rePassword  && registerationFormik.touched.rePassword? "text-red-600":"text-gray-900" }`}
                value={registerationFormik.values.rePassword}
                onChange={registerationFormik.handleChange} 
                onBlur={registerationFormik.handleBlur}
              />
              <TbXboxX  className={`text-2xl ${registerationFormik.errors.rePassword && registerationFormik.touched.rePassword ? "text-red-600 visible":"hidden " }`} />
            </div>
            {registerationFormik.errors.rePassword  && registerationFormik.touched.rePassword? <div className=" mb-4 text-sm text-red-600  dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">{registerationFormik.errors.rePassword}</span>
             </div> : ''}
            
            <div className="flex items-center w-80 bg-gray-200 rounded-full px-4 py-3 mb-4">
              <FaPhoneAlt  className="text-gray-400 mr-3" />
              <input
                name="phone"
                id="phone"
                type="tel"
                placeholder="Phone"
                className={`bg-transparent outline-none w-full font-medium ${registerationFormik.errors.phone  && registerationFormik.touched.phone? "text-red-600":"text-gray-900" }`}
                value={registerationFormik.values.phone}
                onChange={registerationFormik.handleChange} 
                onBlur={registerationFormik.handleBlur}
              />
              <TbXboxX  className={`text-2xl ${registerationFormik.errors.phone && registerationFormik.touched.phone ? "text-red-600 visible":"hidden " }`} />
            </div>
            {registerationFormik.errors.phone  && registerationFormik.touched.phone? <div className=" mb-4 text-sm text-red-600  dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">{registerationFormik.errors.phone}</span>
             </div> : ''}
          <div className='w-full text-center'>
          <button className="w-40 h-12 rounded-full bg-black text-white font-semibold hover:bg-gray-800 duration-200 text-center"
              
              >
                Sign Up
              </button>
          </div>
           
        </form>
           
           
          </div>
    

    </>
}
