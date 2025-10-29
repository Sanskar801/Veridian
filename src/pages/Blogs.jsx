import React from 'react'
import BlogCard from '../components/ui/BlogCard';
import blogImg1 from "../assets/blog-image.jpg";
import blogImg2 from "../assets/map-lying-wooden-table.jpg"

const Blogs = () => {
  return (
    <div className='h-fit px-4'>
      <div class="flex items-center gap-2 pt-52 pl-44 ">
        <span class="inline-block w-3.5 h-3.5 bg-black rounded-full"></span>
        <h1 class="text-2xl font-medium pb-1">Blogs</h1>
      </div>
      <section className="blog-section mt-24 h-fit flex flex-col items-end gap-1">

        <div className="categories flex gap-2">
          <label>Categories: </label>
          <div className="toggle flex gap-1">
            <button className="bg-slate-100 p-0.5 rounded-xs hover:bg-black hover:text-white active:bg-black active:text-white">All</button>
            <button className="bg-slate-100 p-0.5 rounded-xs hover:bg-black hover:text-white active:bg-black active:text-white">Design</button>
            <button className="bg-slate-100 p-0.5 rounded-xs hover:bg-black hover:text-white active:bg-black active:text-white">Tech & AI</button>
            <button className="bg-slate-100 p-0.5 rounded-xs hover:bg-black hover:text-white active:bg-black active:text-white">Marketing</button>
          </div>
        </div>

        <div className="seperator border-1 w-full"></div>

        {/* can you only make changes in this  */}
        <div className="blogs grid grid-cols-2 gap-10 w-full">
          <BlogCard
            blogImg={blogImg1}
            blogTitle="The Psychology Behind Successful Digital Marketing Campaigns"
            category="Digital Marketing"
            createdAt="October 10, 2025"
          />

          <BlogCard
            blogImg={blogImg2}
            blogTitle="How AI Is Redefining the Future of Online Advertising"
            category="Tech & AI"
            createdAt="October 18, 2025"
          />

          <BlogCard
            blogImg={blogImg2}
            blogTitle="How AI Is Redefining the Future of Online Advertising"
            category="Tech & AI"
            createdAt="October 18, 2025"
          />
        </div>


      </section>
    </div>
  )
}

export default Blogs