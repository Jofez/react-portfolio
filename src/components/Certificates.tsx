import React, { useEffect, useState } from 'react'
import SV_Badge from "../images/Certified-website-developer-badge.webp"
import IBM_Badge from "../images/Watson_IoT_-_Max_7.6_Bootcamp.webp"
import { formatDate } from '../utils/dateUtils'
import { CertificateProps } from './Types'
import { Link } from 'react-router-dom'
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';



export default function Certificates() {

    const {t, i18n} = useTranslation();
    const [title, setTitle] = useState("Certifikat") 
    const showCert = "Visa certifikat"

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
            link: "https://verify.trueoriginal.com/21A5CBFC-44EA-1986-897E-C9E4F5EBE579/?ref=badge"
        },
    ]



  return (
    <>
    <h2 className='text-custom-title-fs'>{t("certificates-title")}</h2>

        {certificates.map((c, index) => 
        <div key={index} 
            className="max-w-[500px] sm:w-[500px] h-full border-[3px] border-border rounded-[3px] mt-0 mb-2 mx-2 pb-2"
        >
            <div className="flex justify-between flex-row-reverse" >
                <div className="flex flex-col justify-between m-1">
                    <Link to={c.link} target="_blank" rel="noopener noreferrer">
                        <img className='max-w-fit p-2  h-28 object-cover object-center w-28 transform translate-3d' 
                            src={c.badge} alt='logo' title={t("certificates-show")}
                        /> 
                    </Link>
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
