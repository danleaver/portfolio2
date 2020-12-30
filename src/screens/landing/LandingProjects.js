/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

import { Link, useNavigate } from '@reach/router';
import { useEffect, useState } from 'react';
import { projects as projectList } from "../projects/projectsData"


const LandingProjects = () => {
  const navigate = useNavigate();
  const [ takeHomeLength, setTakeHomeLength ] = useState(160)
  const [ width, setWidth ] = useState()
  const projects = projectList.slice(0,3)

  useEffect(() => {
    let w = window.innerWidth
    
    if (w < 949) {
      setTakeHomeLength(80)
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

  const navigateTo = (link) => {
    navigate(`/projects/${link}`)
  }

  const renderDetails = (p, media) => (
    <Description>
      <Details media={media} links={true}>
        <a href={p.url} target="_blank" rel="noreferrer">Live Site</a>
        <a href={p.github} target="_blank" rel="noreferrer">Github</a>
      </Details>
      <Details>
        <Name>
          <Link to={`/projects/${p.link}`}>
            {p.name}
          </Link>
        </Name>
        {p.description}
      </Details>
      <Details>
        <strong>Tools Used: </strong> 
        {p.tools}
      </Details>
      <Details>
        <strong> What I learned: </strong> {p.takeHome.substring(0, takeHomeLength)}... <Link to={`/projects/${p.link}`}>See Full Description</Link>
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
          <Name 
            idx={idx} 
            mobile={true}
          >
            <Link to={`/projects/${p.link}`}>
              {p.name}
            </Link>
          </Name>
          <div css={css`
            @media (min-width: 768px) {
              display: flex; 
              justify-content: space-between;
            }             
            @media (min-width: 1440px) {
              justify-content: space-around;
            }
          `}>
            <Image idx={idx} onClick={() => navigateTo(p.link)} image={p.image} />
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
    min-height: 100%;
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
  padding: 2rem 0 5rem;
  max-width: 1024px;
  margin: auto;

  @media( min-width: 1440px ){
    max-width: 1200px;
  }


`

const Wrapper = styled.div`
  color: white;
  padding: 1rem;
  margin: auto;
  max-width: 533px;

  a:link {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    max-width: none;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`

export default LandingProjects
