import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
import { motion } from "framer-motion";
import Logo from "../assets/images/logo-color.png";
import LogoWhite from "../assets/images/logo-white.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState("Home");

  const listVariants = {
    closed: {
      x: "500vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const list1Variants = {
    closed: {
      y: "-100px",
    },
    opened: {
      y: 0,
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const NavData = [
    {
      id: 0,
      path: "/",
      name: "Home",
    },
    {
      id: 1,
      path: "/Jobs",
      name: "Jobs",
    },
  ];


  const[navscroll,setNavscroll] = useState(false);
  useEffect(() =>{
    
    const Scroll  = () =>{
      if(window.scrollY>=80){
        setNavscroll(true)
      }else{
        setNavscroll(false)   
      }
    }
      window.addEventListener('scroll',Scroll)
    
  },[])

  return (
    <div className={`w-full fixed bg top-0 px-[20px] sm:px-[30px] lg:px-[40px] xll:px-[80px] py-[1rem] lg:py-[1.5rem] left-0 z-40 ${navscroll && 'bg-blue-700'}`}>
      <nav className="flex max-w-screen-2xl mx-auto items-center justify-between">
        <motion.div
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <Link to={"/"}>
            <img
              className=" w-[140px] md:w-[190px] h-auto object-cover"
              src={LogoWhite}
              alt="Logo"
            />
          </Link>
        </motion.div>

        <motion.ul
          variants={list1Variants}
          initial="closed"
          animate="opened"
          className="hidden md:flex flex-col md:flex-row gap-[30px]"
        >
          {NavData.map((i) => (
            <motion.li
              variants={list1Variants}
              onClick={() => setNav(i.name)}
              className={`nav-li relative text-[18px] font-DmSans text-[#fff] ${
                nav === i.name ? "nav-active" : ""
              }`}
              key={i.id}
            >
              <Link to={i.path}>{i.name}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <li
          onClick={() => setOpen(!open)}
          className="list-none block md:hidden duration-200 text-white px-5 py-5 rounded-full cursor-pointer"
        >
          <GrMenu size={25} />
        </li>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="md:hidden gap-y-10 absolute top-0 z-10 bg-[#FDFFFC] left-0 w-full h-[100vh]"
          >
            <div className="flex w-full px-5 py-5 justify-end items-center">
              <li
                onClick={() => setOpen((prev) => !prev)}
                className="list-none duration-200 text-black px-5 py-5 rounded-full cursor-pointer"
              >
                <GrClose size={25} />
              </li>
            </div>
            <motion.div className="flex w-[80%] mx-auto flex-col gap-y-10 h-screen items-start justify-start">
              <Link to={"/"}>
                <img
                  className="w-[170px] h-auto object-cover"
                  src={Logo}
                  alt="ikonic Logo"
                />
              </Link>
              {NavData.map((i) => (
                <motion.li
                  variants={listVariants}
                  onClick={() => setOpen((prev) => !prev)}
                  className={`nav-li relative text-[20px] font-DmSans text-[#1C1C1] ${
                    nav === i.name ? "nav-active" : ""
                  }`}
                  key={i.id}
                >
                  <Link to={i.path}>{i.name}</Link>
                </motion.li>
              ))}
            </motion.div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
