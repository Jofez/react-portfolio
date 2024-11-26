import React, { useState } from 'react'
import SV_Badge from "../images/Certified-website-developer-badge.jpeg"
import IBM_Badge from "../images/Watson_IoT_-_Max_7.6_Bootcamp.png"
import { formatDate } from '../utils/dateUtils'
import { CertificateProps } from './Types'

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

export default function Certificates() {
    
    const [title, setTitle] = useState("Certifikat") 

  return (
    <>
    <h2 className='text-custom-title-fs'>{title}</h2>

        {certificates.map((c, index) => 
        <div key={index} 
            className="max-w-[500px] sm:w-[500px] h-full border-[3px] border-white rounded-[3px] mt-0 mb-2 mx-2 pb-2"
        >
            <div className="flex justify-between flex-row-reverse" >
                <div className="flex flex-col justify-between m-1">
                    <img className='max-w-none p-2  h-28 object-cover object-center w-28 transform translate-3d' 
                        src={c.badge} alt='logo'
                    /> 
                 </div>

                <div className="flex flex-col justify-start text-left">
                    <h2 className='text-custom-heading-fs m-0 px-2 pt-2 pb-0'>{c.title}</h2>
                    <p className='text-custom-subheading-fs m-0 pt-1 pr-2 pb-0 pl-5'>{c.company}</p>
                    <p className='text-custom-p-fs m-0 pt-1 pr-2 pb-0 pl-5'>{formatDate(c.issued)}</p>
                </div>
            </div>
        </div>
      )}
    </>
  )
}
