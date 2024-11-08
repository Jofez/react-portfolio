import React from 'react'
import styles from "../styles/experience.module.css"
import SV_Badge from "../images/Certified-website-developer-badge.jpeg"
import IBM_Badge from "../images/Watson_IoT_-_Max_7.6_Bootcamp.png"

export default function Certificates() {

    type CertificateProps = {
        id: number
        company: string
        title: string
        issued: Date
        badge: string
        link?: string
     
    }

    const certificates: CertificateProps[] = [
        {
            id: 1,
            company: "IBM",
            title: "IoT - Maximo 7.6 Bootcamp",
            issued: new Date("2020-11"),
            badge: IBM_Badge,
            link: "https://www.youracclaim.com/badges/156a5da6-eae5-4672-a02f-1b6696f4b408"
        },
        {
            id: 2,
            company: "Sitevision",
            title: "Certified Sitevision Website Developer",
            issued: new Date("2023-02"),
            badge: SV_Badge,
            link: "https://www.youracclaim.com/badges/156a5da6-eae5-4672-a02f-1b6696f4b408"
        },
    ]


    const formatDate = (date: Date) => {
        return date.toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "short"
        })
    }


  return (
    <>
        <h2>Certificates</h2>

        {certificates.map((c, index) => 
        <div key={index} className={styles.experienceCard} style={{ paddingBottom: "10px" }}>
            <div className={styles.experienceCardTop}>
                <div className={styles.experienceCardImage}>
                <img src={c.badge} alt='logo'
                    /> 
               
                 </div>

                <div className={styles.experienceCardTitle}>
                    <h4>{c.title}</h4>
                    <p>{c.company}</p>
                    <p>{formatDate(c.issued)}</p>
                    
                </div>

            </div>
        </div>
      )}


    </>
  )
}
