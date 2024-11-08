import React, { useState } from 'react'
import styles from "../styles/home.module.css"

export default function Home() {

    type ProfileProps = {
        id: number,
        name: string
        title: string
        about: string
    }

    const profile: ProfileProps = {
        id: 1,
        name: "Josef Holmberg",
        title: "Systemutvecklare",
        about: "Kandidatexamen i Systemvetenskap från Örebro universitet med fem års erfarenhet i branschen. Styrkorna sitter i Frontend-utveckling i Javascript"
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
            <a  href='mailto:josefholmberg@hotmail.com'>
                <button className={styles.emailButton} >Maila mig!</button>
            </a>

        </div>
    </div>
    </>
  )
}
