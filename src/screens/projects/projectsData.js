import graphica from '../../assets/graphica.png';
import vibTest from '../../assets/vib-test-results.png';
import dplNova from '../../assets/dpl-nova.png';
import mac from '../../assets/mac.png';

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
    github: "", 
    url: "", 
    description: "A new version of a web-development coding bootcamp's site", 
    tools: "react-spring, react-reveal, ESLint", 
    takeHome: "This is a current project, where I'm get to work with more experienced developers than myself. On this team, I am able to have the freedom to come up with my own solutions while having support if I run into a problem and get stuck.", 
    image: dplNova 
  },
  { link: "mac", name: "Macedonian Arts Council", github: "https://github.com/danleaver/mac-arts", url: "", description: "A modern design overhaul and site update", tools: "Figma, React", takeHome: "I was brought on as a developer, but ended up designing the new project in addition to coding it. I studied other arts council websites, and went over various design ideas with executive director of the organization.", image: mac },
  { link: "off-the-couch", name: "Off-The-Couch", github: "https://github.com/danleaver/off-the-couch", description: "Pet monitoring tool for spying on your pets and talking to them when you're not home", tools: "React, Node/Express, SocketIO" },
  { link: "malouf-coding-test", name: "Malouf Coding Test", github: "https://github.com/danleaver/malouf-test-react", description: "A design that I coded for an interview test that resulted in a job offer.", tools: "React, VanillaJS, CSS" },


]