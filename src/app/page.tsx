import BlogCard from "@/components/blogCard";
import CommentSection from "@/components/commentSec";
import { client } from "@/sanity/lib/client";
// import Image from "next/image";

export default async function Home() {

  const query =
   `*[_type=="post"] | order(_createAt asc){
  summary,title,image,
    "slug":slug.current
}`



const posts = await client.fetch(query)

// console.log(posts)

  return (
    <>
<main className="flex min-h-screen flex-col">
    <h1 className="text-2xl font-bold uppercase my-12 
    text-yellow-700 text-center text-dark dark:text-light 
    sm:text-3xl lg:text-5xl">
    Most Recent Blogs
    </h1>
  <section className="grid grid-cols-1 sm:grid-cols-6 
  md:grid-cols-3
  lg:grid-cols-3  sm:gap-5">
  
  {
    posts.map((post:Post)=>(
     <BlogCard post={post} key={post.slug}/> 
    ))
  }

  </section>
  </main>
  <CommentSection/>
    </> 
  );
}
