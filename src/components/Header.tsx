import React, { useState } from 'react'
import styles from '../styles/header.module.css'
import hamburgerLogo from '../images/burger-menu-right.svg'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    
    <header className={styles.header}>
        <div className={styles.name}>
            Josef Holmberg
        </div>


        <nav className={styles.nav}>
            
        <button onClick={toggleMenu} className={styles.hamburger}
                style={{ background: "transparent", border: "none" }}
                >
        
                <img className={isOpen ? styles.isOpen : ''} 
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


            
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/portfolio" className={styles.navLink}>Portfolio</a>
            <a href="/experiences" className={styles.navLink}>Experiences</a>
            <a href="/education" className={styles.navLink}>Education</a>
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
