import React, { useState } from 'react'
import hamburgerLogo from '../images/burger-menu-right.svg'
import { HeaderProps } from './Types'
import { Link } from 'react-router-dom'
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';




export default function Header() {

  const headerItems: HeaderProps[] = [
    {
        id: 'hi-1',
        name: "Hem",
        link: "/"
    },
    {
        id: 'hi-2',
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        id: 'hi-3',
        name: "Erfarenhet",
        link: "/experiences"
    }
    ,
    {
        id: 'hi-4',
        name: "Utbildning",
        link: "/education"
    }
]

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
        <Link key={item.id}
            className=" text-2xl p-2 hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-400 border-t-4 border-b-4 border-transparent hover:border-t-4 focus:border-t-4 hover:border-b-4 focus:border-b-4 active:border-t-4 active:border-b-4 hover:border-yellow-400 focus:border-yellow-400 active:border-yellow-400 transition duration-500"
            to={item.link}>
            {item.name}
        </Link>
        )}
      </nav>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden max-w-lg:flex flex items-center outline-none focus:outline-white"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <img
          src={hamburgerLogo}
          alt="Menu"
          className={`opacity-80 hover:opacity-100 focus:opacity-100 active:opacity-100 transition-transform transform  ${isOpen ? 'rotate-90' : ''}`}
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
                <Link onClick={toggleMenu} key={item.id}
                   className=" text-2xl p-2 hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-400 border-t-4 border-b-4 border-transparent hover:border-t-4 focus:border-t-4 hover:border-b-4 focus:border-b-4 active:border-t-4 active:border-b-4 hover:border-yellow-400 focus:border-yellow-400 active:border-yellow-400 transition duration-500"
                    to={item.link}>
                    {item.name}
                </Link>
            )}
          
          </div>
        </nav>
      )}
    </header>

    </>
  )
}