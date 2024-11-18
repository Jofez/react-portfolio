import React, { useState } from 'react'
import styles from '../styles/education.module.css'
import EducationCard from './EducationCard'

export default function Education() {

  const [title, setTitle] = useState("Utbildning");

  return (
    <>
    <div className="animate-fadeInSlower flex items-stretch w-11/12 sm:max-w-lg flex-col gap-4 md:gap-7"> 
       {/* {styles.education} */}
        <h1 className='text-custom-title-fs'>{title}</h1>

            <EducationCard />

    </div>
    </>
    

)
}
