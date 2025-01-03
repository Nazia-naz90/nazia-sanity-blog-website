import React from 'react'


export default function Container({children}:{children:React.ReactNode}){
   return(
    <div className="px-6 xs:px-8 sm:px-12 lg:px-16
    xl:px-24 sxl:px-32">
     {children}
    </div>
   ) 
}