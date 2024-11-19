import React, { useState } from 'react'
import styles from '../styles/header.module.css'
import hamburgerLogo from '../images/burger-menu-right.svg'


export default function Header() {

    const [headerTitle, setHeaderTitle] = useState("Josef Holmberg")
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    
    <header className="flex justify-between items-center h-20 bg-header-color text-white px-5 lg:px-16">
      {/* Header Title */}
      <div className="sm:text-3xl text-2xl font-bold">
        {headerTitle}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6 ">
        <a href="/" className="text-2xl hover:underline hover:text-cyan-300">Home</a>
        <a href="/portfolio" className="text-2xl hover:underline hover:text-cyan-300 ">Portfolio</a>
        <a href="/experiences" className="text-2xl hover:underline hover:text-cyan-300">Experiences</a>
        <a href="/education" className="text-2xl hover:underline hover:text-cyan-300">Education</a>
      </nav>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden max-w-lg:flex flex items-center focus:outline-none group "
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <img
          src={hamburgerLogo}
          alt="Menu"
          className={` hover:filter grayscale-80 transition-transform transform  ${isOpen ? 'rotate-90' : ''} group-hover:text-green-500`}
          style={{ width: '50px', height: '50px', color: "currentColor" }}
        />
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden z-10 border-b border-white absolute top-20 left-0 w-full bg-header-color text-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4 gap-7 transition-all duration-1100">
            <a href="/" className="hover:underline hover:text-cyan-300">Home</a>
            <a href="/portfolio" className="hover:underline hover:text-cyan-300">Portfolio</a>
            <a href="/experiences" className="hover:underline hover:text-cyan-300">Experiences</a>
            <a href="/education" className="hover:underline hover:text-cyan-300">Education</a>
          </div>
        </nav>
      )}
    </header>

    </>
  )
}
