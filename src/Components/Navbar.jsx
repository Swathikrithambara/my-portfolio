import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <div>
       <div className="flex items-center justify-between h-16 px-8  relative z-10">
  {/* Logo */}
  <div className="flex items-center">
    <h3 className="text-xl font-bold text-[#ed8f03]">S</h3>
  </div>

  {/* Navigation */}
  {/* <ul className="flex items-center space-x-10">
    <li className="hover:text-amber-900 cursor-pointer text-amber-400">Home</li>
    <li className="hover:text-amber-900 cursor-pointer text-amber-400">About Me</li>
    <li className="hover:text-amber-900 cursor-pointer text-amber-400">Projects</li>
    <li className="hover:text-amber-900 cursor-pointer text-amber-400">Contact Me</li>
  </ul> */}

  {/* Button (optional) */}
  <div className="flex items-center">
  <ThemeToggle/>
  </div>
</div>

  
    </div>
  )
}
