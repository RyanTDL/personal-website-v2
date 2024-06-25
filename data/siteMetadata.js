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
      "Hey there! I'm Ryan, a third year student at the National University of Singapore (NUS). Currently in my third year of study, I am immersing myself in the world of product development & building software.",
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
    title: 'Work Experience',
    intro:
      "Here's what I have been up to in the past few years:",
  },

}

export default siteMetadata
