import * as React from 'react'
import {Link } from '@tanstack/react-router'

function Navbar() {
    return (
        <nav className='bg-gray-950'>
          <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex-shrink-0'>
                <Link to="/" className="text-white text-2xl font-bold no-underline">Homima</Link>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className='text-white hover:text-gray-500'>Home</Link>
                <Link to="/create-room" className='text-white hover:text-gray-500'>Create a room</Link>
                <Link to="/about" className="text-white hover:text-gray-500">About</Link>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;