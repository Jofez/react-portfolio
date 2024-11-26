import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    const title = "404 - sidan hittades inte"
    const subHeading = "Hoppsan! Sidan du letade efter finns inte."
    const toHome = "Gå tillbaka till startsidan"


  return (
    <div className='flex flex-col gap-4 items-stretch w-11/12 max-w-[500px]'>

        <h1 className='text-custom-title-fs'>
            {title}
        </h1>
        <hr  />
        <p className='text-custom-subheading-fs'>
            {subHeading}
        </p>

        <Link className='text-custom-subheading-fs hover:underline hover:text-yellow-400 focus:text-yellow-400'
            to="/">
                {toHome}
        </Link>
    </div>
  )
}
