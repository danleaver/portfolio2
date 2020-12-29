/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { projects } from '../projects/projectsData'

const ProjectShow = (props) => {
 
  const [project, setProject] = useState(null)

  useEffect(() => {
    projects.forEach(p => {
      if (p.link === props.id) {
        setProject(p)
      }
    })
  }, [])

  if (project == null) return "loading"

  return (
    <Wrapper>
      <Name>
        {project.name}
      </Name>
      <SubText>
        {project.description}
      </SubText>
    </Wrapper>
  )

}

const Name = styled.div`
  font-family: "Sulphur Point";
  font-size: 24px;
  font-weight: 300;
`

const SubText = styled.div`

`

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

`
export default ProjectShow