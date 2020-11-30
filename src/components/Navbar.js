/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

const curPage = "landing"

const Navbar = () => (
  <>
    <div
      css={css`
        height: 4rem;
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
        <div //navLeft
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
        <div //navRight
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          Right
        </div>
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

const AngleBrackets = styled.div`
  font-family: "Montez";
  font-size: 96px;
  color: ${ curPage === "landing" && "#4AF626"};
`

export default Navbar
