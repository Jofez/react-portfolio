import React, { useState } from 'react'
import reactLogo from "../images/React-icon.svg.png"
import tsLogo from "../images/Typescript_logo_2020.svg.png"
import twLogo from '../images/Tailwind_CSS_Logo.svg'
import gitHubLogo from '../images/github-mark.svg'
import { PortfolioProps, LogoPortfolioProps } from './Types'

const logoPortfolio: LogoPortfolioProps[] = [
    {
        id: 1,
        src: reactLogo,
        name: "React",
    },
    {
        id: 2,
        src: tsLogo,
        name: "TypeScript",
    },
    {
        id: 3,
        src: twLogo,
        name: "Tailwind",
    },
]

const portfolio: PortfolioProps[] = [
    {
        id: 1,
        name: "Portfolio",
        description: "Hemsida för att visa upp erfarenheter och profil. Fokuserat på front-end-tekniker.",
        createdWith: logoPortfolio,
        repositoryLink: "https://github.com/Jofez/react-portfolio"
    }
]

export default function Portfolio() {

    const [title, setTitle] = useState("Portfolio")

    return (
        <div className="animate-fadeInSlow flex flex-col gap-7">
            <h1 className='text-custom-title-fs'>
                {title}
            </h1>
        <div 
        className="max-w-[500px] sm:w-[500px] h-full border-[3px] border-white rounded-[3px] gap-7 mx-2 mt-0 mb-2 pt-0 px-2 pb-1"
        >
            {portfolio.map((p, index) => (
                <div className='flex flex-col gap-5' key={index}>
                    <h2 className=' text-custom-heading-fs mt-2' >{p.name}</h2>
                    <p className='text-custom-subheading-fs'>{p.description}</p>
                    <div className='flex flex-row justify-center flex-wrap gap-2'>
                        {p.createdWith.map(c =>
                            <img className='w-12 h-12 object-contain object-center'
                                src={c.src} 
                                alt={c.name}
                                title={c.name}
                            />
                        )}
                    </div>
                    <div className='flex justify-center mb-2'>
                    <a className=""
                        href={p.repositoryLink} target="_blank" rel="noopener noreferrer" >
                        <img className='w-12 h-12 object-contain object-center hover:opacity-50'
                                    src={gitHubLogo} 
                                    alt="logo"
                        />
                    </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
