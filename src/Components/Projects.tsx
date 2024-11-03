import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import jammming from "../Images/jammming.png";
import website from "../Images/website.png";

export const Projects: React.FC = () => {
  return (
    <div className="container mt-5 projects-section">
      <h2 className="text-center mb-4">Project Spotlight</h2>

      <div className="card project-card">
        <div className="row g-0">
          <div className="col-md-4 project-image-container">
            <img
              src={jammming}
              className="img-fluid rounded-start project-image"
              alt="Project Screenshot"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Jammming</h5>
              <p className="card-text">
                I developed a web application that enables users to search the Spotify library, craft personalized playlists, 
                and save them directly to their Spotify accounts. I implemented the entire user interface, leveraging React, 
                CSS, and the Spotify API to deliver a seamless user experience.
              </p>
              <a
                href="https://github.com/elizabethmagie/jammming"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card project-card">
        <div className="row g-0">
          <div className="col-md-4 project-image-container">
            <img
              src={website}
              className="img-fluid rounded-start project-image"
              alt="Website Project Screenshot"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Personal Website</h5>
              <p className="card-text">
                I created a responsive personal website (you're looking at it 😉) using TypeScript, React, CSS, and Bootstrap to 
                showcase my portfolio. This project strengthened my front-end expertise as I customized components for 
                a smooth, intuitive design and integrated Cursor to streamline my workflow.
              </p>
              <a
                href="https://github.com/elizabethmagie/Personal-Website"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
