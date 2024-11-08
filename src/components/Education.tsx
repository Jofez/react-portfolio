import React from 'react'
import styles from '../styles/education.module.css'
import EducationCard from './EducationCard'

export default function Education() {
  return (
    <>
    <div className={styles.education}>
        <h1 className={styles.title}>Utbildning</h1>

            <EducationCard />

    </div>
    </>
    

)
}
