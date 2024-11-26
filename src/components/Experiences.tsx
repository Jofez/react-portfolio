import React, { useState } from 'react'
import Certificates from './Certificates'
import Competences from './Competences'
import { formatDate } from '../utils/dateUtils'
import { ExperienceProps } from './Types'

const initialExperiences: ExperienceProps[] = [
    {
        id: 3,
        company: "HiQ",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFh0KySmx3Tag/company-logo_100_100/company-logo_100_100/0/1726734715519/hiq_logo?e=1738800000&v=beta&t=L_HnzsKo46sRKOS3r6KOdmAl_PPTfp8Vz2tK1t7rwD8",
        title: "Webbutvecklare",
        fromDate: new Date("2022-09"),
        toDate: new Date("2024-11"),
        location: "Örebro, Sweden",
        isOpen: false,
        details: { 
            description: "Nyutveckling och förvaltning av webbsidor med CMS:erna Sitevision och Optimizely. Visualisering av data i plattformen Ignition.", 
            languages: "HTML, SCSS, JavaScript, Vue, React, C#, .NET, Python" 
        } 
    },
    {
        id: 2,
        company: "Nexer Group",
        logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHyAfaO217dng/company-logo_200_200/company-logo_200_200/0/1688377751150/nexer_group_logo?e=1738800000&v=beta&t=n4t5TGZEJuM48gQUyIA6CA7f2ijSP8_jBXPUS1Fdoek",
        title: "Systemutvecklare",
        fromDate: new Date("2020-01"),
        toDate: new Date("2022-09"),
        location: "Örebro, Sweden",
        isOpen: false,
        details: { 
            description: "Arbetade med underhållssystemet IBM Maximo som utvecklades och konfigurerades till kunder. Var även med och utvecklade förenklade webappar av Maximos funktionalitet", 
            languages: "HTML, CSS, Javascript, Lit-elements, REST API" 
        }
    },
    {
        id: 1,
        company: "Bonliva",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQF5VekOuJR0OA/company-logo_200_200/company-logo_200_200/0/1708082511190/bonliva_logo?e=1738800000&v=beta&t=D-YSuWl-BtmsusveOVtsCP7cLKSW2qdZLIcDJLGdRsQ",
        title: "Apputvecklare",
        fromDate: new Date("2019-01"),
        toDate: new Date("2019-06"),
        location: "Örebro, Sweden",
        isOpen: false,
        details: { 
            description: "Under femte terminen på min universitetsutbildning arbetade jag under kursen Systemutvecklingsprojekt på Bonliva. Var med och utvecklade en mobilapplikation för tidrapportering i React Native", 
            languages: "HTML, CSS, Javascript, React Native" 
        }
    }
]

export default function Experiences() {

    const [title, setTitle] = useState("Erfarenhet")
    const [experiences, setExperiences] = useState<ExperienceProps[]>(initialExperiences);

    const toggleExperience = (index: number) => {
        setExperiences(prevExperiences =>
            prevExperiences.map((exp, i) =>
                i === index ? { ...exp, isOpen: !exp.isOpen } : exp
            )
        );
    }


  return (
    <>
    <div className='animate-fadeInSlow flex flex-col justify-between  gap-4 lg:gap-7' >
    <h1 className='text-custom-title-fs'>{title}</h1>
    
    {experiences.map((m, index) => 
        <div key={m.id} 
            className='max-w-[500px] sm:w-[500px] h-full border-[3px] border-white rounded-[3px] mt-0 mb-2 mx-2'
        >
            {/* px-5 pt-0 pb-2 bg-transparent"  */}
            <div className='flex justify-between flex-row-reverse'>
                <div className='flex flex-col justify-between m-1 items-end'>
                <img className='p-2 w-28 h-28 object-cover object-center  transform translate-x-0 translate-y-0 translate-z-[0.1px]'
                src={m.logo} alt='logo'
                    /> 
                <button className="text-custom-subheading-fs bg-transparent text-white cursor-pointer border-white border-2 border-solid py-1 px-2 hover:bg-hover-purple focus:bg-hover-purple transition duration-500 mr-2 mb-1"
                    onClick={() => toggleExperience(index)}>{m.isOpen ? "Visa mindre" : "Visa mer"}</button>
                 </div>

                <div className="flex flex-col justify-start text-left">
                    <h2 className='text-custom-heading-fs m-0 px-2 pt-2 pb-0'>{m.title}</h2>
                    <p className='text-custom-subheading-fs m-0 pt-1 pr-2 pb-0 pl-5'>{m.company}</p>
                    <p className='text-custom-p-fs m-0 pt-1 pr-2 pb-0 pl-5'>{formatDate(m.fromDate)} - {formatDate(m.toDate)}</p>
                    <p className='text-custom-p-fs m-0 pt-1 pr-2 pb-0 pl-5'>{m.location}</p>
                </div>

            </div>
            {m.isOpen && (
                <div className="flex flex-col items-start pr-5">
                    <ul className="pl-8 mx-2">
                        <li key={m.details.description} className='text-custom-p-fs text-left mt-1 mb-2'>{m.details.description}</li>
                        <li key={m.details.languages} className='text-custom-p-fs text-left mb-2'>Språk: {m.details.languages} </li>
                    </ul>
                </div>
            )}
        </div>
      )}

      <Certificates />

      <Competences />

    </div>


    </>
  )
}
