import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navbar() {
  return (
    <>  
    <nav className='bg-[#161616] py-5 fixed top-0 left-0 right-0 z-50'>
        <div className="container">
            <div className='flex-space-between'>
                <div>
                    <h1>عدسة</h1>
                    <p>عالم التصوير الفوتوغرافي</p>
                </div>

                <div>
                    <ul className='flex-space-between gap-6 text-slate-300 '>
                        <li><NavLink className={({isActive})=>{
                            return(
                                ` hover:text-white ${isActive ?"Active" : "" } `
                            )
                        }} to="/">الرئيسية</NavLink></li>
                        <li><NavLink className={({isActive})=>{
                            return(
                                ` hover:text-white ${isActive ?"Active" : "" } `
                            )
                        }}  to="/blog">المدونة</NavLink></li>
                        <li><NavLink className={({isActive})=>{
                            return(
                                ` hover:text-white ${isActive ?"Active" : "" } `
                            )
                        }} to="/about">من نحن</NavLink></li>
                    </ul>
                </div>

                <div>
                    <button className=' px-5 bg-[#F66D14] text-white py-3 rounded-full'>ابدا القراءة</button>
                </div>

            </div>
        </div>
    </nav>
    </>
  )
}
