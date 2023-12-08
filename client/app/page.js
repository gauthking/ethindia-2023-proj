"use client"
import React from 'react'
import Landing from './landing/Landing'
import Navbar from './header/Navbar'
import Footer from './footers/Footer'

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