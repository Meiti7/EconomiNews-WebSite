import React from 'react'
import Banner from '../atoms/Banner'
import VideoStand from '../molecules/VideoStand'
import NewsStand from '../molecules/NewsStand'

function Main() {
  return (
    <div className='flex flex-col gap-6'>
        
        <Banner />
        <VideoStand />
        <NewsStand />
    </div>
  )
}

export default Main