import React from 'react'
import styles from "../styles/portfolio.module.css"
import reactLogo from "../images/React-icon.svg.png"
import tsLogo from "../images/Typescript_logo_2020.svg.png"

export default function Portfolio() {

    type LogoPortfolioProps = {
        id: number
        src: string
        name: string
    }

    type PortfolioProps = {
        id: number
        name: string
        description: string
        createdWith: LogoPortfolioProps[]
    }

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
    ]

    const portfolio: PortfolioProps[] = [
        {
            id: 1,
            name: "Portfolio",
            description: "Hemsida för att visa upp erfarenheter och profil. Fokuserat på front-end-tekniker.",
            createdWith: logoPortfolio
        }
    ]



  return (
   <div className={styles.portfolio}>


        <h1 className={styles.title}>Portfolio</h1>
        <div className={styles.portfolioCard} >
            

            {portfolio.map((p, index) => 
                (
                <div key={index}>

                    <h4 >{p.name}</h4>
                    <p>{p.description}</p>
                    {p.createdWith.map(c =>

                        <img style={{ width: "50px", height: "50px", objectFit: "contain", objectPosition: "center" }}
                            src={c.src} 
                            alt={c.name}
                        />
                    )
                    }
                   
                </div>
            
            ))}

        </div>
    </div>
  )
}
