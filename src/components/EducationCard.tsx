import React from 'react'
import { formatDate } from '../utils/dateUtils'
import { EducationProps } from './Types'
import { useTranslation } from 'react-i18next';

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

export default function EducationCard() {

        const {t, i18n} = useTranslation();

  return (
    <>
    <div className="flex justify-center flex-col-reverse gap-7 mb-7 max-w-lg ">
        {education.map((edu, index) => 
            <div className="flex flex-col gap-4 lg:w-[500px] h-full  border-[3px] border-white rounded-[3px] px-5 pt-2 pb-2 bg-transparent" 
                key={index}
            >
              
                <h2 className='text-custom-heading-fs p-2'>{edu.school}</h2>
                <hr></hr>
                <p className='text-custom-subheading-fs' >{edu.program}</p>
                <p className='text-custom-p-fs' >{edu.level}</p>
                <p>{formatDate(edu.startYear)} - {formatDate(edu.endYear)}</p>
            </div>
        )}

    </div>
    </>



  )
}
