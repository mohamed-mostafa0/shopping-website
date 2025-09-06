import React, { useContext, useState } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import  axios  from "axios";
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { TbXboxX } from "react-icons/tb";
import { authContext } from '../../context/AuthContext';

export default function SignInForm() {

    const {setuserToken }= useContext(authContext)
    const navigate = useNavigate()

    const [submitted, setsubmitted] = useState(null)
    const [errMsg, seterrMsg] = useState(null)

    async function submit (values){
        const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
        .then(
            function(x){
                setsubmitted(true)
                seterrMsg(false)
                setuserToken(x.data.token)
                
                localStorage.setItem('token' ,x.data.token)
                console.log(x);
                
                setTimeout(() => {
                    navigate('/')
                },1000)

                
            }
        ).catch(
            function(x){
                setsubmitted(false)
                seterrMsg(x.response?.data?.message || x.message || "Something went wrong. Please try again."); 
                
                   
            }
        )
    }

const registerationFormik =  useFormik({
    initialValues:{
        email:"",
        password:""
    },
    onSubmit:submit

    ,validationSchema:yup.object().shape({
        email:yup.string().email('please enter a valid email'),
        password:yup.string().min(6,"passowrd must be at least 6 characters")
    })
})

  return <>
  
    <div className="w-1/2 flex flex-col items-center justify-center p-8">
                <h1 className="text-3xl font-bold mb-6">Sign In</h1>
    
            <form  onSubmit={registerationFormik.handleSubmit}>
    
            {submitted? <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 text-center" role="alert">
           <span class="font-medium ">Logged In Successfully</span> 
            </div>: ''}
    
            {errMsg? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center" role="alert">
              <span class="font-medium ">{errMsg}</span> 
            </div>
            : ''}
            
               
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
               
                
              <div className='w-full text-center'>
              <button className="w-40 h-12 rounded-full bg-black text-white font-semibold hover:bg-gray-800 duration-200 text-center"
                  
                  >
                    Sign In
                  </button>
              </div>
               
            </form>
               
               
              </div>
  
  </>
}
