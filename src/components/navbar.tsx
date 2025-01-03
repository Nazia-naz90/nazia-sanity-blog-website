"use client";

import navItem from "@/app/constant";
import Link from "next/link";
import useToggle from "@/app/hooks/hooks";
import { FaSignInAlt } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";


export default function Navbar() {
  
  const  {toggle, handleMenuClick } = useToggle();
  
  return (
    <header className="h-[10vh] bg-black 
   drop-shadow-[0_0px_3px_rgba(117,195,16,0.5)] max-w-7xl sm:max-w-7xl
   md:max-w-7xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl
   mx-auto  fixed container lg:relative">

  <div className="flex items-center justify-between gap-20 h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 container">
        <div className="flex 
        items-center justify-center
        sm:flex-row gap-2  ml-5">
          <h3 className="text-[3vmin] hidden sm:block
           text-white">
          The Textile & Design Studio
          </h3>
          <h3 className="text-[5vmin] text-white flex sm:hidden">
            TT|DS</h3>
        </div>

        <nav className="lg:h-[44.54px] ">
          <ul
            className="hidden lg:flex h-full w-full items-center 
          justify-between gap-[46px] text-white 
          text-[17px] font-medium">
            {navItem.map((item, id) => (
              <Link href={item.link} 
              key={id}
          className="transition transform hover:-translate-y-1 
          motion-reduce:transition-none 
          motion-reduce:hover:transform-none">
                <li key={id}>{item.title}</li>
              </Link>
              
            ))}
            
        <button
          className="bg-gray-100 shadow-md text-[17px]
         hidden lg:flex justify-center items-center
         text-gray-700 w-[100px] h-[35px] rounded-md
         transition transform hover:-translate-y-1 
         motion-reduce:transition-none px-1
         motion-reduce:hover:transform-none"
        >

          <Link href={""} className=" gap-x-2 flex items-center justify-center ">
          <FaSignInAlt className="text-gray-700"/>
          SIGN IN</Link>
        </button>
          </ul>
        </nav>

        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="lg:hidden">
          <div className="flex flex-col justify-between  
           mx-4 gap-y-1  " onClick = {handleMenuClick}>
          <BiMenuAltLeft className="text-white" />
          </div>
          {/* media query on navbar */}
          {toggle && (
            <div className="absolute right-0 w-[12rem] h-[65vh] bg-gray-100 mt-5 p-4 
            rounded-md ">
            <div className="flex flex-col justify-center items-center">
            <nav className="h-[5.5675vh]">
                  <ul
                    className=" flex flex-col h-full w-full items-center 
         justify-between space-y-4 text-gray-700 
         text-[20px] font-medium"
                  >
                    {navItem.map((item, id) => (
                      <Link href={item.link}
                      key={id}
                      className="transition transform hover:-translate-y-1 
                      motion-reduce:transition-none 
                      motion-reduce:hover:transform-none"
                       >
                        <li key={id}>{item.title}</li>
              
                  
                      </Link>
                      
                    ))}

                  </ul>
                </nav>
                <div className="flex mt-48 
                space-y-2">
                  <button
                    className="bg-gray-500 shadow-md 
        flex justify-center items-center
        text-white w-[100px] h-[40px] rounded-md
        transition transform hover:-translate-y-1 
        motion-reduce:transition-none p-1
        motion-reduce:hover:transform-none">
                      <Link href={""} className="flex items-center justify-center gap-x-1">
                      <FaSignInAlt className="text-white"/>
                      SIGN UP</Link>                  
                      </button>
                </div>
              </div>
            </div>
          )}
          {/* toggle-end */}
        </div>
      </div>
    </header>
  );
}
