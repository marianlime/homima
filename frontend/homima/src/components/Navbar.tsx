import * as React from 'react'
import {Link } from '@tanstack/react-router'

function Navbar() {
    return (
        <nav className='bg-linear-to-bl from blue-300 to-blue-500'>
          <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex-shrink-0'>
                <Link to="/" className="text-white text-2xl font-bold no-underline">Homima</Link>
              </div>
              <div></div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;