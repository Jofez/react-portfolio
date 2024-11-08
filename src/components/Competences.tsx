import React from 'react'
import styles from '../styles/experience.module.css'

export default function Competences() {
    

    type CompetenceProps = {
        id: number
        name: string
        type: string
    }

    const competences: CompetenceProps[] = [
        {
            id: 1,
            name: "Java",
            type: "Language"
        },
        {
            id: 2,
            name: "Javascript",
            type: "Language"
        },
        {
            id: 3,
            name: "C#",
            type: "Language"
        },
        {
            id: 4,
            name: ".NET",
            type: "Language"
        },
        {
            id: 5,
            name: "React",
            type: "Language"
        },
        {
            id: 6,
            name: "React Native",
            type: "Language"
        },
        {
            id: 7,
            name: "HTML",
            type: "Language"
        },
        {
            id: 8,
            name: "CSS",
            type: "Language"
        },
        {
            id: 9,
            name: "SCSS",
            type: "Language"
        },
        {
            id: 10,
            name: "Vue.js",
            type: "Language"
        },
        {
            id: 11,
            name: "SQL",
            type: "Language"
        },

        {
            id: 21,
            name: "Sitevision",
            type: "CMS"
        },
        {
            id: 22,
            name: "Optimizely",
            type: "CMS"
        },

        {
            id: 31,
            name: "IBM Maximo",
            type: "Tool"
        },
        {
            id: 32,
            name: "Azure DevOps",
            type: "Tool"
        },
        {
            id: 33,
            name: "Ignition",
            type: "Tool"
        },
    ]


  return (
    <>
            <h2>Competences</h2>

    <div  className={styles.competenceCard} style={{ padding: "10px 0px" }}>

                <div className={styles.competenceContent}>

                    <h4 style={{ fontWeight: "bold" }}>Språk:  </h4>
                    <div className={styles.competenceTypes} >
                        <br />
                            {competences.filter(c => c.type === "Language").map(fi => (
                        <p className={styles.competenceItems}>{fi.name}  </p>
                        ))}
                    </div>

                    <h4 style={{ fontWeight: "bold" }}>Verktyg:  </h4>
                    <div className={styles.competenceTypes}>
                            {competences.filter(c => c.type === "Tool").map(fi => (
                        <p className={styles.competenceItems} >{fi.name}  </p>
                    ))}
                    </div>

                    <h4 style={{ fontWeight: "bold" }}>CMS:  </h4>
                    <div className={styles.competenceTypes}>
                            {competences.filter(c => c.type === "CMS").map(fi => (
                        <p className={styles.competenceItems}>{fi.name}  </p>
                    ))}
                    </div>
                   
                </div>
    </div>
    </>
  )
}
