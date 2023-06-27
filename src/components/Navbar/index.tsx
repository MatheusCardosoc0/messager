import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50">
      <div
        className="
          TRIANGLE
          relative
          h-[160px]    
          w-[160px]
          bg-gradient-to-tr
          from-indigo-700
          via-purple-500
          to-amber-400
          drop-shadow-[10px_10px_0px_#d7d4d4a3]
        "
      >
        <Image
          src={'/Logo.png'}
          width={520}
          height={480}
          alt="Logo"
          className="absolute bottom-1 right-1 h-20 w-20"
        />
      </div>
    </nav>
  )
}

export default Navbar
