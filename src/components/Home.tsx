import React, { useState } from 'react'
import { ProfileProps } from './Types'

const profile: ProfileProps = {
    id: 1,
    name: "Josef Holmberg",
    title: "Systemutvecklare",
    about: "Kandidatexamen i Systemvetenskap från Örebro universitet med fem års erfarenhet i branschen. Styrkorna sitter i Frontend-utveckling i Javascript-ramverk som t.ex. React",
    email: "mailto:josefholmberg@hotmail.com",
    emailText: "Maila mig!"
}

export default function Home() {
  return (
    <>
    <div className="max-w-screen-md flex flex-row gap-9 my-10 mx-0  max-[768px]:flex-col max-[768px]:items-center" >
    
        <div className="animate-fadeInSlow flex flex-col justify-start  w-4/5 items-center gap-6 md:w-10/12 ">
            <code className="text-3xl">{profile.name}</code>
            <code className='text-2xl ' >{profile.title}</code>
        </div>
 
        <div className="animate-fadeInSlow flex flex-col justify-center w-4/5 items-center gap-7 md:w-10/12">
            <code>{profile.about}</code>
            <a className='' href={profile.email}>
                <button className="text-custom-heading-fs p-4 md:p-3 mx-0 my-3 outline-none border-4 border-solid border-white bg-transparent cursor-pointer hover:bg-hover-purple transition duration-500" >
                    {profile.emailText}
                </button>
            </a>

        </div>
    </div>
    </>
  )
}
