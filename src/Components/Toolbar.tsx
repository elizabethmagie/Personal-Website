import './Toolbar.css';
import { Button, ButtonGroup } from 'react-bootstrap';

export const Toolbar: React.FC = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar">
        <ButtonGroup aria-label="Buttons">
          <Button
            variant="secondary"
            onClick={() => {
              const homeSection = document.getElementById('app-header');
              if (homeSection) homeSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            HOME
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              const workExperienceSection = document.getElementById('work-experience-header');
              if (workExperienceSection) workExperienceSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            WORK
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              const projectsSection = document.getElementById('projects-header');
              if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            PROJECTS
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              const educationSection = document.getElementById('education-header');
              if (educationSection) educationSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            EDUCATION
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              const funSection = document.getElementById('fun-header');
              if (funSection) funSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            FUN
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
