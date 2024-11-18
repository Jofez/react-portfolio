import React, { useState } from 'react'
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
            name: "C#",
            type: "Language"
        },
        {
            id: 3,
            name: ".NET",
            type: "Language"
        },
        {
            id: 4,
            name: "Javascript",
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
            name: "Vue.js",
            type: "Language"
        },
        {
            id: 8,
            name: "Lit",
            type: "Language"
        },

        {
            id: 9,
            name: "HTML",
            type: "Language"
        },
        {
            id: 10,
            name: "CSS",
            type: "Language"
        },
        {
            id: 11,
            name: "SCSS",
            type: "Language"
        },

        {
            id: 12,
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
        {
            id: 34,
            name: "GitHub",
            type: "Tool"
        },
    ]

    const [title, setTitle] = useState("Competences") 

  return (



    <>
    <h2 className='text-custom-title-fs'>{title}</h2>

    <div className='max-w-[500px] sm:w-[500px] h-full border-[3px] border-white rounded-[3px] mt-0 mb-2 mx-2 py-2'
    >

                <div className="m-0">

                    <h3 className='font-bold text-custom-heading-fs'>Språk:  </h3>
                    <div className="flex flex-row justify-center flex-wrap gap-y-0 gap-x-2 px-2 py-0" >
                        <br />
                            {competences.filter(c => c.type === "Language").map(fi => (
                        <p className="bg-white text-primary-blue border-[3px] border-transparent rounded-[5px] px-1 py-1 mx-0 my-2 ">
                            {fi.name}  
                            </p>
                        ))}
                    </div>

                    <h3 className='font-bold text-custom-heading-fs'>Verktyg:  </h3>
                    <div className="flex flex-row justify-center flex-wrap gap-y-0 gap-x-2 px-2 py-0">
                            {competences.filter(c => c.type === "Tool").map(fi => (
                        <p className="bg-white text-primary-blue border-[3px] border-transparent rounded-[5px] px-1 py-1 mx-0 my-2 " 
                        >{fi.name} 
                         </p>
                    ))}
                    </div>

                    <h3 className='font-bold text-custom-heading-fs'>CMS:  </h3>
                    <div className="flex flex-row justify-center flex-wrap gap-y-0 gap-x-2 px-2 py-0">
                            {competences.filter(c => c.type === "CMS").map(fi => (
                        <p className="bg-white text-primary-blue border-[3px] border-transparent rounded-[5px] px-1 py-1 mx-0 my-2 ">
                            {fi.name}  
                            </p>
                    ))}
                    </div>
                   
                </div>
    </div>
    </>
  )
}
