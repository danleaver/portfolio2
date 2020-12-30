/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRef } from 'react';

const LandingHero = (props) => {
  const about = useRef(null)

  return (
    <LandingWrapper>
      <Hero>
        <HeroText>
          I write <span css={css`color: #4AF626`}>code</span> for websites.
        </HeroText>
        <HeroSubText>
          &#123; frontEnd: reactJS, back_end: ruby_on_rails &#125;
        </HeroSubText>
        <HeroSubTextMobile>
          <div>
          Front End: ReactJS
          </div>
          <div>
            Back End: Ruby on Rails
          </div>
        </HeroSubTextMobile>
      </Hero>
      <DownArrows 
        onClick={() => about.current.scrollIntoView()}
      >
        &gt;&gt; 
      </DownArrows>
      <div ref={about} css={css`position: absolute; bottom: var(--nav-height); height: 3rem;`} />
    </LandingWrapper>
  )
};

const DownArrows = styled.div`
  font-family: "Montez";
  font-size: 96px;
  writing-mode: vertical-rl;
  color: #4AF626;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  left: calc(50vw - 42px);

  @media (max-width: 1025px) {
    font-size: 72px;
  }

  @media (max-width: 851px) {
    font-size: 64px;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: white;
  font-family: "Sulphur Point";
  text-shadow: 0px 4px 4px rgba(0,0,0,0.25)

  @media (max-width: 600px) {
    max-width: 320px;
  }
`;

const HeroText = styled.div`
  font-weight: 300;
  font-size: 72px;
  text-align: center;

  @media (max-width: 1025px) {
    font-size: 64px;
  }

  @media (max-width: 851px) {
    font-size: 48px;
  }
`;

const HeroSubText = styled.div`
  font-weight: 400;
  font-size: 36px;
  text-align: center;

  @media (max-width: 1025px) {
    font-size: 32px;
  }

  @media (max-width: 851px) {
    font-size: 24px;
  }

  @media (max-width: 599px) {
    display: none;
  }
`;

const HeroSubTextMobile = styled.div`
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  display: none;
  width: 320px;
  margin-top: 1rem;
  @media (max-width: 599px) {
    display: block;
  }
`;

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--nav-height));
  margin: 0 1rem 5rem;
`;

export default LandingHero;
