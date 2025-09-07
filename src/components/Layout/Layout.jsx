import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  
  <div className="min-h-[1300px] flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet /> {/* or your Routes go here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  
  
  </>
}
