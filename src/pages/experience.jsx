import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'
import logoApple from '@/images/logos/apple.svg'

// TODO: If you want to include the logo of the company, I suggesting importing the svg from Remix-Design's repo: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

// TODO: Add your own work experience here
const experiences = [
  {
    title: 'Commander',
    company: 'Singapore Armed Forces',
    date: 'Aug 2020 - Dec 2021',
    description: [
      'Acted as the primary liaison between the company and battalion, effectively coordinating across 6 departments to streamline day-to-day operations and support strategic objectives.',
      'Led a team of 12 personnel in various training exercises, ensuring the team was well-prepared for operational readiness.',    
      'Developed and maintained a comprehensive training database using Microsoft Excel for over 350 soldiers.',
    ],
    link: { url: 'https://www.mindef.gov.sg/web/portal/mindef/home', label: 'Singapore Armed Forces' },
    logo: logoApple,
  },
  {
    title: 'Robotics Intern',
    company: 'A*STAR',
    date: 'Jan 2022 - Jun 2022',
    description: [
      'Developed and implemented software using ROS and Python to optimize Lidar point cloud data collection, enhancing efficiency of autonomous vehicle navigation.',
      'Engineered and integrated mechanical components into the robotic system utilizing SolidWorks.',
      'Designed a user-friendly interface using HTML and CSS to facilitate real-time control and movement of the robotic system.',
    ],
    link: { url: 'https://www.a-star.edu.sg/', label: 'A*STAR - Agency for Science, Technology and Research' },
    logo: logoApple,
  },
  {
    title: 'Software Engineer Intern',
    company: 'LFG Travel',
    date: 'May 2024 - Aug 2024',
    description: [
      'Enhanced current platform website, integrating new features using NextJS, TailwindCSS and TypeScript.',
      'Created efficient backend APIs leveraging AWS DynamoDB for data storage.',
      'Contributed to new feature ideation through product management meetings and user research',
    ],
    link: { url: 'https://www.lfg.travel/', label: 'LFG Travel' },
    logo: logoApple,
  },
]

export default function Resume() {
  return (
    <>
      <Head>
        <title>Experience - {siteMetadata.author}</title>
        <meta
          name={`Work experience of ${siteMetadata.author}`}
          content={siteMetadata.experience.title}
        />
      </Head>
      <SimpleLayout>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Work Experience
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <Card key={index}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="w-8 h-8"
                  unoptimized
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={experience.link.url}>
                  {experience.title} at {experience.company}
                </Card.Link>
              </h2>
              <Card.Description>
                {experience.description.map((item, index) => (
                  <li className="ml-4 list-disc" key={`description-${index}`}>
                    {item}
                  </li>
                ))}
              </Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <RiLinksLine className="flex-none w-6 h-6" />
                <span className="ml-2">{experience.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

      </SimpleLayout>
    </>
  )
}
