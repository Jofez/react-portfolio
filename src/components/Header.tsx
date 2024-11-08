import React from 'react'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <>
    
    <header className={styles.header}>
        <div className={styles.name}>
            Josef Holmberg
        </div>
        <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/portfolio" className={styles.navLink}>Portfolio</a>
            <a href="/experiences" className={styles.navLink}>Experiences</a>
            <a href="/education" className={styles.navLink}>Education</a>
        </nav>
    </header>

    </>
  )
}
