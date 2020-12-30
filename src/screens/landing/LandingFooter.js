/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import flag from '../../assets/source.gif'
import { links } from '../../components/links';

const LandingFooter = () => {

  return (
    <Wrapper>
        <Link to="/projects">
          You can find more projects here.
        </Link>
      <Bottom>
        © 2021 Danny Leaver&nbsp;|&nbsp; <a href="mailto:dleaver@gmail.com">dleaver@gmail.com</a>&nbsp;<img src={flag} height="30px"></img>
      </Bottom>
    </Wrapper>
  )
};



const Bottom = styled.div`
  font-size: 12px; 
  font-family: "Open Sans";
  padding: 5rem 0 1rem;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Sulphur Point";
  font-size: 18px;

  a:link {
    text-decoration: underline;
  }
`;

export default LandingFooter
