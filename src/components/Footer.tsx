import React, { useState } from 'react'
import styles from '../styles/footer.module.css'
import githubLogo from "../images/github-mark.svg"
import linkedInLogo from "../images/LinkedIn_icon.svg"

export default function Footer() {

    const [linkedInLink, setLinkedInLink] = useState("https://www.linkedin.com/in/josef-holmberg-2a8983195/")
    const [gitHubLink, setGitHubLink] = useState("https://github.com/Jofez/")
    const [name, setName] = useState("Josef Holmberg")

    let year = new Date().getFullYear()
    console.log(year)


  return (
    <div className={styles.footer}>

        <ul className={styles.footerIcons}>
            <a className={styles.footerLink} href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <img id={styles.gitHubImage}  className={styles.footerImage} alt="GitHub logo" src={githubLogo} />
                
            </a>
            <a className={styles.footerLink} href={linkedInLink} target="_blank" rel="noopener noreferrer" >
                <img className={styles.footerImage} alt="LinkedIn logo" src={linkedInLogo} />
            </a>
        </ul>
        <div className={styles.footerName}>
        © {year} {name}
        </div>
    </div>
  )
}
