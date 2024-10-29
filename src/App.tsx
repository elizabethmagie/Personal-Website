import React from 'react';

import './App.css';
import { CyclePhotos} from './Components/CyclePhotos';
import { SocialLinks } from './Components/SocialLinks';
import { Toolbar } from './Components/Toolbar';
import { SkillsIcons } from './Components/SkillsIcons';
import { Work } from './Components/Work';
import { Education } from './Components/Education';
import { Projects } from './Components/Projects';



const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='toolbar-container'>
        <Toolbar />
      </div>

      <div className='content'>
        <section id='app-header' className='d-flex align-items-center justify-content-between PWS'>
          <div>
            <h1>Hi! I'm Elizabeth, <br /> and I'm a software engineer.</h1>
            <SocialLinks />
            <h2 style={{ textAlign: 'left', marginLeft: '125px', marginTop: '75px' }}>Languages & Software Tools</h2>
            <SkillsIcons />
          </div>
          <div>
            <CyclePhotos />
          </div>
        </section>

        <section id='work-experience-header' className='PWS'>
          <Work />
        </section>

        <section id='projects-header' className='PWS'>
          <Projects />
        </section>


        <section id='education-header' className='PWS'>
          <Education />
        </section>
      </div>
    </div>
  );
};

export default App;


