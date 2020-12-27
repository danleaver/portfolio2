/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import graphica from '../../assets/graphica.png';
import vibTest from '../../assets/vib-test-results.png';
import dplNova from '../../assets/dpl-nova.png';
import { Link, useNavigate } from '@reach/router';

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
    description: "A new version of the school's website", 
    tools: "react-spring, react-reveal, ESLint", 
    takeHome: "This is a current project, and I'm learning a lot from working with better developers than me. It is great to be on a team that gives me the freedom to come up with my own solutions while providing the support to help me when I'm getting stuck.", 
    image: dplNova 
  },
]

const LandingProjects = () => {
  const navigate = useNavigate();

  
  return (
    <Wrapper>
      <HereAreSome>
        Here are some of my <span css={css`color: #4AF626`}>projects</span>:
      </HereAreSome>
      { projects.map((p, i) => (
        <ProjectWrapper>
          <Name mobile={true}>
            {p.name}
          </Name>
          <div css={css`
            @media (min-width: 768px) {
              display: flex; 
              justify-content: center;
            }             
          `}>
            <Image onClick={() => navigate('/graphica')} image={p.image} />
            <div css={css`
              display: none;
              @media (min-width: 768px) {
                display: block;
                width: 50%;
              }              
            `}>
              <Name>
                {p.name}
              </Name>
              <StyledP links={true}>
                <a href={p.url} target="_blank" rel="noreferrer">Live Site</a>
                <a href={p.github} target="_blank" rel="noreferrer">Github</a>
              </StyledP>
            </div>
          </div>
          <Description>
            <StyledP links={true}>
              <a href={p.url} target="_blank" rel="noreferrer">Live Site</a>
              <a href={p.github} target="_blank" rel="noreferrer">Github</a>
            </StyledP>
            <StyledP>
              {p.description}
            </StyledP>
            <StyledP>
              <strong>Tools Used: </strong> 
              {p.tools}
            </StyledP>
            <StyledP>
              <strong> What I learned: </strong> {p.takeHome.substring(0, 100)}... <Link to={p.link}>See Full Description</Link>
            </StyledP>
          </Description>
        </ProjectWrapper>
      ))}
    </Wrapper>
  )
}

const Description = styled.div`
  font-size: 14px;
`

const HereAreSome = styled.div`
  font-family: "Sulphur Point";
  font-size: 28px;
  text-align: center;
  padding: 1rem 0;
`

const Image = styled.div`
  background: url(${props => props.image}) center no-repeat;
  background-size: cover;
  height: calc(64vw - 2rem);
  margin: 0.5rem 0;
  border: 1px solid green;
  max-width: 533px;
  max-height: 341px;
  flex-shrink: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 100%;
    height: 38vw;
    max-width: 450px;
    max-height: 341px;
  }
`

const Name = styled.div`
  font-family: "Sulphur Point";
  font-size: 24px;

  ${props => props.mobile && `
    @media (min-width: 768px) {
      display: none;
    }
  `}
`
const ProjectWrapper = styled.div`
  padding: 2rem 0;
`
const StyledP = styled.p`
  margin-top: 0;

  ${props => props.links && `
    display: flex;
    justify-content: space-between;
    max-width: 533px;
  `}
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
`

export default LandingProjects
