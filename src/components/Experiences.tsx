import React, { useEffect, useState } from 'react'
import Certificates from './Certificates'
import Competences from './Competences'
import { formatDate } from '../utils/dateUtils'
import { ExperienceProps } from './Types'
import bonlivaLogo from "../images/bonliva_logo.webp"
import nexerLogo  from "../images/nexer_group_logo.webp"
import hiqLogo  from "../images/hiq_logo.webp"
import tsLogo from "../images/TS_logo.webp"
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import JSConfetti from 'js-confetti'



export default function Experiences() {

    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
        emojis: ['🤠', '⚡️', '💥', '✨', '🚀', '👨‍💻'],
     })
    const {t, i18n} = useTranslation();
    const [experiences, setExperiences] = useState<ExperienceProps[]>([]);

    const updateExperiences = () => {
        setExperiences([
            {
                id: 4,
                company: t("experiences-4-company"),
                logo: tsLogo,
                title: t("experiences-4-title"),
                fromDate: new Date("2025-03"),
                toDate: undefined,
                location: t("experiences-4-location"),
                isOpen: false,
                details: { 
                    description: t("experiences-4-details-description"), 
                    languages: "HTML, SCSS, C#, .NET, Blazor, SQL, Javascript " 
                } 
            },
        {
            id: 3,
            company: "HiQ",
            logo: hiqLogo,
            title: t("experiences-3-title"),
            fromDate: new Date("2022-09"),
            toDate: new Date("2024-11"),
            location: t("experiences-3-location"),
            isOpen: false,
            details: { 
                description: t("experiences-3-details-description"), 
                languages: "HTML, SCSS, JavaScript, Vue, React, C#, .NET, Python" 
            } 
        },
        {
            id: 2,
            company: "Nexer Group",
            logo: nexerLogo,
            title: t("experiences-2-title"),
            fromDate: new Date("2020-01"),
            toDate: new Date("2022-09"),
            location: t("experiences-2-location"),
            isOpen: false,
            details: { 
                description: t("experiences-2-details-description"), 
                languages: "HTML, CSS, Javascript, Lit-elements, REST API" 
            }
        },
        {
            id: 1,
            company: "Bonliva",
            logo: bonlivaLogo,
            title: t("experiences-1-title"),
            fromDate: new Date("2019-01"),
            toDate: new Date("2019-06"),
            location: t("experiences-1-location"),
            isOpen: false,
            details: { 
                description: t("experiences-1-details-description"), 
                languages: "HTML, CSS, Javascript, React Native" 
            }
        }
    ]);
    };



    const [title, setTitle] = useState(t("experiences-title"))


    const toggleExperience = (index: number) => {
        setExperiences(prevExperiences =>
            prevExperiences.map((exp, i) =>
                i === index ? { ...exp, isOpen: !exp.isOpen } : exp
            )
        );
    }

    useEffect(() => {
        const head = document.head;
      
        experiences.forEach((experience) => {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = experience.logo; // Bild-URL
          head.appendChild(link);
        });
        return () => {
          // Rensa bort preload-links när komponenten unmountas
          experiences.forEach(() => {
            const links = document.querySelectorAll('link[rel="preload"]');
            links.forEach((link) => link.remove());
          });
        };
      }, []);

      useEffect(() => {
        updateExperiences(); // Initial rendering
        setTitle(t("experiences-title"));
        // Lyssna på språkändringar
        const handleLanguageChange = () => updateExperiences();
    
        i18next.on("languageChanged", handleLanguageChange); // Registrera lyssnaren för språkändring
    
        // Rensa lyssnaren vid avmontering
        return () => {
          i18next.off("languageChanged", handleLanguageChange);
        };
      }, [i18next]);


  return (
    <>
    <div className=' flex flex-col justify-between  gap-4 lg:gap-7' >
    <h1 className='text-custom-title-fs'>{t("experiences-title")}</h1>
    
    {experiences.map((m, index) => 
        <div key={m.id} 
            className='max-w-[500px] sm:w-[500px] h-full border-[3px] border-border rounded-[3px] mt-0 mb-2 mx-2'
        >
            {/* px-5 pt-0 pb-2 bg-transparent"  */}
            <div className='flex justify-between flex-row-reverse'>
                <div className='flex flex-col justify-between m-1 items-end'>
                <img className='p-2 w-28 h-28 object-cover object-center  transform translate-x-0 translate-y-0 translate-z-[0.1px]'
                src={m.logo} alt='logo'
                    /> 
                <button className="text-custom-subheading-fs bg-transparent  cursor-pointer border-border border-2 border-solid py-1 px-2 hover:bg-hover-purple focus:bg-hover-purple hover:text-white focus:text-white mr-2 mb-1"
                    onClick={() => toggleExperience(index)}>{m.isOpen ? t("experiences-button-show-less") : t("experiences-button-show-more")}</button>
                 </div>

                <div className="flex flex-col justify-start text-left">
                    <h2 className='text-custom-heading-fs m-0 px-2 pt-2 pb-0'>{m.title}</h2>
                    <p className='text-custom-subheading-fs m-0 pt-1 pr-2 pb-0 pl-5'>{m.company}</p>
                    <p className='text-custom-p-fs m-0 pt-1 pr-2 pb-0 pl-5'>{formatDate(m.fromDate)} - {!m.toDate ? t("experiences-current") : formatDate(m.toDate)}</p>
                    <p className='text-custom-p-fs m-0 pt-1 pr-2 pb-0 pl-5'>{m.location}</p>
                </div>

            </div>
            {m.isOpen && (
                <div className="flex flex-col items-start pr-5">
                    <ul className="pl-8 mx-2">
                        <li key={m.details.description} className='text-custom-p-fs text-left mt-1 mb-2'>{m.details.description}</li>
                        <li key={m.details.languages} className='text-custom-p-fs text-left mb-2'>{t("experiences-languages")}: {m.details.languages} </li>
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
