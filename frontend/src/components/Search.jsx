import React from 'react'

const Search = () => {
  return (
    <div>
    {/*div containing the welocme text */}
        <div>
        <h1 className='text-lg flex justify-center mt-20'>Welcome back lets continue your search</h1>
        </div>

        {/* div containing sub nav */}
        <div>
        <nav className='flex mt-5 justify-center'>
        <li className='list-none px-5 hover:bg-red-500 hover:p-1 hover:text-white'>rent</li>
        <li className='list-none px-5 hover:bg-red-500 hover:p-1 hover:text-white'>new project</li>
        <li className='list-none px-5 hover:bg-red-500 hover:p-1 hover:text-white'>buy</li>
        <li className='list-none px-5 hover:bg-red-500 hover:p-1 hover:text-white'>pg</li>
        <li className='list-none px-5 hover:bg-red-500 hover:p-1 hover:text-white'>plot</li>
        <li className='list-none px-5 hover:bg-red-500 hover:p-1 hover:text-white'>commercial</li>
        </nav>
        </div>
        {/* div containing search bar*/}

        <div className='px-10'>
        <div className='border-2 mt-3 border-gray-400 rounded-full p-1 '>
        <div className='flex justify-between px-5'>
        <input className='p-2' placeholder='search for the property'></input>
        <button className='bg-red-500 px-2 py-1 text-white rounded-lg'>search</button>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Search