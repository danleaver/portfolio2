/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation} from '@reach/router';
import HamburgerMenu from 'react-hamburger-menu';
import { projects as projectsData } from '../screens/projects/projectsData'
import { links } from './links'

const Navbar = (props) => {
  const { pathname : curPage }  = useLocation()
  const [ project, setProject ] = useState(null)
  const [ open, setOpen ] = useState(false)
  const dropdown = useRef(null)

  useEffect(() => {
    const clickOutside = (e) => {
      if (open && dropdown.current && !dropdown.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", clickOutside)
    return () => {
      document.removeEventListener("mousedown", clickOutside)
    }
  }, [dropdown, open])

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
              <CurrentPage>
                {item.name}
              </CurrentPage>
            </a>
          </div>
    ))
  )

  const renderContact = () => (
    <CurrentPage forContact={true}>contact: <a href="mailto:dleaver@gmail.com"> dleaver@gmail.com</a></CurrentPage>
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
            align-items: center;
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
      <Bgr ref={dropdown}>
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => setOpen(!open)}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.8}
        />
        <Dropdown  open={open}>
          <DropdownLinks>
            {renderLinks("mobile")}
            <div css={css`padding: 1rem;`}></div>
            {renderContact()}
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
          top: 0;

          a:link {
            text-decoration: none;
           }
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
        <div css={css`
          display: flex;
          justify-content: space-between;
        `}>
          <div
            css={css`
              height: 3px;
              background: white;
              width: 100%;
            `}
          />
          <div css={css`
            display: none;
            background: rgba(30, 30, 30, 0.5);
            border: 1px solid white;
            border-radius: 20px;
            padding: 0.5rem;
            flex-shrink: 0;
            position: relative;
            top: calc(-1.5rem + 6px);
            color: white;

            @media (min-width: 768px) {
              display: block;
            }
          `}>
            {renderContact()}
          </div>
          <div
            css={css`
              height: 3px;
              background: white;
              width: 10%;
            `}
          />
        </div>
      </div>
      {/* <div css={css`height: var(--nav-height); width: 100%;`} /> */}
      {props.children}
    </>
  )
}

const AngleBrackets = styled.div`
  font-family: "Montez";
  font-size: 96px;
  color: ${props => props.curPage === "/" && "#4AF626"};
  line-height: 0rem;
`;

const Bgr = styled.div`
  cursor: pointer;
  @media(min-width: 768px) {
    display: none;
  }
`;

const CurrentPage = styled.span`
  color: ${props => props.curPage && props.curPage === props.url && "#4AF626"};
  font-family: "Sulphur Point";
  font-size: 22px;

  @media (max-width: 767px) {
    font-size: 36px;
  }

  ${props => props.forContact && `
    @media (max-width: 400px) {
      font-size: 20px;
    }
  `}
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
    "margin: 0; transition: 0.5s ease-in;"
  }
`;

const DropdownLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 55vh;
  padding: 1rem;
`;

const PName = styled.span`
  color: #4AF626;
  font-family: "Sulphur Point";
  font-size: 22px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px){
    display: inline-block;
  }
`;

export default Navbar
