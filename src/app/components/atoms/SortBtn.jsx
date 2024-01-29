"use client"
import React, { useState } from 'react';
import { GoSortDesc } from 'react-icons/go';

function SortBtn({ onSort }) {
  const [isDesc, setIsDesc] = useState(true);

//   const handleSort = () => {
//     setIsDesc(!isDesc);
//     onSort(isDesc ? 'desc' : 'asc'); 
//   };

  return (
      <button className='px-6 py-2 border border-[#126C46] rounded-lg text-[#126C46] flex items-center gap-1'>
        
        Sort
      <GoSortDesc />
   
    </button>
  );
}

export default SortBtn;
