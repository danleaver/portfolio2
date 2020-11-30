/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

const curPage = "landing"

const Navbar = () => {

  const [ open, setOpen ] = useState(true)
  const handleClick = () => {
    setOpen(!open)
  }

  const navLeft = () => (
    <div
    css={css`
      flex: 1;
      display: flex;
      align-items: center;
    `}
  >
    <AngleBrackets>
      &lt;
    </AngleBrackets>
    <div
      css={css`
        font-family: "Sulphur Point";
        font-weight: 400;
        text-align: center;
        padding: 0.25rem;
      `}
    >
      Danny Leaver
      <div
        css={css`
          font-weight: 300;
        `}
      >Web Developer</div>
    </div>
    <AngleBrackets>
      &gt;
    </AngleBrackets>
  </div>

  )

  const navRight = () => (
    <>
      <div
        css={css`
          display: none;
          @media(min-width: 768px) {
            display: flex;
            justify-content: space-between;
          }
        `}
      >
        Right
        <div>
          MenuItem
        </div>
        <div>
          MenuItem
        </div>
        <div>
          MenuItem
        </div>
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
          height: 3.5rem;
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
    </>
  )
}

const AngleBrackets = styled.div`
  font-family: "Montez";
  font-size: 96px;
  color: ${ curPage === "landing" && "#4AF626"};
`


const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(3.5rem + 3px);
  background: rgba(136, 136, 136, 0.5);
  height: calc(100vh - 3.5rem - 3px); 
  transition: 0.5s ease-in;
  width: 0px;
  // border: 5px solid green;

  ${props => props.open &&
    "width: calc(100vw - 8rem); transition: 0.5s ease-in;"
  }
`

const Bgr = styled.div`
  @media(min-width: 768px) {
    display: none;
  }
`

export default Navbar

