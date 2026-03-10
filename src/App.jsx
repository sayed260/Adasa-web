import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/Pages/Layout/Layout'
import Home from './assets/Pages/home/Home'
import About from './assets/Pages/about/About'
import Blog from './assets/Pages/blog/Blog'
import Error from './assets/Pages/Error/Error'
import BlogDetails from './assets/Pages/BlogDetails/BlogDetails'

function App() {

  const routing = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      } ,
      {
        path: "about",
        element: <About />
       },
       {path: "blog",
        element: <Blog />
      },
      {
        path: "blog/blogdetails/:slug",
        element: <BlogDetails />
      },
      {
        path: "*",
        element: <Error />
      }
    ]},
    // {
    //   path: "*",
    //   element: <Error />
    // }
])

  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export default App
