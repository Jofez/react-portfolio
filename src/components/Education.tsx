import React, { useState } from 'react'
import styles from '../styles/education.module.css'
import EducationCard from './EducationCard'

export default function Education() {

  const [title, setTitle] = useState("Utbildning");

  return (
    <>
    <div className="animate-fadeInSlow flex items-stretch w-11/12 sm:max-w-lg flex-col gap-4 md:gap-7"> 
        <h1 className='text-custom-title-fs'>{title}</h1>

            <EducationCard />

    </div>
    </>
    

)
}
