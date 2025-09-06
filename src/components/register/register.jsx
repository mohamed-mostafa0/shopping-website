import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import  axios  from "axios";
import { useNavigate } from 'react-router-dom';



axios
export default function Register() {

    const navigate = useNavigate()

    const [submitted, setsubmitted] = useState(null)
    const [errMsg, seterrMsg] = useState(null)

    async function submit (values){
        const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
        .then(
            function(x){
                setsubmitted(true)
                seterrMsg(false)

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
        rePassword:yup.string().oneOf([yup.ref('password'),'Confirm your password'])


    })
    
})








    
  return <>
  
  
  <div className='flex justify-content-center items-center min-h-200'>
    
<form className="max-w-md mx-auto p-10 bg- rounded-3xl w-100" onSubmit={registerationFormik.handleSubmit}>

    <h1 className='mb-10 font-semibold text-4xl '>Sign Up</h1>

    {submitted? <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Account Created Successfully</span> 
</div>: ''}

{errMsg? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">{errMsg}</span> 
</div>
: ''}

    
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" value={registerationFormik.values.name} onChange={registerationFormik.handleChange} onBlur={registerationFormik.handleBlur} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    {registerationFormik.errors.name  && registerationFormik.touched.name? <div className="mt-2 p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{registerationFormik.errors.name}</span>
    </div> : ''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" value={registerationFormik.values.email} onChange={registerationFormik.handleChange} onBlur={registerationFormik.handleBlur} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email </label>
    {registerationFormik.errors.email && registerationFormik.touched.email ? <div className="mt-2 p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{registerationFormik.errors.email}</span>
    </div> :''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="tel" value={registerationFormik.values.phone}  onChange={registerationFormik.handleChange} onBlur={registerationFormik.handleBlur}  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone </label>
    {registerationFormik.errors.phone && registerationFormik.touched.phone ? <div className="mt-2 p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{registerationFormik.errors.phone}</span>
    </div> : ''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" value={registerationFormik.values.password}  onChange={registerationFormik.handleChange} onBlur={registerationFormik.handleBlur}  name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required />
    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
    {registerationFormik.errors.password && registerationFormik.touched.password ? <div className="mt-2 p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{registerationFormik.errors.password}</span>
    </div> : ''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" value={registerationFormik.values.rePassword} onChange={registerationFormik.handleChange} onBlur={registerationFormik.handleBlur} name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
    {registerationFormik.errors.rePassword && registerationFormik.touched.rePassword ? <div className="mt-2 p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{registerationFormik.errors.rePassword}</span>
    </div> : ''}
  </div>
  
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  </div>
    

    </>
}
