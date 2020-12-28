/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import graphica from '../../assets/graphica.png';
import vibTest from '../../assets/vib-test-results.png';
import dplNova from '../../assets/dpl-nova.png';
import { Link, useNavigate } from '@reach/router';
import { useEffect, useState } from 'react';

const projects = [
  { link: "/graphica", 
    name: "Graphica", 
    github: "https://github.com/danleaver/graphica", 
    url: "http://discover-graphica.herokuapp.com", 
    description: "Photo sharing, social media website for photography enthusiasts", 
    tools: "React, Ruby on Rails, PostgreSQL, Heroku", 
    takeHome: "This was the capstone group project from a course I took on full-stack development through the University of Utah. I learned importance of daily stand-ups, and how to successfully merge group code. We had to get an MVP made before a deadline, and so we had to decide on which features to build and which ones to drop. Working in a group and being responsible for a particular part of the website helped me better understand how to share responsibility and divide up tasks.", 
    image: graphica 
  },
  { 
    link: "/vib-test",
    name: "Vib-Test Results", 
    github: "https://github.com/danleaver/vib-test", 
    url: "https://vibtest.tk", 
    description: "Remote access to live test results for automobile vibration-test", 
    tools: "React, LAMP Stack, SocketIO, Shell Scripts, Auth0", 
    takeHome: "I was tasked to make a proof-of-concept demo for a customer, and there was a limited amount of time until the demo. I used the tools I had under my belt to quickly whip up a working product to show the customer.", 
    image: vibTest 
  },
  { 
    link: "/dpl-nova", 
    name: "DevPoint Labs", 
    github: "", 
    url: "", 
    description: "A new version of a web-development coding bootcamp's site", 
    tools: "react-spring, react-reveal, ESLint", 
    takeHome: "This is a current project, where I'm get to work with more experienced developers than myself. On this team, I am able to have the freedom to come up with my own solutions while having support if I run into a problem and get stuck.", 
    image: dplNova 
  },
]

const LandingProjects = () => {
  const navigate = useNavigate();
  const [ takeHomeLength, setTakeHomeLength ] = useState(80)
  const [ width, setWidth ] = useState()
 
  useEffect(() => {
    let w = window.innerWidth
    
    if (w < 949) {
      setTakeHomeLength(100)
    }
    setWidth(w)
    
  }, [])

  const getWidth = (w) => {
    let n = window.innerWidth

    if (w < 950 && n > 949) {
      setTakeHomeLength(160)
    } else if (w > 949 && n < 950) {
      setTakeHomeLength(80)
    }
    setWidth(n)
  }

  window.onresize = () => getWidth(width)

  console.log("THIS:", takeHomeLength)
  const renderDetails = (p, media) => (
    <Description>

      <Details media={media} links={true}>
        <a href={p.url} target="_blank" rel="noreferrer">Live Site</a>
        <a href={p.github} target="_blank" rel="noreferrer">Github</a>
      </Details>
      <Details>
        <Name>
          {p.name}
        </Name>
        {p.description}
      </Details>
      <Details>
        <strong>Tools Used: </strong> 
        {p.tools}
      </Details>
      <Details>
        <strong> What I learned: </strong> {p.takeHome.substring(0, takeHomeLength)}... <Link to={p.link}>See Full Description</Link>
      </Details>
    </Description>
  )
  
  return (
    <Wrapper>
      <HereAreSome>
        Here are some of my <span css={css`color: #4AF626`}>projects</span>:
      </HereAreSome>
      { projects.map((p, idx) => (
        <ProjectWrapper>
          <Name idx={idx} mobile={true}>
            {p.name}
          </Name>
          <div css={css`
            @media (min-width: 768px) {
              display: flex; 
              justify-content: space-between;
            }             
          `}>
            <Image idx={idx} onClick={() => navigate('/graphica')} image={p.image} />
            <div css={css`
              display: none;
              @media (min-width: 768px) {
                display: block;
                width: 50%;
              }              
            `}>
              {renderDetails(p, true)}    
            </div>
          </div>
          <div css={css`
            @media (min-width: 768px) {
              display: none;
            }
          `}>
            {renderDetails(p)}    
          </div>
        </ProjectWrapper>
      ))}
    </Wrapper>
  )
}

const Description = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {

    justify-content: space-between;
    // align-items: space-between;
    min-height: 100%;
    // max-height: 341px;
    margin: 0 1rem;

    font-size: 16px;
  }
`

const Details = styled.div`
  margin-top: 0;
  margin-bottom: 16px;

  ${props => props.links && `
    display: flex;
    justify-content: space-between;
    max-width: 533px;
  `}

  ${props => props.media && `
    order: 2;
    margin-bottom: 0;
  `}
    
`

const HereAreSome = styled.div`
  font-family: "Sulphur Point";
  font-size: 28px;
  text-align: center;
  padding: 3rem 0 1rem 0;
`

const Image = styled.div`
  background: url(${props => props.image}) center no-repeat;
  background-size: cover;
  height: calc(64vw - 2rem);
  margin: 0.5rem 0;
  // border: 1px solid green;
  max-width: 533px;
  max-height: 341px;
  flex-shrink: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 100%;
    height: 310px;
    max-width: 450px;
    max-height: 341px;
    margin: 0;
  }

  ${props => props.idx % 2 === 1 && "order: 2;"}
`

const Name = styled.div`
  font-family: "Sulphur Point";
  font-size: 24px;

  @media (min-width: 768px) {
    padding-bottom: 0.5rem;
    font-size: 28px;
  }

  // ${props => props.idx % 2 === 1 && "text-align: right;"}

  ${props => props.mobile 
    ? 
      `
        @media (min-width: 950px) {
          display: none;
        }
      ` 
    : 
      `
        display: none;

        @media (min-width: 950px) {
          display: block;
        }
      `
  }
`
const ProjectWrapper = styled.div`
  padding: 2rem 0;
  max-width: 1024px;
  margin: auto;
`


const Wrapper = styled.div`
  color: white;
  padding: 1rem;
  margin: auto;
  max-width: 533px;
  
  @media (min-width: 768px) {
    max-width: none;
  }
  a:link {
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`

export default LandingProjects
