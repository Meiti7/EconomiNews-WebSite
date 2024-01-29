import React from 'react'
import { RiListSettingsLine } from "react-icons/ri";
function FilterBtn() {
  return (
    
      <button className='px-6 py-2 border border-[#126C46] rounded-lg text-[#126C46] flex items-center gap-1'>
        
        Filter
     <RiListSettingsLine />
   
    </button>
    
  )
}

export default FilterBtn