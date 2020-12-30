/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Clearfix = (props) => {
  return ( 
    <>
      <div css={css`height: var(--nav-height); width: 100%;`} /> 
      {props.children}
    </>
  )
}

export default Clearfix;
