import React from "react";
import { FaPhone, FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Contactus() {
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 pb-20">
      <div className="container mx-auto">
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-20"
        >
          <p className="text-gray-400 font-light text-center">Contact Us</p>
          <h1 className="text-4xl font-extrabold text-center mb-3">
            Get In Touch
          </h1>
          <p className="text-center text-gray-500 lg:px-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae nostrum natus excepturi fuga ullam accusantium ve
          </p>
        </motion.div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 flex flex-col justify-center"
          >
           
            <motion.form
              variants={container}
              className="flex flex-col space-y-5 mb-15"
            >
              <motion.input
                variants={item}
                type="text"
                placeholder="Your Name"
                className="border-2 border-gray-300 outline-none px-4 py-3 rounded-lg focus:border-black duration-200"
              />
              <motion.input
                variants={item}
                type="email"
                placeholder="Your Email"
                className="border-2 border-gray-300 outline-none px-4 py-3 rounded-lg focus:border-black duration-200"
              />
              <motion.textarea
                variants={item}
                rows={5}
                placeholder="Your Message"
                className="border-2 border-gray-300 outline-none px-4 py-3 rounded-lg focus:border-black duration-200"
              ></motion.textarea>
              <motion.button
                variants={item}
                className="bg-black text-white px-6 py-3 rounded-lg w-32 font-bold hover:bg-gray-800 cursor-pointer border-2 border-black duration-200"
              >
                SEND
              </motion.button>
            </motion.form>

         
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="font-semibold text-2xl mb-4">
                Prefer a Direct Approach?
              </h1>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-black" />
                  <p>+62-9841-0988-4327</p>
                </li>
                <li className="flex items-center space-x-3">
                  <MdEmail className="text-black" />
                  <p>Hello_World@gmail.com</p>
                </li>
                <li className="flex items-center space-x-3">
                  <FaClock className="text-black" />
                  <p>Monday to Friday 9 AM - 6 PM (GMT)</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
            className="col-span-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5258.467485744982!2d-3.692179082299897!3d40.4156664665233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288472c293df%3A0xa921f67f134d1c1a!2z2LPZitix2YPZiNmE2Ygg2K_ZiSDYqNmK2YTYp9izINin2LHYqtmK2LM!5e0!3m2!1sar!2seg!4v1757182692323!5m2!1sar!2seg"
              width="600"
              height="600"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
