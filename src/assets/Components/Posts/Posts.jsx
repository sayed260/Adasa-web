import React from "react";

export default function Posts({ posts, viewMode }) {
  const { image, title, date, readTime, content, excerpt, category, author } =
    posts;

  return (
    <>
      <div className={` group bg-[#161616] borde overflow-hidden  rounded-3xl flex ${viewMode === "grid" ? "flex-row" : "flex-col"} gap-4`}>
        <div className={`group-hover:scale-105 rounded-t-3xl ${
              viewMode === "grid" ? " w-1/4" : "w-full"
            }`}>
          <img
            
            src={image}
            alt={title}
          />
        </div>

        <div className=" px-4 ">
          <div className=" flex space-between m-2 text-sm text-gray-500">
            <span>{readTime}</span>
            <span className=" mx-10">{date}</span>
          </div>
          <div>
            <h2 className=" group-hover:text-[#FF5F00] font-black font-serif text-white text-2xl">
              {title}
            </h2>
            <p className=" py-2 text-gray-400">{excerpt}</p>
          </div>

          <div className=" border-t border-gray-600  flex items-center gap-2 m-2">
            <div>
              <img
                className=" w-10 rounded-full"
                src={author.avatar}
                alt={author.name}
              />
            </div>

            <div className="py-2 flex flex-col">
              <span className=" text-gray-100">{author.name}</span>
              <span className=" text-sm  text-gray-400">{author.role}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Posts;
