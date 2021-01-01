import graphica from '../../assets/graphica.png';
import vibTest from '../../assets/vib-test-results.png';
import dplNova from '../../assets/dpl-nova.png';
import mac from '../../assets/mac.png';
import malouf from '../../assets/malouf.png';


export const projects = [
  { link: "graphica", 
    name: "Graphica", 
    date: "June 2020 - Sept 2020",
    github: "https://github.com/danleaver/graphica", 
    url: "http://discover-graphica.herokuapp.com", 
    description: "Photo sharing, social media website for photography enthusiasts", 
    tools: "React, Ruby on Rails, PostgreSQL, Heroku", 
    takeHome: "This was the capstone group project from a course I took on full-stack development through the University of Utah. I learned importance of daily stand-ups, and how to successfully merge group code. We had to get an MVP made before a deadline, and so we had to decide on which features to build and which ones to drop. Working in a group and being responsible for a particular part of the website helped me better understand how to share responsibility and divide up tasks.", 
    image: graphica 
  },
  { 
    link: "vib-test",
    name: "Vib-Test Results", 
    date: "Aug 2020 - Sept 2020",
    github: "https://github.com/danleaver/vib-test", 
    url: "https://vibtest.tk", 
    description: "Remote access to live test results for automobile vibration-test", 
    tools: "React, LAMP Stack, SocketIO, Shell Scripts, Auth0", 
    takeHome: "I was tasked to make a proof-of-concept demo for a customer, and there was a limited amount of time until the demo. I used the tools I had under my belt to quickly whip up a working product to show the customer.", 
    image: vibTest 
  },
  { 
    link: "dpl-nova", 
    name: "DevPoint Labs", 
    date: "Nov 2020 - Current",
    github: "", 
    url: "", 
    description: "A new version of a web-development coding bootcamp's site", 
    tools: "react-spring, react-reveal, ESLint", 
    takeHome: "I am working with team of developers and a designer. We are working on creating a uniform code base that can be easily updated moving forward. We are using ESLint checking in our repository. to On this team, I am able to have the freedom to come up with my own solutions while having support if I run into a problem and get stuck.", 
    image: dplNova 
  },
  { 
    link: "mac",
    name: "Macedonian Arts Council", 
    date: "Nov 2020 - Current",
    github: "https://github.com/danleaver/mac-arts", 
    url: "", description: "A modern design overhaul and site update", 
    tools: "Figma, React", 
    takeHome: "I was brought on as a developer, but ended up designing the new project in addition to coding it. I studied other arts council websites, and went over various design ideas with executive director of the organization. ", 
    image: mac 
  },
  { 
    link: "off-the-couch",
    name: "Off-The-Couch", 
    date: "Oct 2020 - Current",

    github: "https://github.com/danleaver/off-the-couch", 
    description: "Pet monitoring tool for spying on your pets and talking to them when you're not home", 
    takeHome: "I wanted to learn a new backend language, and SocketIO worked a lot easier on Express, so I went that route for this project. I worked on continuously deploying this project, in order to test it properly on multiple devices, and ran into all sorts of browser compatibility which I learned can generally be solved, albiet sometimes tediously. This is a fun project to work on in my spare time.",
    tools: "React, Node/Express, SocketIO, DigitalOcean"
  },
  { 
    link: "malouf-coding-test", 
    name: "Malouf Coding Test", 
    date: "November 2020",
    url: "https://sleepy-curan.netlify.app/",
    github: "https://github.com/danleaver/malouf-test-react", 
    description: "A design that I coded for an interview test that resulted in a job offer.", 
    tools: "React, VanillaJS, CSS",
    image: malouf,
    takeHome: 
      "I applied for a job at Malouf and they wanted me to code a design as part of the interview process. I had a week to work on the project before having to turn it in, and this is the result. Working on this helped me practice accomplishing as much as possible given a deadline, and producing a solid MVP being responsive at all viewports. I was initially under the impression that I couldn't use any frameworks, so I started off working on it in Vanilla JS, but eventually switched to React. ",
    extra: {title: "Design:", text: "This is the design they provided.", url: "https://www.figma.com/file/JmmFLJi6RYYfSwOV5qgDPX/MaloufHome-Test?node-id=0%3A1&viewport=459%2C469%2C0.09308038651943207"},
  },
]