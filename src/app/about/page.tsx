import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <section className="flex items-center justify-center text-gray-600 body-font mt-10 sm:mt-o mx-auto">
  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center py-0 sm:py-24  max-w-7xl">
    <div className="lg:flex-grow  md:w-1/2  sm:h-[31.25rem]
     lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center
    bg-white px-5 py-5">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-600">
      About TT|DS
      </h1>
      <p className="mb-8 leading-relaxed text-pretty">
      We are an alliance of interior and textile designers who have collaborated to design, manufacture and distribute:
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4 mb-8 text-pretty">
         <li>Sunbrella Upholstery and Marine fabric;</li>
         <li>3Beaches Textiles upholstery and accessories;</li>
         <li>Maeve Oliver Wallpapers;</li>
         <li>Santa Barbara Designs umbrellas; and</li>
         <li>custom linens</li> 
        </div>

      </div>
    
      <div className="flex lg:flex-row md:flex-col text-pretty">
        <p>TT|DS also offers a bespoke textile and  interior design service to select marine, residential and commercial customers.</p>
      </div>
    </div>
    <div className=" bg-white  lg:max-w-lg lg:w-full  md:w-1/2  w-5/6">
      <Image src={"/images/aboutImg.jpg"}
         width={100}
         height={300}
        className="object-cover object-center
        w-[100%] h-[31.25rem] rounded"
        alt="image"
      />
    </div>
  </div>
</section>

    </>
  )
}

export default About
