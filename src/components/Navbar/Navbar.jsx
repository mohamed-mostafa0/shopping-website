
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext';
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
   const navItems = [
    { name: "Home", to: "/" },
    { name: "Our Products", to: "products" },
    { name: "Featured Products", to: "/featured" },
    { name: "Contact", to: "/contact" },
  ];

    
    const {userToken ,setuserToken ,setIsSignUp}= useContext(authContext)
    const navigate = useNavigate()
    

    function logout (){
      localStorage.removeItem('token')
      setuserToken(null)
    }

    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
   
  
    useEffect(() => {
      if (!isHome) return;
  
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.8) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);
  
  return <>
  
  


<div className="w-full flex justify-center ">
      <motion.nav
        initial={false}
        animate={{
          top: isHome && !isScrolled ? "0px" : "10px",
          width:
            isHome && !isScrolled ? "100%" : "70%",
           paddingLeft:
            isHome && !isScrolled ? "200px" : "30px",
           paddingRight:
            isHome && !isScrolled ? "200px" : "30px",
          backgroundColor:
            isHome && !isScrolled
              ? "rgba(255,255,255,1 )" 
              : "rgba(255,255,255,0.6)", 
          borderRadius:
            isHome && !isScrolled ? "0px" : "2rem",
          boxShadow:
            isHome && !isScrolled
              ? "0px 0px 0px rgba(0,0,0,0)"
              : "0px 4px 20px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed  z-20  dark:border-gray-700 px-6 py-3 backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          {/* Left logo */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FreshCart
          </span>
          <div className="" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 md:flex-row md:mt-0 relative">
      {navItems.map((item, idx) => (
        <motion.li
          key={idx}
          className="relative"
          whileHover="hover"
        >
          <a
            href={item.to}
            className="relative block py-3 px-4 text-gray-900 dark:text-white"
          >
            {item.name}

            {/* Underline */}
            <motion.span
              className="absolute left-0 bottom-0 h-[2px] w-full bg-black dark:bg-white"
              initial={{ width: 0 }}
              variants={{
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }} // underline expands from left to right
            />
          </a>
        </motion.li>
      ))}
    </ul>
    </div>
          

          {/* Right buttons */}
          <div>
            {userToken ? <>
            <div className='flex items-center space-x-4'>
            <NavLink to={'/cart'}>
                <FaCartShopping  className='text-2xl'/>
            </NavLink>
            <NavLink to={"/signin"}>
                <button
                  type="button"
                  className="cursor-pointer text-white bg-black border-2 border-black px-4 py-2 rounded-lg"
                  onClick={logout}
                >
                  Logout
                </button>
              </NavLink>
              
            </div>
              
              </>
             : (
              <>
                <NavLink to="/signin">
                  <button
                    type="button"
                    className="cursor-pointer text-white bg-black px-4 py-2 rounded-lg mr-3"
                    onClick={() => setIsSignUp(false)}
                  >
                    Login
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button
                    type="button"
                    className="cursor-pointer text-white bg-black px-4 py-2 rounded-lg"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign up
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </motion.nav>
    </div>


   
   
 

  </>
}

