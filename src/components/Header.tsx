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
    
    <header className="flex justify-end items-center h-20 text-white bg-header-color  "
        // {styles.header}
    >
        <div className="flex justify-start pl-5 md:pl-20 w-full text-custom-heading-fs"
            // {styles.name}
        >
            {headerTitle}
        </div>


        <nav className={styles.nav}>
            
        <button onClick={toggleMenu} 
            className="opacity-80 hover:opacity-100"
            // {styles.hamburger}
            style={{ background: "transparent", border: "none" }}
                >
        
                <img className={isOpen ? 'rotate-90' : ''} 
                    src={hamburgerLogo} 
                    style={{ width: "50px", height: "50px" }} 
                    alt="menuLogo"
                    />
            </button>

            {/* {isOpen && (
            <div className={styles.hamburgerMenu}>
            <a href="/" >Home</a>
            <a href="/portfolio" >Portfolio</a>
            <a href="/experiences" >Experiences</a>
            <a href="/education" >Education</a>
            </div>
        )} */}

    {!isOpen && ( 
        <>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/portfolio" className={styles.navLink}>Portfolio</a>
        <a href="/experiences" className={styles.navLink}>Experiences</a>
        <a href="/education" className={styles.navLink}>Education</a>
        </>
    )}
    </nav>
    </header>

    {isOpen && (
        <nav className={styles.nav}>

            <div className={styles.hamburgerMenu}>
            <a href="/" >Home</a>
            <a href="/portfolio" >Portfolio</a>
            <a href="/experiences" >Experiences</a>
            <a href="/education" >Education</a>
            </div>
        </nav>
        )}

    </>
  )
}
