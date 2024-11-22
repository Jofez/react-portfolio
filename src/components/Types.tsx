import React from 'react'

type DetailsProps = {
    description: string,
    languages: string
}

export type ExperienceProps = {
    id: number
    company: string
    logo: string
    title: string
    fromDate: Date
    toDate: Date
    location: string
    isOpen: boolean
    details: DetailsProps
}


export type CertificateProps = {
    id: number
    company: string
    title: string
    issued: Date
    badge: string
    link?: string
 
}

export type EducationProps = {
    id: number
    school: string
    level: string
    program: string
    startYear: Date
    endYear: Date

}

export type ProfileProps = {
    id: number,
    name: string
    title: string
    about: string
    email: string
    emailText: string
}

export type LogoPortfolioProps = {
    id: number
    src: string
    name: string
}

export type PortfolioProps = {
    id: number
    name: string
    description: string
    createdWith: LogoPortfolioProps[]
    repositoryLink: string
}