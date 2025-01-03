import Image from 'next/image'
import React from 'react'

const Catalogue = () => {
  return (
    <>
    <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className='flex items-center justify-center
    text-5xl text-yellow-700 font-bold mx-auto mb-10'>
      <h1>Jewel Collection</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            src={"/images/catalogue1.jpg"}
            alt="ecommerce"
            width={261}
            height={422}
            className="object-cover object-center w-full 
            transition-transform duration-300 hover:scale-125
            h-full block"
            
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Scallop – Aquamarine
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            src={"/images/catalogue2.jpg"}
            width={261}
            height={422}
            alt="ecommerce"
            className="object-cover object-center w-full 
            transition-transform duration-300 hover:scale-105 h-full block"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Daintree Palm Aquamarine
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            src={"/images/catalogue-3.jpg"}
            alt="ecommerce"
            width={261}
            height={422}
            className="object-cover object-center w-full 
            transition-transform duration-300 hover:scale-105
            h-full block"
            
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Peacock Aquamarine
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
          src={"/images/catalogue4.jpg"}
            alt="ecommerce"
            width={261}
            height={422}
            className="object-cover object-center w-full 
            transition-transform duration-300 hover:scale-105
            h-full block"
          
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Palm Paisley - Aquamarine
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
          src={"/images/catalogue5.jpg"}
            alt="ecommerce"
            width={262}
            height={422}
            className="object-cover object-center w-full 
            transition-transform duration-300 hover:scale-105
            h-full block"

          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Marrakesh Aquamarine
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
          src={"/images/catalogue6.jpg"}
          width={261}
          height={422}
            alt="ecommerce"
            className="object-cover object-center 
            transition-transform duration-300 hover:scale-105
            w-full h-full block"
         
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Garland Aquamarine
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            src={"/images/catalogue7.jpg"}
            width={261}
            height={422}
            alt="ecommerce"
            className="object-cover object-center 
            transition-transform duration-300 hover:scale-105
            w-full h-full block"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Duck Stripe-Aquamarine
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
          src={"/images/catalogue8.jpg"}
            alt="ecommerce"
            width={261}
            height={422}
            className="object-cover object-center 
            transition-transform duration-300 hover:scale-105
            w-full h-full block
            "

          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Diamond Aquamarine
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </>
  )
}

export default Catalogue
