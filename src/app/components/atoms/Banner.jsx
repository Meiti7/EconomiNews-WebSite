import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BannerMid from "../../../../public/img/Banner-Mid.png"
function Banner() {
  return (
    <div className='flex gap-6 max-w-[950px]'>
   <Link href="/">
    <Image src={BannerMid} alt='baner' />
   </Link>

    </div>
  )
}

export default Banner