import React, { useState } from 'react'
import styles from "../styles/home.module.css"

export default function Home() {

    type ProfileProps = {
        id: number,
        name: string
        title: string
        about: string
        email: string
        emailText: string
    }

    const profile: ProfileProps = {
        id: 1,
        name: "Josef Holmberg",
        title: "Systemutvecklare",
        about: "Kandidatexamen i Systemvetenskap från Örebro universitet med fem års erfarenhet i branschen. Styrkorna sitter i Frontend-utveckling i Javascript-ramverk som t.ex. React",
        email: "mailto:josefholmberg@hotmail.com",
        emailText: "Maila mig!"
    }

  return (
    <>
    <div className="max-w-screen-md flex flex-row gap-10 my-10 mx-0  max-[768px]:flex-col max-[768px]:items-center" >
    
        <div className="animate-fadeInSlow flex flex-col justify-start gap-2 w-fit md:gap-7 md:w-2/5 ">
            <code className="text-3xl">{profile.name}</code>
            <code className='text-2xl ' >{profile.title}</code>
        </div>
 
        <div className="animate-fadeInSlow flex flex-col justify-center w-3/5 items-center gap-7 md:w-10/12">
            <code>{profile.about}</code>
            <a  href={profile.email}>
                <button className="p-2 m-2 outline-none border-4 border-solid border-white bg-transparent cursor-pointer hover:bg-hover-blue transition duration-500" >
                    {profile.emailText}
                </button>
            </a>

        </div>
    </div>
    </>
  )
}
