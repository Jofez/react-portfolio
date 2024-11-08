import React, { useEffect, useState } from 'react'
import styles from "../styles/experience.module.css"
import Certificates from './Certificates'
import Competences from './Competences'

export default function Experiences() {

    type DetailsProps = {
        description: string,
        languages: string
    }

    type ExperienceProps = {
        id: number
        company: string
        logo: string
        title: string
        fromDate: Date
        toDate: Date
        location: string
        isOpen: boolean
        details: DetailsProps
    }

    const initialExperiences: ExperienceProps[] = [
        {
            id: 3,
            company: "HiQ",
            logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFh0KySmx3Tag/company-logo_100_100/company-logo_100_100/0/1726734715519/hiq_logo?e=1738800000&v=beta&t=L_HnzsKo46sRKOS3r6KOdmAl_PPTfp8Vz2tK1t7rwD8",
            title: "Webbutvecklare",
            fromDate: new Date("2022-09"),
            toDate: new Date("2024-11"),
            location: "Örebro, Sweden",
            isOpen: false,
            details: { 
                description: "Nyutveckling och förvaltning av webbsidor med CMS:erna Sitevision och Optimizely. Visualisering av data i plattformen Ignition.", 
                languages: "HTML, SCSS, JavaScript, Vue, React, C#, .NET, Python" 
            } 
        },
        {
            id: 2,
            company: "Nexer Group",
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHyAfaO217dng/company-logo_200_200/company-logo_200_200/0/1688377751150/nexer_group_logo?e=1738800000&v=beta&t=n4t5TGZEJuM48gQUyIA6CA7f2ijSP8_jBXPUS1Fdoek",
            title: "Systemutvecklare",
            fromDate: new Date("2020-01"),
            toDate: new Date("2022-09"),
            location: "Örebro, Sweden",
            isOpen: false,
            details: { 
                description: "Arbetade med underhållssystemet IBM Maximo som utvecklades och konfigurerades till kunder. Var även med och utvecklade förenklade webappar av Maximos funktionalitet", 
                languages: "HTML, CSS, Javascript, Lit-elements, REST API" 
            }
        },
        {
            id: 1,
            company: "Bonliva",
            logo: "https://media.licdn.com/dms/image/v2/D4D0BAQF5VekOuJR0OA/company-logo_200_200/company-logo_200_200/0/1708082511190/bonliva_logo?e=1738800000&v=beta&t=D-YSuWl-BtmsusveOVtsCP7cLKSW2qdZLIcDJLGdRsQ",
            title: "Apputvecklare",
            fromDate: new Date("2019-01"),
            toDate: new Date("2019-06"),
            location: "Örebro, Sweden",
            isOpen: false,
            details: { 
                description: "Under femte terminen på min universitetsutbildning arbetade jag under kursen Systemutvecklingsprojekt på Bonliva. Var med och utvecklade en mobilapplikation för tidrapportering i React Native", 
                languages: "HTML, CSS, Javascript, React Native" 
            }
        }

    ]

    


    const [experiences, setExperiences] = useState<ExperienceProps[]>(initialExperiences);

    const toggleExperience = (index: number) => {
        setExperiences(prevExperiences =>
            prevExperiences.map((exp, i) =>
                i === index ? { ...exp, isOpen: !exp.isOpen } : exp
            )
        );
    }
 
    const formatDate = (date: Date) => {
        return date.toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "short"
        })
    }


  return (
    <>
    <h2>Experiences</h2>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "30px", }}>
    
    {experiences.map((m, index) => 
        <div key={m.id} className={styles.experienceCard}>
            <div className={styles.experienceCardTop}>
                <div className={styles.experienceCardImage}>
                <img src={m.logo} alt='logo'
                    /> 
                <button className={styles.experienceCardButton} onClick={() => toggleExperience(index)}>{m.isOpen ? "Visa mindre" : "Visa mer"}</button>
                 </div>

                <div className={styles.experienceCardTitle}>
                    <h4>{m.title}</h4>
                    <p>{m.company}</p>
                    <p>{formatDate(m.fromDate)} - {formatDate(m.toDate)}</p>
                    <p>{m.location}</p>
                </div>

            </div>
            {/* <hr /> */}
            {m.isOpen && (
                <div className={styles.experienceCardDetails}>
                    <ul className={styles.detailsList}>
                        <li>{m.details.description}</li>
                        <li>Språk: {m.details.languages} </li>
                    </ul>
                </div>
            )}
        </div>
      )}

      <Certificates />

      <Competences />

    </div>


    </>
  )
}
