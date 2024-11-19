import React, { useEffect, useState } from 'react'
import styles from '../styles/footer.module.css'
import githubLogo from "../images/github-mark-white.svg"
import linkedInLogo from "../images/LinkedIn_icon.svg"

export default function Footer() {

    const [linkedInLink, setLinkedInLink] = useState("https://www.linkedin.com/in/josef-holmberg-2a8983195/")
    const [gitHubLink, setGitHubLink] = useState("https://github.com/Jofez/")
    const [name, setName] = useState("Josef Holmberg")
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        const now = new Date();
        setCurrentYear(now.getFullYear())
    }, [])


  return (
    <div className="grid h-60 bg-footer-color"
    >
        <ul className="list-none flex justify-center items-center m-0 px-0 py-2"
        >
            <a className=""
             href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <img className="h-14 w-14 mx-5 my-0  hover:opacity-50" 
                    alt="GitHub logo"
                    src={githubLogo}
                />
            </a>
            <a className=""
                href={linkedInLink} target="_blank" rel="noopener noreferrer" >
                <img
                    className="h-14 w-14 mx-5 my-0 hover:opacity-50"
                    alt="LinkedIn logo"
                    src={linkedInLogo}
                />
            </a>
        </ul>
        <div className="flex justify-center text-white"
        >
        © {currentYear} {name}
        </div>
    </div>
  )
}
