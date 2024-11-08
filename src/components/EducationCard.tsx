import React from 'react'
import styles from '../styles/education.module.css'
import githubLogo from "../images/github-mark.svg"

export default function EducationCard() {

    type EducationProps = {
        id: number
        school: string
        level: string
        program: string
        startYear: Date
        endYear: Date

    }

    const education: EducationProps[] = [
        {
            id: 1,
            school: "IT-Gymnasiet Södertörn",
            level: "Gymnasieexamen",
            program: "Systemvetenskapliga programmet",
            startYear: new Date("2007-08"),
            endYear: new Date("2010-06")
        },
        {
            id: 2,
            school: "Örebro Universitet",
            level: "Kandidatexamen",
            program: "Systemvetenskapliga programmet",
            startYear: new Date("2017-01"),
            endYear: new Date("2020-01")
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
    <div className={styles.educationContainer}>

        {education.map((edu, index) => 
            <div className={styles.school} key={index}>
                {/* <img src={githubLogo} style={{ height: "50px", width: "50px"}} /> */}
                <h2>{edu.school}</h2>
                <hr></hr>
                <p>{edu.program}</p>
                <p>{edu.level}</p>
                <p>{formatDate(edu.startYear)} - {formatDate(edu.endYear)}</p>
            </div>
        )}

    </div>
    </>



  )
}
