import React, { useState } from 'react'
import EducationCard from './EducationCard'
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const {t, i18n} = useTranslation();

  return (
    <>
    <div className="flex items-stretch w-11/12 sm:max-w-lg flex-col gap-4 md:gap-7"> 
        <h1 className='text-custom-title-fs'>{t("education-title")}</h1>

            <EducationCard />

    </div>
    </>
    

)
}
