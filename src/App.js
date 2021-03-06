/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import Landing from './screens/landing/Landing';
import Projects from './screens/projects/Projects';
import ProjectShow from './screens/project-show/ProjectShow';
import Resume from './screens/resume/Resume';
import NoMatch from './components/NoMatch';
import Clearfix from './components/Clearfix'

const App = () => (
  <Router>
    <Navbar path="/" >
      <Landing path="/" />
      <Projects path="/projects" />
      <ProjectShow path="/projects/:id" />
      <Resume path="/resume" />
      <NoMatch default />
    </Navbar >
  </Router>
)

export default App;
