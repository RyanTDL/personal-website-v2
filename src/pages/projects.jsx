import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

import lifequest from '@/images/projects/lifequest.jpeg'
import packback from '@/images/projects/packback.jpeg'
import pokemon from '@/images/projects/pokemon.jpeg'
import regen from '@/images/projects/regen.jpeg'
import steer from '@/images/projects/steer.jpeg'
import website from '@/images/projects/website.jpeg'


// TODO: Add your own projects here. Logo images from https://heroicons.com/
const projectsData = [
  {
    title: 'LifeQuest: Your Gamified Productivity App',
    description: `LifeQuest is a gamified productivity app that helps you track your daily habits in an engaging manner. It's a full-stack app built with React Native & Firebase, meant to make keeping track of your habits fun and rewarding.`,
    logo: lifequest,
    href: 'https://github.com/RyanTDL/NUS-Orbital-2023',
  },
  {
    title: 'STEER Challo',
    description: `STEER Challo is a booking app that connects travellers with local homestays & guides in the Indian Himalayas. It's a full-stack app built with React Native & Firebase, meant to help empower local communities within Mukteshwar.`,
    logo: steer,
    href: 'https://github.com/RyanTDL/steer-mobile-app-1',
  },
  {
    title: 'Pokemon Team Builder',
    description: `Pokemon Team Builder is a mini-project to learn Next.js, Tailwind CSS & Typescript. It's a simple website that allows you to create a team of 6 Pokemon, leveraging the PokeAPI to fetch Pokemon data.`,
    logo: pokemon,
    href: 'https://github.com/RyanTDL/Pokemon-Team-Builder',
  },
  {
    title: 'Personal Website v1',
    description: `This personal portfolio website is a mini-project to learn Next.js, Tailwind CSS & Typescript. It's a simple website that showcases my projects, experience & skills`,
    logo: website,
    href: 'https://github.com/RyanTDL/Personal-Website',
  },
  {
    title: 'Project PackBack',
    description: `Project PackBack is an initiative to reduce food packaging waste in Singapore. Our solution is a meal subscription service that delivers meals in reusable containers, incorporating elements of gamification.`,
    logo: packback,
    href: 'https://www.canva.com/design/DAF6HywRNWM/nWrYduu9ekPDtdEwwjIHrw/edit?utm_content=DAF6HywRNWM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
    title: 'REGEN: Mental Wellness App',
    description: `REGEN is a mental wellness app that serves to provide accessible mental health resources to youths. It aims to address shortcomings in existing mental health solutions, such as their over-generalised approach and long waiting times.`,
    logo: regen,
    href: 'https://www.canva.com/design/DAGJImdhohA/-CuZOkii_M1oumv2_awbQQ/edit?utm_content=DAGJImdhohA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <SimpleLayout>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2"
        >
          {projectsData.map((project) => {
            return (
              <Card as="li" key={project.title}>
                <Image
                  src={project.logo}
                  alt=""
                  className="object-cover w-full h-52 rounded-xl"
                />
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.href}>{project.title}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="flex-none w-6 h-6" />
                  <span className="ml-2">{project.title}</span>
                </p>
              </Card>
            )
          })}
        </ul>
      </SimpleLayout>
    </>
  )
}
