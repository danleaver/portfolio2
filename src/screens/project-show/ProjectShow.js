/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { projects } from '../projects/projectsData';
import { Link } from '@reach/router';
import { GreenSpan } from '../../styles/styles';
import Clearfix from '../../components/Clearfix';

const ProjectShow = (props) => {
  const [project, setProject] = useState(null)
  const [nextProject, setNextProject] = useState(null)

  useEffect(() => {
    projects.forEach((p, i) => {
      if (p.link === props.id) {
        setProject(p)
        if (i < projects.length - 1) {
          setNextProject(projects[i + 1])
        } else {
          setNextProject(projects[0])
        }
      }
    })
    
    window.scrollTo(0,0)
  }, [props.id]);


  const renderProjectNav = (viewport) => (
    <ProjectNav viewport={viewport}>
      <Link to="/projects">All Projects</Link>
      <Link to={`/projects/${nextProject.link}`}> Next Project </Link>
    </ProjectNav>
  )

  const renderImage = (float) => (
    <Image float={float} url={project.image}> {!project.image && "[ Project Currently In Development ]" } </ Image>
  )

  if (project == null) return "loading";

  return (
    <Clearfix>
      {renderProjectNav("mobile")}
      <Wrapper>
        <Name>
          {project.name}
        </Name>
        <SubText>
          {project.description}
        </SubText>
        <div css={css`
          @media (min-width: 768px) {
            display: inline-block;
          }

          max-width: 1200px;
          margin: auto;

          @media (min-width: 1024px) {
            margin: 0 1rem;
          }

          @media (min-width: 1200px) {
            display: flex;
            // align-items: center;
          }
        `} >
          {renderImage()}
          <Links>
            {renderImage(true)}
            {project.url && 
              <Item url={true}>
                <GreenSpan>
                  <strong>Live Site:</strong>
                </GreenSpan> <a href={project.url}> {project.url} </a>
              </Item>
            }    
            {project.github && 
              <Item url={true}>
                <strong>Github:</strong> <a href={project.github}> {project.github} </a>
              </Item>
            }        
            <Item>
              <strong>Date:</strong> {project.date}
            </Item>
            <Item>
              <strong>Tools used:</strong> {project.tools}
            </Item>
            <Item>
              <strong>What I learned:</strong> {project.takeHome}
            </Item>
            {project.extra &&
            <Item>
              <strong>{project.extra.title}</strong> <a href={project.extra.url}>{project.extra.text}</a>
            </Item>
            }
          </Links>
        </div>
      </Wrapper>      
      {renderProjectNav()}
    </Clearfix>
  )

}

const ProjectNav = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: "Sulphur Point";
  font-size: 18px;
  max-width: 1200px;
  margin: auto;

  ${props => props.viewport === "mobile" && `
    @media(min-width: 768px) {
      display: none;
    }
  `}

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Item = styled.div`
  padding: 1rem 0;
  word-break: ${props => props.url && "break-all"};

  @media(min-width: 768px){
    // margin: 2rem;
  }
`;

const Image = styled.div`
  background: url(${props => props.url}) no-repeat center;
  background-size: contain;
  width: 90vw;
  height: 60vw;
  display: flex; 
  justify-content: center; 
  align-items: center;

  ${props => !props.url && "border: 1px dashed white;"}

  ${props => props.float 
    ? 
      `
        display: none;
        @media(min-width: 768px) {
          display: flex;
          float: right;
          width: 50%;
          height: 32vw;
          margin-left: 1rem;
          margin-bottom: 0rem;
        } 

        @media (min-width: 1200px) {
          display: none
        }
      `
    : 
      `
        @media(min-width: 768px) {
          display:  none;
        }

        @media(min-width: 1200px) {
          display: flex;
          order: 2;
          width: 600px;
          height: 350px;
          margin-top: 1rem;
          margin-left: 1rem;
        }
      `
    } 
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 150px;

  @media(min-width: 768px) {
    display: block;
    
  }

  @media(min-width: 1200px) {
    width: 50%;
  }
`;

const Name = styled.div`
  font-family: "Sulphur Point";
  font-size: 32px;
  font-weight: 300;
  text-align: center;

  @media(min-width: 768px) {
    font-size: 48px;
  }
`;

const SubText = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 0.5rem 0 1rem;
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 1rem;
  height: 100%;
  // border: 1px solid red;
`;

export default ProjectShow;
