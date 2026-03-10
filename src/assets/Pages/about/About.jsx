import React from 'react'
import {
  FaBolt,
  FaBookOpen,
  FaCheck,
  FaEnvelope,
  FaGithub,
  FaHandshake,
  FaLinkedin,
  FaNewspaper,
  FaPenNib,
  FaUsers,
} from "react-icons/fa";
import { FaArrowsRotate, FaBullseye, FaXTwitter } from "react-icons/fa6";
import apiresponse from '../../../Response';
import Posts from '../../Components/Posts/Posts';

const playload =  apiresponse ;
const { image, title, date, readTime, content, excerpt, category, author } =
    Posts;

export default function About() {
  return (

    <>
    <div className="bg-[#0a0a0a] pt-20">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm  text-orange-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse "></span>
              من نحن
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              مهمتنا هي{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                الإعلام والإلهام
              </span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaUsers className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +2مليون
                </div>
                <div className="text-sm text-neutral-500">قارئ شهرياً</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaNewspaper className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +500
                </div>
                <div className="text-sm text-neutral-500">مقالة منشورة</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaPenNib className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +50
                </div>
                <div className="text-sm text-neutral-500">كاتب خبير</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaBookOpen className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +15
                </div>
                <div className="text-sm text-neutral-500">تصنيف</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111111] border-y border-[#262626] ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
                قيمنا
                <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaBullseye className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    الجودة أولاً
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    محتوى مدروس ومكتوب بخبرة
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaBolt className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    تركيز عملي
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أمثلة واقعية يمكنك تطبيقها اليوم
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaHandshake className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    المجتمع
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    تعلم مع آلاف المصورين
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaArrowsRotate className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    دائماً محدث
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أحدث الاتجاهات وأفضل الممارسات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className=' my-20'>
          <div className='flex items-center justify-center flex-col text-center gap-4 my-2'>
            <span className=' text-orange-600 bg-orange-600 border border-orange-500 bg-opacity-15 px-4 py-2 rounded-full text-sm flex items-center gap-2'>
              فريقنا
            </span>
            <h2 className=' text-5xl font-bold'>
              تعرف على كتابنا

            </h2>
            <p className=' text-gray-500 text-lg max-w-2xl  mx-auto'>
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
          </div>

          <div className=' container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="  my-10 flex flex-col w-[80%]  grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto items-center gap-2 m-2">

              {playload.posts.map((post) => {
                return(
                  <div key={post.id}className="items-center group hover:border-orange-500/30 gap-5 bg-[#161616] border border-[#262626] rounded-3xl p-6  ">
                    <img
                      className=" group-hover:border-orange-600 hover:border-10 border mx-auto rounded-full"
                      src={post.author.avatar}
                      alt={post.author.name}
                    />

                    <h4 className=" text-center mt-8 text-2xl font-bold text-white">{post.author.name}</h4>
                    <p className=" text-center text-sm text-orange-500 mt-2">{post.author.role}</p>
                    <div>
                      <ul className="flex items-center justify-center gap-4 mt-4">
                        <li className=" text-center bg-[#0A0A0A] py-1 rounded-lg text-gray-500 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer">
                          <FaEnvelope className=" inline-block mx-2" /> 
                          {post.author.email}
                        </li>
                        <li className=" text-center text-gray-500 bg-[#0A0A0A] py-1 rounded-lg mt-2 hover:bg-orange-500 hover:text-white cursor-pointer">
                          <FaGithub className=" inline-block mx-2" />
                          {post.author.github}
                        </li>
                        <li className=" text-center text-gray-500 bg-[#0A0A0A] py-1 rounded-lg mt-2 hover:bg-orange-500 hover:text-white cursor-pointer  ">
                          <FaLinkedin className=" inline-block mx-2" />
                          {post.author.linkedin}
                        </li>
                      </ul>
                    </div>
                  </div>
                  

                )
              })}
              

                
            </div> 
          </div>
        </section>
    </div>

    
  </>

  )
}
