import React, { useState } from 'react'
import hamburgerLogo from '../images/burger-menu-right.svg'
import { HeaderProps } from './Types'
import { Link } from 'react-router-dom'
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import  swedishFlag  from "../images/swe_flag.webp"
import  ukFlag  from "../images/uk_flag.webp"
import darkModeIcon from "../images/dark-mode.webp";
import lightModeIcon from "../images/light-mode.webp";

type Props = {
  darkMode: boolean;
  onToggleDarkMode: () => void;
};


export default function Header({darkMode, onToggleDarkMode}: Props) {
  const {t, i18n} = useTranslation();


  const headerItems: HeaderProps[] = [
    {
        id: 'hi-1',
        name: t("header-home"),
        link: "/"
    },
    {
        id: 'hi-2',
        name: t("header-portfolio"),
        link: "/portfolio"
    },
    {
        id: 'hi-3',
        name: t("header-experience"),
        link: "/experiences"
    }
    ,
    {
        id: 'hi-4',
        name: t("header-education"),
        link: "/education"
    }
]



    const toggleLanguage = () => {
      const newLanguage = i18n.language === 'en' ? 'sv' : 'en';
      i18n.changeLanguage(newLanguage);
      if (isOpen) toggleMenu();
    };

    const [headerTitle, setHeaderTitle] = useState("Josef Holmberg")
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleDarkMode = () => {
      onToggleDarkMode();
      if (isOpen) toggleMenu();
      
    }

  return (
    <>
    
    <header className={`${darkMode ? "dark" : "light"} flex justify-between items-center h-20 bg-header text-white px-5 lg:pl-16`}>
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

      {/* TEMP TRANSLATION BUTTON!!! */}
          <div className='flex flex-row'>

              <button
                className="hidden lg:flex w-16 h-10 md:w-14 md:h-8 text-custom-p-fs p-2 md:p-1 mx-0 my-2 outline-none border-0 border-solid border-white bg-transparent cursor-pointer hover:bg-hover-purple focus:bg-hover-purple transition duration-500"
                onClick={toggleLanguage}
                aria-label="Toggle language"
              > 
                <div className='flex flex-row justify-evenly items-center'>
                        {i18n.language === 'en' ?
                            <img className="w-5 h-5 mr-1" src={swedishFlag} alt='swedish-flag' />
                            :
                            <img className="w-5 h-5 mr-1" src={ukFlag} alt='english-flag' />
                        }
                  {t("change-language")}
                </div>
              </button>

              {/* DARK MODE BUTTON  */}

              <button
                className="hidden justify-center lg:flex w-8 h-10 md:w-10 md:h-8 text-custom-p-fs p-2 md:p-1 mx-0 my-2 outline-none border-0 border-solid border-white bg-transparent cursor-pointer hover:bg-hover-purple focus:bg-hover-purple transition duration-500"
                onClick={toggleDarkMode}
                aria-label="Toggle Dark mode"
                > 
                <div className='flex flex-row justify-evenly items-center'>
                {darkMode ?
                            <img className="w-5 h-5" src={lightModeIcon} alt='light-mode-icon' />
                            :
                            <img className="w-5 h-5" src={darkModeIcon} alt='dark-mode-icon' />
                          }
                </div>
              </button>
        </div>

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
        <nav className={`"lg:hidden z-10 border-b border-white absolute top-20 left-0 w-full bg-header text-white shadow-lg 
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
          <div className='flex flex-row'>
            <button
              className="w-16 h-10 md:w-14 md:h-8 text-custom-p-fs p-2 md:p-1 mx-0 my-2 outline-none border-0 border-solid border-white bg-transparent cursor-pointer hover:bg-hover-purple focus:bg-hover-purple transition duration-500"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              > 
                <div className='flex flex-row justify-evenly items-center'>
                        {i18n.language === 'en' ?
                            <img className="w-5 h-5" src={swedishFlag} alt='swedish-flag' />
                            :
                            <img className="w-5 h-5" src={ukFlag} alt='english-flag' />
                        }
                  {t("change-language")}
                </div>
              </button>

              <button
                className="w-16 h-10 md:w-14 md:h-8 text-custom-p-fs p-2 md:p-1 mx-0 my-2 outline-none border-0 border-solid border-white bg-transparent cursor-pointer hover:bg-hover-purple focus:bg-hover-purple transition duration-500"
                onClick={toggleDarkMode}
                aria-label="Toggle Dark mode"
                > 
                <div className='flex flex-row justify-evenly items-center'>
                {darkMode ?
                            <img className="w-5 h-5" src={lightModeIcon} alt='light-mode-icon' />
                            :
                            <img className="w-5 h-5" src={darkModeIcon} alt='dark-mode-icon' />
                          }
                </div>
              </button>
            </div>
              
          
          </div>
        </nav>
      )}
    </header>

    </>
  )
}