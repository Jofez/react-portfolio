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
    <div className={styles.home}>
        <div className={styles.profile}>
            <code className={styles.profileName}>{profile.name}</code>
            <code >{profile.title}</code>
        </div>
 
        <div className={styles.detailsDiv}>
            <code>{profile.about}</code>
            <a  href={profile.email}>
                <button className={styles.emailButton} >{profile.emailText}</button>
            </a>

        </div>
    </div>
    </>
  )
}
