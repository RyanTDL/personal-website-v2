import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: "Ryan's Portfolio Site",
  description:
    'A simple website introducing myself!',
  authorHeadline: 'Full Stack Developer, Aspiring Entrepreneur, Full-Time Idiot',
  authorAbout:
    "Hey there! I'm Ryan, a second year student at the National University of Singapore (NUS) and an aspiring software engineer. Currently in my second year of study, I am immersing myself in the world of software development and generative AI. \n \n I have a passion for using technology to create positive change. Whether it is developing apps that solve real-world problems or exploring new innovative solutions, I am constantly seeking opportunities to collaborate on projects that can make tangible impact. If you're interested in working together or just want to chat, feel free to reach out!",
  socials: {
    github: 'https://github.com/RyanTDL',
    linkedin: 'https://www.linkedin.com/in/ryan-teo/',
  },
  // TODO: Add the name of the navbar items and the corresponding page. Used in the Header and Footer components.
  siteNavLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Work',
      href: '/experience',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
  ],
  // siteRepo: 'https://github.com/Cwarcup/',
  offerings: [
    {
      title: 'Pizza Delivery',
      description:
        'I will teach you how to properly deliver pizza, ensuring that your customers are happy and your tips are high. Most pizza delivery drivers are not taught how to properly deliver pizza, and as a result, they are not making the most money they could be. Have you ever received a pizza that was cold, soggy, or missing toppings? Hire me to teach you how to deliver pizza properly, and you will never have to worry about that again.',
      testimonial:
        '“Curtis is a great pizza delivery person. He helped me to understand my strengths and weaknesses and how to improve my performance. I would highly recommend him to anyone looking to improve their performance.”',
      testimonialAuthor: 'Elon Musk',
      testimonialAuthorTitle: 'CEO at Dumpster Fire, Inc.',
      imgUrl:
        'https://images.unsplash.com/photo-1594392175511-30eca83d51c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      imageAttribution: 'Photo by @dan__burton on Unsplash',
    },
    {
      title: 'Pizza Making',
      description:
        'This three-hour pizza class will offer our attendees the opportunity to craft homemade dough, prepare the pizza and cook a delicious meal to enjoy at the end of class. Attendees will get to take home extra dough, the secret recipe, and an ingredients list so they can independently recreate this pizza at home.',
      testimonial: '',
      testimonialAuthor: '',
      testimonialAuthorTitle: '',
      imgUrl:
        'https://images.unsplash.com/photo-1532460734809-e7f8475ca917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3237&q=80',
      imageAttribution: 'Photo by @juanmanunez on Unsplash',
    },
  ],
  testimonial: {
    comment:
      '“Curtis is a great pizza delivery person. He helped me to understand my strengths and weaknesses and how to improve my performance. I would highly recommend him to anyone looking to improve their performance.”',
    author: 'Elon Musk',
    authorTitle: 'CEO at Dumpster Fire, Inc.',
    imgUrl:
      'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    imageAttribution: 'Photo by @johanemanuel on Unsplash',
  },
  featureSection: {
    title: 'My Skills',
    description:
      'Currently doing my best to level up my skills in these following areas:',
  },
  experience: {
    title: 'Things I’ve done trying to put my dent in the universe.',
    intro:
      "I have never delivered pizza before, but I have made it. I don't think you should hire me for my pizza skills, but I'm sure I'm a great developer. I've been coding for a long time, and my mom says I'm pretty good at it.",
    //TODO also need to update the experience array in the ExperienceSection component. This is because of the icons used.
    education: [
      {
        schoolName: 'University of British Columbia',
        degree: 'Bachelor of Kinesiology',
        description:
          'Kinesiology is the study of human movement. It is a multidisciplinary field that draws on knowledge from the biological, physical, and social sciences to understand how people move and function. Kinesiology is a broad field that includes the study of human movement, health, and wellness. It is a multidisciplinary field that draws on knowledge from the biological, physical, and social sciences to understand how people move and function. Kinesiology is a broad field that includes the study of human movement, health, and wellness.',
        startDate: '2013',
        endDate: '2017',
        typeofDegree: 'Bachelor Degree',
      },
      {
        schoolName: 'Lighthouse Labs',
        degree: 'Web Development',
        description:
          'Lighthouse Labs is a 12-week full-time web development bootcamp.  The program is designed to teach students the skills needed to become a junior web developer.',
        startDate: '2022',
        endDate: '2022',
        typeofDegree: 'Bootcamp',
      },
    ],
  },

}

export default siteMetadata
