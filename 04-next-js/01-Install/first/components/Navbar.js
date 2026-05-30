import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">Shivam-dev-here</h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/projects" className="hover:text-gray-400">Projects</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
