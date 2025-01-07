import React, { useState } from 'react'
import { ProfileProps } from './Types'
import { Link } from 'react-router-dom'
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import Modal from "../components/Modal"




export default function Home() {

    const {t, i18n} = useTranslation();

    const profile: ProfileProps = {
        id: 1,
        name: "Josef Holmberg",
        title: t("profile-title"), 
        about: t("profile-about"),
        email: "mailto:josefholmberg@hotmail.com",
        emailText: t("profile-email-text")
    }


  return (
    <>
    <div >
            <Modal />
        </div>
    <div className="max-w-screen-md flex flex-row gap-9 my-10 mx-0  max-[768px]:flex-col max-[768px]:items-center" >
    
        

        <div className="animate-fadeInSlow flex flex-col justify-start  w-4/5 items-center gap-6 md:w-10/12 ">
            <code className="text-3xl">{profile.name}</code>
            <code className='text-2xl ' >{profile.title}</code>
        </div>
 
        <div className="animate-fadeInSlow flex flex-col justify-center w-4/5 items-center gap-11 md:w-10/12">
            <code>{profile.about}</code>
                <button className="w-40 h-20 md:w-36 md:h-16 text-custom-heading-fs p-4 md:p-3 mx-0 my-3 outline-none border-4 border-solid border-white bg-transparent cursor-pointer hover:bg-hover-purple transition duration-500" >
            <Link className='' to={profile.email}>
                    {profile.emailText}
            </Link>
                </button>
            {/* width: 164px;
                height: 84px; */}

        </div>
    </div>
    </>
  )
}
