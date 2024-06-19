const siteMetadata = {
  title: "Ryan's Portfolio Site",
  description:
    'A simple website introducing myself!',
  authorHeadline: 'Full Stack Developer, Aspiring Entrepreneur, Full-Time Idiot',
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
  testimonial: {
    comment:
      "Hey there! I'm Ryan, a third year student at the National University of Singapore (NUS) and an aspiring software engineer. Currently in my third year of study, I am immersing myself in the world of software development and generative AI.",
    commentExtended:
      "I have a passion for using technology to create positive change. Whether it is developing apps that solve real-world problems or exploring new innovative solutions, I am constantly seeking opportunities to collaborate on projects that can make tangible impact. If you're interested in working together or just want to chat, feel free to reach out!",
    imageAttribution: "Hey there! I'm Ryan!",
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
