import React, { useEffect, useState } from 'react'
import githubLogo from "../images/github-mark-white.svg"
import linkedInLogo from "../images/LinkedIn_icon.svg"

type FooterLinkProps = {
    id: string,
    name: string,
    logo: string,
    link: string
}

const footerLinks: FooterLinkProps[] = [
    {
    id: 'fl-1',
    name: "GitHub",
    logo: githubLogo,
    link: "https://github.com/Jofez/"
    },
    {
    id: 'fl-2',
    name: "LinkedIn",
    logo: linkedInLogo,
    link: "https://www.linkedin.com/in/josef-holmberg-2a8983195/"
    },
]

export default function Footer() {

    const [name, setName] = useState("Josef Holmberg")
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    

    useEffect(() => {
        const now = new Date();
        setCurrentYear(now.getFullYear())
    }, [])


  return (
    <div className="grid h-60 bg-footer-color"
    >
        <div className="list-none flex justify-center items-center m-0 px-0 py-2"
        >
            {footerLinks.map(f => (
                
                <a id={f.id} className=""
                    href={f.link} target="_blank" rel="noopener noreferrer" >
                    <img
                        className="h-14 w-14 mx-5 my-0 hover:opacity-50"
                        alt=" logo"
                        src={f.logo}
                        />
                </a>
            ))}
        </div>
        <div className="flex justify-center text-white"
        >
        © {currentYear} {name}
        </div>
    </div>
  )
}
