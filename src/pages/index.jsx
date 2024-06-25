import Head from 'next/head'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import Testimonial from '@/components/Testimonial'
import FeatureSection from '@/components/FeatureSection'
import CallToAction from '@/components/CallToAction'
import DivideLine from '@/components/DivideLine'
import siteMetadata from '@/data/siteMetadata'
import TypewriterComponent from 'typewriter-effect'

const Home = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Container className="mt-32">
          <span className="text-4xl sm:text-6xl font-medium tracking-tight text-white px-4 py-2 border border-transparent rounded-md bg-accent-400">
            Introducing me:
          </span>
          <div className="text-5xl sm:text-7xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 mt-6">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString('Full Stack Developer')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Aspiring Entrepreneur')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Full Time Student')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Part Time Student')
                  .pauseFor(1500)
                  .deleteAll()
                  .start()
                }
              }
              options={{
                loop: true,
              }}
            />
          </div>
      </Container>
      <Testimonial />
      <DivideLine />
      <FeatureSection />
      <CallToAction />
    </>
  )
}

export default Home
