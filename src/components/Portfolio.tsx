import React, { useState } from 'react'
import reactLogo from "../images/logo192.png"
import tsLogo from "../images/Typescript_logo_2020.svg.png"
import twLogo from '../images/Tailwind_CSS_Logo.svg'
import gitHubLogo from '../images/github-mark.svg'
import { PortfolioProps, LogoPortfolioProps } from './Types'
import { Link } from 'react-router-dom'
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';



export default function Portfolio() {

    const {t, i18n} = useTranslation();
    const [title, setTitle] = useState("Portfolio")

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
            description: t("portfolio-description"),
            createdWith: logoPortfolio,
            repositoryLink: "https://github.com/Jofez/react-portfolio"
        }
    ]


    return (
        <div className=" flex flex-col gap-7">
            <h1 className='text-custom-title-fs'>
                {title}
            </h1>
        <div 
        className="max-w-[500px] sm:w-[500px] h-full border-[3px] border-border rounded-[3px] gap-7 mx-2 mt-0 mb-2 pt-0 px-2 pb-1"
        >
            {portfolio.map((p, index) => (
                <div className='flex flex-col gap-5' key={index}>
                    <h2 className=' text-custom-heading-fs mt-2' >{p.name}</h2>
                    <p className='text-custom-subheading-fs'>{p.description}</p>
                    <div className='flex flex-row justify-center flex-wrap gap-2'>
                        {p.createdWith.map(logo =>
                            <img className='w-12 h-12 object-contain object-center'
                                key={logo.id}
                                src={logo.src} 
                                alt={logo.name}
                                title={logo.name}
                            />
                        )}
                    </div>
                    <div className='flex justify-center mb-2'>
                    <Link className=""
                        to={p.repositoryLink} target="_blank" rel="noopener noreferrer" >
                        <img className='w-12 h-12 object-contain object-center hover:opacity-50'
                                    src={gitHubLogo} 
                                    alt="logo"
                        />
                    </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
