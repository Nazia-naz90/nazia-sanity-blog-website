import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default function BlogCard({post}:{post:Post}){
  return(
<>
<div className="mx-auto">
<section className="flex flex-col justify-between p-2 bg-white
h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700 max-w-7xl">
    {/* IMAGE SECTION */}
    <div className="relative max-h-76 flex-1">
    <Image 
    src={urlForImage(post.image)}
    alt="Textile Design"
    fill
    className="object-cover rounded-t"
    />    
    </div>

    {/* TITLE AND SUMMARY */}
    <div className="flex flex.col items-center justify-between gap-y-1 px-2">
    <h2 className="text-lg font-semibold line-clamp-2
    text-yellow-700 dark:text-light leading-tight mb-2">
        {post.title}
    </h2> 
    </div>
    <div>
    <p className="text-dark/70 text-gray-600 dark:text-light/70 line-clamp-1" >
    {post.summary}
    </p>
    </div>
    <div>
      {/* READ MORE DYNAMIC */}
      <Link href={`/blog/${post.slug}`}
    className="block px-2 py-1 text-center bg-accentDarkSecondary 
    rounded text-dark font-semibold mt-2 text-yellow-700">
        Read More
    </Link>
</div>
    </section>
</div>
</>
  );  
};