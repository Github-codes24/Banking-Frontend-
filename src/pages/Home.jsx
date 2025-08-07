import React from 'react'
import Crousal from '../component/Crousal'
import HomeAbout from '../component/HomeAbout'
import OurSchemes from '../component/OurSchemes'
import BrochureDownload from '../component/BrochureDownload'

const Home = () => {
  return (
    <div>
       <Crousal/>
       <HomeAbout/>
       <OurSchemes/>
       <BrochureDownload/>
    </div>
  )
}

export default Home