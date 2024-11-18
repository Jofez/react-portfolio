import React, { useState } from 'react'
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
    
    const [title, setTitle] = useState("Certificates") 

  return (
    <>
        <h2 className='text-custom-title-fs'>{title}</h2>

        {certificates.map((c, index) => 
        <div key={index} 
            className="max-w-[500px] sm:w-[500px] h-full border-[3px] border-white rounded-[3px] mt-0 mb-2 mx-2 pb-2"
            // {styles.experienceCard} 
        >
            <div className="flex justify-between flex-row-reverse"
            // {styles.experienceCardTop}
            >
                <div className="flex flex-col justify-between m-1"
                // {styles.experienceCardImage}
                    >
                <img className='p-2 w-28 h-28 object-cover object-center  transform translate-3d'
                    src={c.badge} alt='logo'
                    /> 
               
                 </div>

                <div className="flex flex-col justify-start text-left"
                // {styles.experienceCardTitle}
                >
                    <h4 className='text-custom-heading-fs m-0 px-2 pt-2 pb-0'>{c.title}</h4>
                    <p className='text-custom-subheading-fs m-0 pt-1 pr-2 pb-0 pl-5'>{c.company}</p>
                    <p className='text-custom-p-fs m-0 pt-1 pr-2 pb-0 pl-5'>{formatDate(c.issued)}</p>
                    
                </div>

            </div>
        </div>
      )}


    </>
  )
}
