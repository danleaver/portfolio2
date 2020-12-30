import LandingAbout from './LandingAbout';
import LandingProjects from './LandingProjects';
import LandingHero from './LandingHero';
import LandingFooter from './LandingFooter';
import Clearfix from '../../components/Clearfix';

const Landing = () => (
  <Clearfix>
    <LandingHero />
    <LandingAbout />
    <LandingProjects />
    <LandingFooter />
  </Clearfix>
);


export default Landing;
