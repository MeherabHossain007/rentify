import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/navBar'
import RentCard from '../components/rentCard'
import Search from '../components/Search'

function HomePage() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Search/>
    <RentCard/>
    </>
  )
}

export default HomePage