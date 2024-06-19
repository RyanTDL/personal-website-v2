import siteMetadata from '@/data/siteMetadata'
import HTMLIcon from 'public/icons/HTML'
import CSSIcon from 'public/icons/CSS'
import JavaScriptIcon from 'public/icons/Javascript'
import TypescriptIcon from 'public/icons/Typescript'
import ReactIcon from 'public/icons/React'
import NextJSIcon from 'public/icons/NextJS'
import FigmaIcon from 'public/icons/Figma'
import GitIcon from 'public/icons/Git'
import GithubIcon from 'public/icons/Github'
import PythonIcon from 'public/icons/Python'
import CPPIcon from 'public/icons/CPP'
import JavaIcon from 'public/icons/Java'
import ArduinoIcon from 'public/icons/Arduino'

// TODO: Add your own features here. Make sure to add the icon from Remix-Design's repo:
const features = [
  {
    name: 'HTML',
    icon: <HTMLIcon />
  },
  {
    name: 'CSS',
    icon: <CSSIcon />
  },
  {
    name: 'Javascript',
    icon: <JavaScriptIcon />
  },
  {
    name: 'Typescript',
    icon: <TypescriptIcon />
  },
  {
    name: 'React',
    icon: <ReactIcon />
  },
  {
    name: 'React Native',
    icon: <ReactIcon />
  },
  {
    name: 'Next.JS',
    icon: <NextJSIcon />
  },
  {
    name: 'Figma',
    icon: <FigmaIcon />
  },
  {
    name: 'Git',
    icon: <GitIcon />
  },
  {
    name: 'Github',
    icon: <GithubIcon />
  },
  {
    name: 'Python',
    icon: <PythonIcon />
  },
  {
    name: 'C++',
    icon: <CPPIcon />
  },
  {
    name: 'Java',
    icon: <JavaIcon />
  },
  {
    name: 'Arduino',
    icon: <ArduinoIcon />
  },
]
const FeatureSection = () => {
  return (
    <div className="pb-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
            {siteMetadata.featureSection.title}
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-primaryText-600 dark:text-primaryText-400">
            {siteMetadata.featureSection.description}
          </p>
        </div>

        <div className="max-w-xl mt-20 sm:mx-auto md:max-w-none">
          <div className='flex justify-center w-full'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 md:gap-y-10 gap-x-5">
              {features.map((skill) => (
                  <div
                    key={skill.name}
                    className='p-6 shadow-lg rounded-xl hover:scale-110 ease-in duration-200 border-2 bg-primaryText-100 border-primaryText-100 transform hover:-translate-y-1 hover:shadow-xl hover:border-primaryText-50 dark:hover:border-primaryText-50 hover:bg-primaryText-50 dark:hover:bg-primaryText-900 dark:hover:text-primaryText-50 hover:text-primaryText'
                  >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <h3 className=''>{skill.name}</h3>    
                        {skill.icon}                
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
