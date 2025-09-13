import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from 'react-icons/fa';
import { RiDiscountPercentFill } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { cartContext } from '../../context/CartContext';
import toast from "react-hot-toast";



export default function ProductDetails() {

  const {addProductToCart } = useContext(cartContext)
  const [productDetails, setproductDetails] = useState(null)
  const [activeTab, setactiveTab] = useState("S")
  const [active, setactive] = useState(false)
  const [counter, setCounter] = useState(1)

  const {id} = useParams()

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000
    


  };
  const tabs = [
    {name:"S"},
    {name:"M"},
    {name:"L"},
    {name:"XL"}
  ]




    function heartActive(){
      active? setactive(false):setactive(true)
    }

    function selected(tabName){
      setactiveTab(tabName)
    }

     async function getProductDetails(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then((res)=>{
             
            setproductDetails(res.data.data)
            


        }).catch((error)=>{
          console.log(error);
          
        })

    }

  useEffect(()=>{
      getProductDetails()
  },[])


  const increaseCounter = () => {
    if (counter < 50) {
      setCounter(counter+1);
    
    }
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter-1);
    }
  }

  async function handleAddToCart(){
    const res =  await addProductToCart(id)

    res? toast.success('Added To Cart',{duration:3000,position:'top-right'}) : toast.error('Failed To Add',{duration:3000,position:'top-right'})
    
    
  }

  return <>
  
  
  

  {productDetails? 
  <div className='lg:px-70 md:px-20 p-10 mx-auto '>
  <div className='md:grid md:grid-cols-12 flex flex-col pt-20'>
      <div className='md:col-span-4  '>
        
   <Slider {...settings}>
      {productDetails.images.map((image)=> <>
        
        <img src={image} alt="" className='rounded-3xl  lg:h-150 object-cover' />
        
      </>)}
      
    </Slider>



      </div>
        
      <div className='col-span-1'>

      </div>
      <div className='md:col-span-7 '>
          <p className='font-semibold text-gray-500 '>{productDetails.category.name}</p>
          <h1 className='text-2xl font-bold my-2'>{productDetails.title}</h1>
          <p  className='font-semibold text-3xl mt-7'>{productDetails.price} EGP</p>

          
          
                <div className='mb-10'>
                  <h3 className='text-sm text-gray-800 font-semibold my-10'>Select size</h3>
                  <ul className="hidden text-sm font-medium text-center rounded-lg sm:flex dark:divide-gray-700 dark:text-gray-400">
                    {tabs.map((tab)=>{ return <>
                      <li className="w-full focus-within:z-10">
                        <button  className={`px-15 py-5 rounded-full cursor-pointer  ${activeTab === tab.name? 'bg-black text-white ':'bg-gray-200 text-gray-700' } `} onClick={() => selected(tab.name)}>{tab.name}</button>
                       </li></>
                       
                    })}
                  </ul>
                </div>
                  <div className='grid grid-cols-12 items-center text-center gap-2 mb-5'>
                    <div className='col-span-3'>
                       
                        <form class="flex items-center flex-col mb-6 "> 
                            <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                            <div class="relative flex items-center max-w-[8rem]">
                                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none "
                                 onClick={()=> {decreaseCounter()}}>
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " disabled placeholder="999" value={counter} required  />
                                
                                <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                 onClick={()=> {increaseCounter()}}>
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            
                        </form>

                    </div>
                    <a className='bg-black text-white w-full py-4 rounded-full col-span-7 cursor-pointer hover:bg-gray-200 hover:text-black duration-200' onClick={handleAddToCart}>Add To Cart</a>
                    <button className='col-span-2 '  onClick={heartActive}><FaHeart className={` text-2xl ml-5 cursor-pointer hover:text-red-600 duration-200 ${active? 'text-red-600':'text-gray-200 '}`}  /></button>
                    
                  </div>

                    <div className=' border-1 border-gray-200 rounded-3xl  px-5 py-2 mb-3'>

                      <h2 className='font-semibold mb-3'>Description & Fit</h2>
                      <p className='text-gray-600 lowercase'>{productDetails.description}</p>
                    </div>
                    <div className=' border-1 border-gray-200 rounded-3xl  px-5 py-2 '>

                      <h2 className='font-semibold mb-3 '>Shipping</h2>
                      <div className='grid grid-cols-2 gap-y-10'>
                          <div className='col-span-1 flex items-center'> 
                          <p className='p-2 bg-gray-100 text-2xl mr-2 rounded-full'><RiDiscountPercentFill /></p> 
                            <div className=''>
                                <h2 className='font-semibold text-gray-400 text-sm'>Discount</h2>
                                <p className='font-semibold'>Disc 50%</p>
                            </div>
                          </div>
                          <div className='col-span-1 flex items-center'> 
                          <p className='p-2 bg-gray-100 text-2xl mr-2 rounded-full'><GoPackage /></p> 
                            <div className=''>
                                <h2 className='font-semibold text-gray-400 text-sm'>Package</h2>
                                <p className='font-semibold'>Regular Package</p>
                            </div>
                          </div>
                          <div className='col-span-1 flex items-center'> 
                          <p className='p-2 bg-gray-100 text-2xl mr-2 rounded-full'><FaTruckFast /></p> 
                            <div className=''>
                                <h2 className='font-semibold text-gray-400 text-sm'>Delivery Time</h2>
                                <p className='font-semibold'>3-4 Working Days</p>
                            </div>
                          </div>
                          <div className='col-span-1 flex items-center'> 
                          <p className='p-2 bg-gray-100 text-2xl mr-2 rounded-full'><FaLocationDot /></p> 
                            <div className=''>
                                <h2 className='font-semibold text-gray-400 text-sm'>Estimtion Arrive</h2>
                                <p className='font-semibold'>10-12 October 2025</p>
                            </div>
                          </div>
                      </div>
                      
                    </div>

          

      </div>
  </div>


    <div className='my-10'>
            <h1 className='text-2xl font-semibold'>Ratings & Reviews</h1>
    <div className='mt-5 grid grid-cols-12 items-center '>
      

      <div className='col-span-5'>
            <div className='lg:grid lg:grid-cols-12 '>
                <div className='flex items-center lg:col-span-4  md:text-center'>
                  <p className='text-7xl font-semibold mr-3'>{productDetails.ratingsAverage}</p>
                  <p className='text-gray-400 text-3xl' >/5</p>
                </div>

               

               
                <div className='md:col-span-12 lg:col-span-8'>
                  
<div>
  
  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{productDetails.ratingsQuantity} global ratings</p>
  <div className="flex items-center mt-4">
    <a href="#" className=" font-medium  flex items-center "> <IoIosStar className='mr-1 text-yellow-300'/> 5</a>
    <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded-sm dark:bg-gray-700">
      <div className="h-2 bg-black rounded-sm" style={{width: '50%'}} />
    </div>
    
  </div>
  <div className="flex items-center mt-4">
    <a href="#" className=" font-medium  flex items-center "> <IoIosStar className='mr-1 text-yellow-300'/> 4</a>
    <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded-sm dark:bg-gray-700">
      <div className="h-2 bg-black rounded-sm" style={{width: '25%'}} />
    </div>
    
  </div>
  <div className="flex items-center mt-4">
    <a href="#" className=" font-medium  flex items-center "> <IoIosStar className='mr-1 text-yellow-300'/> 3</a>
    <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded-sm dark:bg-gray-700">
      <div className="h-2 bg-black rounded-sm" style={{width: '10%'}} />
    </div>
    
  </div>
  <div className="flex items-center mt-4">
    <a href="#" className=" font-medium  flex items-center "> <IoIosStar className='mr-1 text-yellow-300'/> 1</a>
    <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded-sm dark:bg-gray-700">
      <div className="h-2 bg-black rounded-sm" style={{width: '7%'}} />
    </div>
    
  </div>
  <div className="flex items-center mt-4">
    <a href="#" className=" font-medium  flex items-center "> <IoIosStar className='mr-1 text-yellow-300'/> 1</a>
    <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded-sm dark:bg-gray-700">
      <div className="h-2 bg-black rounded-sm" style={{width: '8%'}} />
    </div>
    

  </div>
</div>


                        

                </div>

             </div>          
      </div>

      <div className='col-span-7 border-gray-200 border-1 rounded-3xl p-5'>    

        <figure className="max-w-screen-md">
        <figcaption className="flex items-center mb-6 space-x-3 rtl:space-x-reverse">
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CTO at France</cite>
            </div>
          </figcaption>
          <div className="flex items-center mb-4 text-yellow-300">
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <blockquote>
            <p className=" font-semibold text-gray-600 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus, magni repellat vero aliquid distinctio quasi dolor corporis delectus velit suscipit enim officiis aliquam beatae hic eaque quisquam ullam nemo.</p>
          </blockquote>
          
        </figure>

  
      </div>
        
          
       

</div>  
    </div>


</div>: 'loading'}
  
  
  </>
}
