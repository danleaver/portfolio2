/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Link, useLocation} from '@reach/router';
import HamburgerMenu from 'react-hamburger-menu';
import { projects as projectsData } from '../screens/projects/projectsData'

const projects = [
  {name: "Projects", url: "/projects/"},
  {name: "Resume", url: "/resume/"},
  {name: "GitHub", url: "https://github.com/danleaver"},
  {name: "LinkedIn", url: "https://www.linkedin.com/in/dannyleaver/"},
]

const Navbar = (props) => {
  const { pathname : curPage }  = useLocation()
  const [ project, setProject ] = useState(null)
  console.log(curPage.substring(10))
  const [ open, setOpen ] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setProject(null)
    projectsData.forEach(p => {
      if (p.link === curPage.substring(10)){
        setProject(p.name)
      } 
    })
  }, [curPage])

  const navLeft = () => (
    <div
      css={css`
        flex: 2;
        display: flex;
        align-items: center;
        cursor: default;

        @media(min-width: 1024px) {
          margin-left: 1rem;
        }
      `}
    >
      <AngleBrackets curPage={curPage}>
        &lt;
      </AngleBrackets>
      <Link to="/">
        <div
          css={css`
            font-family: "Sulphur Point";
            font-weight: 700;
            font-size: 24px;
            text-align: center;
            padding: 0.25rem;
          `}
        >
          Danny Leaver
          <div
            css={css`
              font-weight: 400;
            `}
          >Web Developer</div>
        </div>
      </Link>
      <AngleBrackets curPage={curPage}>
        &gt;
      </AngleBrackets>
    </div>
  )

  const navRight = () => (
    <>
      <div
        css={css`
          font-size: 20px;
          display: none;
          
          @media(min-width: 768px) {
            margin-right: 0rem;
            flex: 2;
            display: flex;
            justify-content: space-between;
          }

          @media(min-width: 1024px) {
            margin-right: 2rem;
            flex: 5;
            max-width: 600px;
          }
        `}
      >
        {projects.map((item, i) => (
          i < 2 
            ?
              <div>
                <Link to={item.url}> 
                  <CurrentPage url={item.url} curPage={curPage}>
                    {item.name}
                  </CurrentPage>
                </Link>
                <PName>
                  {i === 0 && project ? `/${project}` : null}
                </PName>
              </div>
            : 
              <a href={item.url} target="_blank" rel="noopener noreferrer" >
                {item.name}
              </a>
        ))}
      </div>
      <Bgr
        css={css`

        `}
      >
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleClick}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
        <Dropdown open={open}>
          <div>
            MenuItem
          </div>
          <div>
            MenuItem
          </div>
          <div>
            MenuItem
          </div>
        </Dropdown>
      </Bgr>
    </>
  )

  return (
    <>
      <div 
        css={css`
          position: fixed; 
          width: 100%;
          z-index: 9999;
        `}
      >
        <div
          css={css`
            height: calc(var(--nav-height) - 3px);
            background: rgba(0, 0, 0, 0.5);
            color: white;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 100%;
              padding: 0 1rem;
            `}
          >
            {navLeft()}
            {navRight()}
          </div>
        </div>
        <div
          css={css`
            height: 3px;
            background: white;
          `}
        />
        {/* <div 
          css={css`
            position: relative;
            top: 200px;
            left: 0;
            color: white;
            text-align: right;
          `}
        >
          CONTACT ME dleaver@gmail.com&nbsp;
        </div> */}
      </div>
      <div css={css`height: var(--nav-height); width: 100%;`} />
      {props.children}
    </>
  )
}

const AngleBrackets = styled.div`
  font-family: "Montez";
  font-size: 96px;
  color: ${props => props.curPage === "/" && "#4AF626"};
`

const Bgr = styled.div`
  @media(min-width: 768px) {
    display: none;
  }
`

const CurrentPage = styled.span`
  color: ${props => props.curPage === props.url && "#4AF626"};
`

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: var(--nav-height);
  background: rgba(136, 136, 136, 0.5);
  height: calc(100vh - var(--nav-height)); 
  transition: 0.5s ease-in;
  width: 0px;
  overflow-x: hidden;

  ${props => props.open &&
    "width: calc(100vw - 8rem); transition: 0.5s ease-in;"
  }
`

const PName = styled.span`
  display: none;
  color: #4AF626;

  @media (min-width: 1024px){
    display: inline-block;
  }

`
export default Navbar
