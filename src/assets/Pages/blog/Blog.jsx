import React, { useState, useEffect } from "react";
import apiresponse from "../../../Response";
import Posts from "../../Components/Posts/Posts";
import { Link } from "react-router-dom";
import {
  HiOutlineDocumentText,
  HiOutlineViewGrid,
  HiOutlineMenu,
  HiOutlineEmojiSad,
  HiOutlineRefresh,
} from "react-icons/hi"


export default function Blog() {
  const playload = apiresponse;

  const [categories, setcategories] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("list");

  const postsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [categories, searchTerm]);

  const filteredPosts = playload.posts
    .filter((post) => categories === "all" || post.category === categories)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  return (
    <div className="container pt-20 my-20 mx-auto flex flex-col items-center justify-center ">

    <div className="relative  max-w-7xl mb-32 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-500 bg-opacity-15 border border-orange-500 text-orange-400 rounded-full text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span >
              <HiOutlineDocumentText />
              مدونتنا
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                مقالاتنا
              </span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>



      <div className="flex flex-col  md:flex-row justify-between items-center gap-4 w-full  border-b border-gray-600 ">
        <div>
          <input
            placeholder="ابحث في المقالات..."
            className="input-dark bg-[#161616] rounded-xl border border-gray-600  w-full px-5 py-3 pr-12"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <ul className=" flex-space-between gap-x-3 py-5">
            <li
              className={`px-4 py-2 rounded-2xl cursor-pointer border-2 border-transparent text-gray-400 hover:text-white hover:border-[#F66D14] ${categories === "all" ? "Active" : ""}`}
            >
              <button onClick={() => setcategories("all")}>الكل</button>
            </li>

            {playload.categories.map((category) => {
              return (
                <li
                  className={` bg-[#161616] px-4 py-2 rounded-2xl cursor-pointer border-2 border-transparent text-gray-400 hover:text-white hover:border-[#F66D14] ${categories === category.name ? "Active" : ""}`}
                  key={category.id}
                >
                  <button onClick={() => setcategories(category.name)}>
                    {category.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
            viewMode === "list"
              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
              : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/50 hover:text-white"
          }`}
          onClick={() => setViewMode("list")}
        >
          List View
        </button>
        <button
          className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
            viewMode === "grid"
              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
              : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/50 hover:text-white"
          }`}
          onClick={() => setViewMode("grid")}
        >
          Grid View
        </button>
        
      </div>

      <div
        className={`${
          viewMode === "grid"       
            ? "grid grid-cols-1 "
            : "grid grid-cols-3 "
        } gap-4 w-full pt-10`}
      >
        {currentPosts.map((post) => {
          return (
            <div key={post.id}>
              <Link to={`/blog/blogdetails/${post.slug}`}>
                <div>
                    { <Posts posts={post } viewMode={viewMode} />}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {totalPages > 0 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            className={`p-3 rounded-xl border transition-all duration-300 ${
              currentPage === 1
                ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <svg
              className="w-5 h-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                  page === currentPage
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className={`p-3 rounded-xl border transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <svg
              className="w-5 h-5 rotate-360"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
