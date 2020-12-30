/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Link, useLocation} from '@reach/router';
import HamburgerMenu from 'react-hamburger-menu';
import { projects as projectsData } from '../screens/projects/projectsData'
import { links } from './links'


const Navbar = (props) => {
  const { pathname : curPage }  = useLocation()
  const [ project, setProject ] = useState(null)
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
      <Link 
        onClick={() => setOpen(false)}
        to="/"
      >
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

  const renderLinks = (viewport) => (
    links.map((item, i) => (
      i < 2 
        ?
          <div>
            <Link 
              to={item.url}
              onClick={() => setOpen(false)}
            > 
              <CurrentPage url={item.url} curPage={curPage}>
                {item.name}
              </CurrentPage>
            </Link>
            <PName>
              {i === 0 && project 
                ?
                  viewport === "mobile" 
                  ?
                    <div> ↳ {project} </div>
                  : `/${project}` 
                : null}
            </PName>
          </div>
        : 
          <div>
            <a href={item.url} target="_blank" rel="noopener noreferrer" >
              {item.name}
            </a>
          </div>
    ))
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
        {renderLinks()}
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
          <DropdownLinks>
            {renderLinks("mobile")}
          </DropdownLinks>
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
`;

const Bgr = styled.div`
  @media(min-width: 768px) {
    display: none;
  }
`;

const CurrentPage = styled.span`
  color: ${props => props.curPage === props.url && "#4AF626"};
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: var(--nav-height);
  background: rgba(80, 80, 80, 0.8);
  height: calc(100vh - var(--nav-height)); 
  transition: 0.6s ease-in;
  width: calc(100vw - 8rem);
  overflow-x: hidden;
  font-size: 24px;
  margin: 0 calc(-100vw + 8rem);
  display: flex;


  ${props => props.open &&
    // "width: calc(100vw - 8rem); transition: 0.5s ease-in;"
    "margin: 0; transition: 0.5s ease-in;"
  }
`;

const DropdownLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  padding: 1rem;
`;

const PName = styled.span`
  color: #4AF626;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px){
    display: inline-block;
  }

`;

export default Navbar

