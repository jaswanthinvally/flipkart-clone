import React from 'react'

const Navbar = () => {
  return (
    <div className='main-navbar bg-red-600 p-4 rounded-md'>
    <nav>
    <div className='flex flex-row justify-between'>
    <ul className='flex flex-row'>
        <li className='text-white font-bold font-sans pe-5'>REALESTATE</li>
        <li className='text-white'>chennai</li>
       </ul>

        <ul className='flex flex-row'>
        <li className='font-bold text-white px-2 '>member</li>
        <li className='font-bold text-white px-2 '>login</li>
        <li><button className='bg-white rounded-md px-1 font-bold'>post now </button></li>

        </ul>
    </div>
    </nav>
   

    </div>
  )
}

export default Navbar