import React, { useState } from 'react'
// import styles from '../styles/header.module.css'
import hamburgerLogo from '../images/burger-menu-right.svg'

type HeaderProps = {
    id: string,
    name: string,
    link: string
}

const headerItems: HeaderProps[] = [
    {
        id: 'hi-1',
        name: "Home",
        link: "/"
    },
    {
        id: 'hi-2',
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        id: 'hi-3',
        name: "Experiences",
        link: "/experiences"
    }
    ,
    {
        id: 'hi-4',
        name: "Education",
        link: "/education"
    }
]


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
      <div className="sm:text-3xl text-2xl">
        {headerTitle}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6 ">
        {headerItems.map(item => 
            <a href={item.link}
                className="text-2xl p-2 hover:text-teal-300 border-t-4 border-b-4 border-transparent hover:border-t-4 hover:border-b-4 hover:border-teal-300 transition duration-200">
                {item.name}
            </a>
            )}
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
          className={` hover:filter contrast-150 grayscale-80 transition-transform transform  ${isOpen ? 'rotate-90' : ''} group-hover:text-green-500`}
          style={{ width: '50px', height: '50px', color: "currentColor" }}
          aria-hidden={!isOpen}
        />
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className={`"lg:hidden z-10 border-b border-white absolute top-20 left-0 w-full bg-header-color text-white shadow-lg 
            transition-all duration-1000 ease-in-out transform ${ isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
    }`}>
          <div className="flex flex-col items-center space-y-4 py-4 gap-7">
            {headerItems.map(item => 
                <a href={item.link} 
                    className="text-2xl p-2 border-t-4 border-b-4 border-transparent hover:border-t-4 hover:border-b-4 hover:border-teal-300 transition duration-200 hover:text-teal-300 ">
                    {item.name}
                </a>
            )}
          
          </div>
        </nav>
      )}
    </header>

    </>
  )
}
