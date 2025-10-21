import React from "react";

const BlogCard = ({ blogImg, blogTitle, category, createdAt }) => {
    return (
        // <div className="blog-card group w-full sm:w-[350px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
        //     {/* Image */}
        //     <div className="overflow-hidden">
        //         <img
        //             src={blogImg}
        //             alt={blogTitle}
        //             className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        //         />
        //     </div>

        //     {/* Content */}
        //     <div className="p-5 flex flex-col gap-2">
        //         <div className="flex items-center justify-between text-sm text-gray-500">
        //             <span className="uppercase font-medium tracking-wide text-gray-700">
        //                 {category || "Uncategorized"}
        //             </span>
        //             <span className="text-gray-400">{createdAt || "—"}</span>
        //         </div>

        //         <h1 className="text-xl font-semibold leading-tight text-gray-900 group-hover:text-black">
        //             {blogTitle || "Untitled Blog Post"}
        //         </h1>

        //         <p className="text-gray-600 text-sm line-clamp-2">
        //             A short introduction or preview of the article can go here. Make your
        //             readers curious enough to click.
        //         </p>

        //         <button className="mt-3 w-fit text-sm font-medium text-black hover:text-white border border-black px-4 py-1.5 rounded-full hover:bg-black transition-all duration-300">
        //             Read More →
        //         </button>
        //     </div>
        // </div>

        <div className="card flex flex-col justify-between py-6 gap-1 cursor-pointer">
            <img className="flex shrink-0 w-full rounded-2xl" src={blogImg} alt={blogTitle} />
            <span>{createdAt}</span>
            <h1 className="text-2xl uppercase font-bold hover:underline">{blogTitle}</h1>
            <span className="bg-slate-400 px-2 rounded-2xl py-0.5 w-fit">{category}</span>
        </div>
    );
};

export default BlogCard;


