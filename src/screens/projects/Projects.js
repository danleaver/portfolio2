/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { projects } from '../projects/projectsData';
import { Link } from '@reach/router';
import { GreenSpan } from '../../styles/styles';
import Clearfix from '../../components/Clearfix';

const Projects = (props) => {
  console.log("proejcts:", props.match)
  return (
    <Clearfix>
      <Wrapper>
        <Header>
          Click a <GreenSpan>project</GreenSpan> to learn more about it.
        </Header>
        <ProjectsWrapper>
          {projects.map(p => (
            <Project>
              <Link to={`/projects/${p.link}`}>
                <h2>
                  {p.name}
                </h2>
                <img height="150px" alt={p.name} src={p.image}></img>
              </Link>
            </Project>
          ))}
        </ProjectsWrapper>
      </Wrapper>
    </Clearfix>
  )
};

const Header = styled.h1`
  padding: 1rem;
`;

const Project = styled.div`
  text-align: left;
  padding-bottom: 3rem;
  padding: 1rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  padding: 3rem 0rem;
  text-align: center;

  a:link {
    text-decoration: none;
   }
`;

export default Projects;
