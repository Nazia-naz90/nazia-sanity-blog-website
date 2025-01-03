import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const FooterTail = () => {
  return (
    <>
      <section className="max-w-7xl  text-gray-800 bg-gray-400 
      body-font mx-auto mt-10">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-pretty w-full ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-700 text-center">
              THE TEXTILE & DESIGN STUDIO
            </h1>
            {/* <p className=" text-center leading-relaxed text-base">
              Becoming a regular customer has never been more rewarding! Enjoy a
              massive 70% discount on our delivery charges, making it easier and
              more affordable for you to receive your favorite products right at
              your doorstep. Our commitment to excellent service ensures timely
              deliveries, so you can count on us for convenience and
              reliability. Whether it's everyday essentials or special treats,
              we've got you covered. Plus, as a regular customer, you'll have
              access to exclusive deals and offers. Don't miss out on this
              fantastic opportunity to save big and enjoy seamless shopping with
              us. Join our community today!
            </p> */}
          </div>

        {/* LOGO SECTION */}

          <div className="sm:flex flex-wrap items-center -m-4  text-center
          grid grid-cols-2 mt-10
          ">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-2 py-2 rounded-lg">
                {/* FIRST LOGO */}
            <Link href={"https://www.thetextileanddesignstudio.com.au/fabric/"} target="_blank">
            <Image src="/images/Logo_3Beaches.png"
            alt="logo"
            width={100} height={100} 
            className="block  transition-all duration-300 transform hover:scale-125"
            />
            </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-2 py-2 rounded-lg">
                {/* 2ND LOGO */}
                <Link href={"https://www.thetextileanddesignstudio.com.au/fabric/custom-fabrics/#"} target="_blank">
            <Image src="/images/Logo_2.png" alt="logo" 
            width={100} 
            height={100}
            className="block  transition-all duration-300 transform hover:scale-125"
            />
            </Link> 
            </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-2 py-2 rounded-lg">
               {/* 3rd LOGO */}
               <Link href={"https://www.thetextileanddesignstudio.com.au/umbrellas/santa-barbara-designs/"} target="_blank">
            <Image src="/images/Logo_Santa-Barbara-3.png"
            alt="logo"
            width={100} height={100}
            className="block  transition-all duration-300 transform hover:scale-125"
            />
            </Link>
            </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-2 py-2 rounded-lg">
                {/* 4th LOGO */}
                <Link href={"/"} target="_blank">
            <Image src="/images/Logo_Sunbrella.png"
            alt="logo"
            width={100} height={130}
            className="block  transition-all duration-300 transform hover:scale-125"
            />
            </Link>
              </div>
            </div>
          </div>
              
        </div>
          
      </section>
       
    <section className="flex items-center justify-center max-w-7xl  text-gray-800 bg-gray-400 
      body-font mx-auto">
      {/* FOOTER BOTTOM */}
      <div className="flex items-center justify-center text-center mx-auto 
      text-white
      ">  
        <p className="text-xs text-light">
        © Copyright 2025
        <span className="text-light font-bold">
         &nbsp;The Textile  
        </span> 
        <span className="text-accentDarkPrimary font-bold">
        & Design Studio.&nbsp;
        </span>{""} 
        All rights reserved
        </p>
        </div>


                      {/* TOP TO BOTTOM BUTTON */}
      <div className="flex items-end justify-end mb-5">
          <button className="w-[50px] h-[50px] bg-gray-700
           hover:bg-white p-1 rounded-full">
          <Link href={"/"} className="flex flex-col items-center justify-center text-white hover:text-black">
          <FaArrowUp/>
          Top
          </Link>
          </button>
        </div>
    </section>
       
    </>
  );
};

export default FooterTail;
