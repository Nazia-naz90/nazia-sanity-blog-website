import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";


const Contact=()=>{
    return(
        <>
        <form  className="bg-black px-6 sm:px-24 lg:px-12 py-6 max-w-7xl
         md:w-7xl text-white mx-auto mt-10">
        <div className="max-w-7xl bg-black">
        <h2 className="text-3xl font-bold mb-5 text-dark text-center 
        uppercase">
        CONTACT US
        </h2>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row
        gap-4 mb-4
        ">
            <input type="text"
            placeholder="Name"
            className="w-full px-3 py-2 text-dark placeholder-gray-400bg-light border rounded" />

           <input type="email"
           placeholder="Email"
           required
           name="email"
           className="w-full px-3 py-2 text-dark 
           placeholder-gray-400
           bg-light border rounded
           "/>
        </div>

        <textarea 
        rows={3}
        placeholder="Message"
        name="message"
        className="mb-4
        w-full px-3 py-2 text-dark placeholder-gray-400 bg-light border rounded
        "/>

    <div className="flex items-center justify-center">
    <button className="px-12 py-3text-xl font-semibold 
        border-2 border-dark  text-light hover:text-dark uppercase transition-all duration-150 ease-linear bg-dark hover:bg-light rounded-lg block mx-auto">
        Submit
        </button>

<div className="flex items-center justify-end  space-x-5">
<Link href={"/"}>
        <FaWhatsapp className="w-6 h-6"/>
</Link>
<Link href={"/"}>
        <FaInstagram className="w-6 h-6"/>
</Link>
<Link href={"/"}>
        <FaLinkedin className="text-white w-6 h-6"/>
</Link>
</div>
    </div>

        </div>
        </form>
        </>
    )
}

export default Contact;