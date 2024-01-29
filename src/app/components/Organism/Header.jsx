import React from 'react'
import Submenu from '../molecules/Submenu'
import HomepageStand from "../molecules/HomepageStand"
import SuggestedNews from '../molecules/SuggestedNews'
function Header() {
  return (
    <div className='flex gap-6 flex-col'>
      
       <Submenu />
       <HomepageStand />
       <SuggestedNews />
    </div>
  )
}

export default Header