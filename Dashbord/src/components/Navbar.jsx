import React, { useContext, useEffect, useState } from 'react'
import { BiCart, BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const[navscrol,setNavscrol] = useState(false);

  useEffect(() =>{
    
    const scroll  = () =>{
      if(window.scrollY>=320){

        setNavscrol(true)
      }else{
     
        setNavscrol(false)
        
      }
    }
    
      window.addEventListener('scroll',scroll)
    
  },[])

  return (
    <nav className={`px-[1rem] static block top-0 left-0  w-full  z-[100] sm:px-[2rem] max mx-auto h-auto py-[1rem]  backdrop-blur-lg shadow-md  bg-blue-600 `}>
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center'>
      <Link to={'/'} className=' cursor-pointer text-[20px] xsm:text-[25px] sm:text-[35px] sm:tracking-normal text-white font-semibold tracking-wide uppercase '>Ikonic <span className=''>Career</span></Link>

      </div>
     

    </nav>
  )
}

export default Navbar