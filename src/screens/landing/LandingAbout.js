/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import me from '../../assets/DannySnow2.jpg';

const LandingAbout = () => {

  const renderLittleBit = (float) => (
    <LittleBit float={float}>
      <span> A little bit </span>
      {!float && <div> &nbsp; </div>}
      <div><span css={css`color: #4AF626`}> about </span> me</div>  
    </LittleBit>    
  )

  return (
    <AboutWrapper>
      { renderLittleBit()}
        <ImageDiv>
          { renderLittleBit(true) }
          <Image width="198px" src={me} alt="me in the snow"/>
          <StyledP>
            I have a steady foundation of React and Javascript, as well as a solid understanding of HTML and CSS. I am well versed in Ruby on Rails, and have been using PostgreSQL. I am also familiar with Node/Express, as well as some PHP.
          </StyledP>
          <StyledP>
            I can adapt well to new projects and work environments, and I recognize the importance of a good team dynamic. I understand that getting along well with others can be as important as solving a challenging coding problem.
          </StyledP>
          <StyledP>
            Whether working with others in an organization, or on my own, I am motivated to produce results, and I always push myself to do better than before. Most of all, I enjoy learning new things along the way and having some fun in the process!
          </StyledP>
        </ImageDiv>
    </AboutWrapper>
  )
};

const AboutWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Image = styled.img`
  @media (min-width: 500px) {
    float: right;
    margin-left: 1rem;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1024px;
  margin: auto;

  @media (min-width: 500px) {
    display: block;
  }
`;

const LittleBit = styled.div`
  font-family: "Sulphur Point";
  font-size: 24px;
  text-align: center;
  padding: 1rem 0;

  @media (min-width: 500px) {
    font-size: 28px;
  }

  ${props => props.float 
    ? 
      `
        float: left; 
        padding: 0rem 2rem 0 0rem;
        font-size: 36px;
        display: none; 

        @media (min-width: 1075px) {
          display: block;
        }
      `
    : 
      `
        display: flex;
        justify-content: center;

        @media (min-width: 1075px) {
          display: none;
        }
      `
  }
`;

const StyledP = styled.p`
  min-width: calc(320px - 2rem);
  margin-top: 0;
  margin-bottom: 32px;
`;

export default LandingAbout;
