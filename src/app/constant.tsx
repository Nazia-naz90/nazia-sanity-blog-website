
// import Link from 'next/link';
// import { title } from 'process'
// import React from 'react'

interface Inavitem{
    title:string,
    link:string,

}
export const navItem:Inavitem[]=[
    {
        
        title:"HOME",
        link: "/"
    },
    {
      title:"ABOUT",
      link: "/about"
    },
    {
        
        title:"CATALOGUE",
        link: "/catalogue"
    },
    {
        title:"CONTACT",
        link:"/contact"
    }
];
  


export default navItem
