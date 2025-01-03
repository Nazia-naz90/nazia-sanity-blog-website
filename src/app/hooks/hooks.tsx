"use client";

import { useState } from "react";

const useToggle = () =>{
   const [toggle,setToggle] = useState(false);

   const  handleMenuClick = () => {
    setToggle(prevToggle => !prevToggle);
   }

  return {toggle, handleMenuClick};
};



export default useToggle;

