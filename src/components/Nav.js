import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import  { BsCart3 } from 'react-icons/bs'

export const Nav = () => {
  return (
    <div className='flex flex-auto flex-row   justify-between items-center px-10 py-5'>
      <h1 className='m-0 font-bold cursor-pointer'>OptiLux</h1>
      <div>
        <ul className='flex flex-row  justify-between items-center text-lg'>
          <a  href='#'>
            <li className='hover:bg-[#081d5e] hover:text-white  rounded mr-10 px-4 py-3'>Sun Glasses</li>
          </a>
          <a href='#'>
            <li className='hover:bg-[#081d5e] hover:text-white rounded px-4 py-3 mr-10'>Computer Glasses</li>
          </a>
          <a href='#'>
            <li className='hover:bg-[#081d5e] hover:text-white rounded mr-10 px-4 py-3'>Contact Lenses</li>
          </a>
          <a>
            <li className='hover:bg-[#081d5e] hover:text-white rounded  mr-10 px-4 py-3'>About</li>
          </a>
        </ul>
      </div>
      <div className='hidden w-32 flex flex-row items-center'>
        <VscAccount className='cursor-pointer scale-150 mr-10'/>
        <BsCart3 className='cursor-pointer scale-150'/>
      </div>
      <div>
        <button className='rounded bg-[#081d5e] mr-3 px-5 py-3 text-white'>Sign Up</button>
        <button className='rounded bg-[#081d5e] mr-3 px-5 py-3 text-white'>Log In</button>
      </div>
    </div>
  )
}
