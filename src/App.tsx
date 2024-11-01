import React from 'react';

import './App.css';
import { CyclePhotos} from './Components/CyclePhotos';
import { SocialLinks } from './Components/SocialLinks';
import { Toolbar } from './Components/Toolbar';
import { SkillsIcons } from './Components/SkillsIcons';
import { Work } from './Components/Work';
import { Education } from './Components/Education';
import { Projects } from './Components/Projects';
import { Fun } from './Components/Fun';



const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='toolbar-container'>
        <Toolbar />
      </div>

      <div className='content'>
        <section id='app-header' className='d-flex align-items-center justify-content-between personal-website'>
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

        <section id='work-experience-header' className='personal-website'>
          <Work />
        </section>

        <section id='projects-header' className='personal-website'>
          <Projects />
        </section>


        <section id='education-header' className='personal-website'>
          <Education />
        </section>

        <section id='fun-header' className='personal-website'>
          <Fun />
        </section>
      </div>
    </div>
  );
};

export default App;


