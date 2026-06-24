import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import ToBeTeacher from './Pages/ToBeTeacher'



const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

 const router = createBrowserRouter([

   {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "tobeteacher", element: <ToBeTeacher /> },




     ]
   },
 ]);

const App = () => {
  return (<RouterProvider router={router} />)
}

export default App

