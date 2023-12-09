"use client"
import React from 'react'
import Landing from './components/landing/Landing'
import Navbar from './components/header/Navbar'
import Footer from './components/footers/Footer'


const page = () => {

  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  )
}

export default page