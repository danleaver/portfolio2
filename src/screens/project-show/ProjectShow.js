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


  const renderAllProjects = (viewport) => (
    <AllProjects viewport={viewport}>
      <Link to="/projects">All Projects</Link>
      <Link to={`/projects/${nextProject.link}`}> Next Project </Link>
    </AllProjects>
  )

  if (project == null) return "loading";

  return (
    <Clearfix>
      {renderAllProjects("mobile")}
      <Wrapper>
        <Name>
          {project.name}
        </Name>
        <SubText>
          {project.description}
        </SubText>
        <div css={css`
          @media( min-width: 768px) {
            display: inline-block;
          }

          max-width: 1200px;
          margin: auto;
        `} >
          <Image url={project.image} />
          <Links>
            <Image float={true} url={project.image} />
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
      {renderAllProjects()}
    </Clearfix>
  )

}

const AllProjects = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: "Sulphur Point";
  font-size: 18px;

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
  // border: 1px solid green;

  ${props => props.float 
    ? 
      `
        display: none;
        @media(min-width: 768px) {
          display: block;
          float: right;
          width: 50%;
          height: 34vw;
          // padding-left: 2rem;
          // padding-bottom: 2rem;
          margin-left: 1rem;
        } 
      `
    : 
      `
        @media(min-width: 768px) {
          display:  none;
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
