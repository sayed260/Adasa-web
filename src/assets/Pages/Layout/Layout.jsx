import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Fooder'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar  />
    <Outlet />
    <Footer />
   
    </>
  )
}