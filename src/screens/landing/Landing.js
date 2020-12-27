/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
const Landing = (props) => {

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
           Front End: ReactJS, 
          </div>
          <div>
            Back End: Ruby on Rails
          </div>
        </HeroSubTextMobile>
      </Hero>
    </LandingWrapper>     
  )
}

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
`

const HeroText = styled.div`
  font-weight: 300;
  font-size: 72px;
  text-align: center;

  @media (max-width: 901px) {
    font-size: 48px;
  }
`

const HeroSubText = styled.div`
  font-weight: 400;
  font-size: 36px;
  text-align: center;

  @media (max-width: 901px) {
    font-size: 24px;
  }

  @media (max-width: 607px) {
    display: none;
  }
`

const HeroSubTextMobile = styled.div`
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  display: none;
  width: 320px;
  margin-top: 1rem;
  @media (max-width: 607px) {
    display: block;
  }
`

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--nav-height));
  margin: 0 1rem;
`

export default Landing
