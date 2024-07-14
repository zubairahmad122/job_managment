import React, { useState } from 'react'
import { FiUpload } from "react-icons/fi";
import axios from 'axios'
import { toast } from 'react-toastify';
import HiringVideo from '../../assets/hiring.mp4'
import sec2Img from '../../assets/images/sec2img.jpg'
import {motion} from 'framer-motion'
import { FaArrowDown, FaShield } from 'react-icons/fa6'
import JobPostFrom from '../../components/JobPostFrom';
const index = () => {


  return (
    <>
      {/* Hero Section 
      <motion.section initial={{scale:0.4,opacity:0,position:'sticky'}} animate={{scale:1,opacity:1}} transition={{duration:1}}  className='w-full '>
        <video src={HiringVideo} className='w-full h-auto' muted autoPlay loop></video>
      </motion.section>
      <section className='px-[20px] bg-white mt-40 w-full max-w-screen-2xl min-h-screen sm:px-[30px] lg:px-[40px] xll:px-[80px]'>

        <div className="main flex items-center justify-center gap-3">

          <motion.div initial={{x:-400,opacity:0}}
          whileInView={{x:0,opacity:1}} 
          transition={{duration:1,delay:0.5}} className='flex-1'>
         <h1 className='text-5xl font-bold leading-relaxed text-gray-800'>Organize your applications and keep them secure, always!</h1>
          <p className='text-[16px] my-4 text-[#413f3f]'>We provide a safe platform to store and manage all your job <br /> applications securely</p>
          <div className="flex my-10 flex-wrap">
            <div className="bg-[#e8e5e5] rounded-lg p-4 shadow-md ">
              <p>Data Entries</p>
              <div className='flex items-center gap-5'>

              <h2 className='text-3xl font-semibold'>Secure Data</h2>
              <FaShield className='text-3xl text-blue-600' />
              </div>
          </div>


            </div>
          </motion.div>
          <motion.div initial={{x:400,opacity:0}}
          whileInView={{x:0,opacity:1}} 
          transition={{duration:1,delay:0.5}}  className='flex-1'>
            <img src={sec2Img} alt="" className='w-full h-auto' />
          </motion.div>
        </div>
      </section> */}

<motion.div initial={{scale:0.3}} animate={{scale:1}} transition={{duration:0.4}}  className='min-h-[60vh] relative bg-img'>
            <div className='w-full px-5 min-h-[55vh] relative z-10 flex flex-col gap-2 items-center text-center justify-center'>
         
              <h1 className=' text-lg ssm:text-2xl sm:text-4xl mdd:text-5xl tracking-wide max-w-[900px] mb-3 font-normal text-white'>Submit Your Application Now</h1>
              <a href='#JobFrom' className="flex border px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-blue-500 duration-300 cursor-pointer justify-center  items-center text-white mt-4 gap-2">
           <h4 className='text-lg font-semibold '>Apply Here</h4>
           <FaArrowDown size={20} />
           </a>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000083]"></div>
           
        </motion.div>

      <JobPostFrom />
    </>
  )
}

export default index