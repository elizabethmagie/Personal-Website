import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cornell from '../Images/cornell.jpg';
import mcmullen from '../Images/mcmullen.jpg';
import EIA from '../Images/EIA.jpg';
import tg from '../Images/tg.jpg';
import mm from '../Images/mm.jpg';

import './Education.css';

const formalEducationScreens = [
  {
    title: "Cornell University",
    description: "B.S. in Mechanical Engineering",
    image: cornell,
  },
  {
    title: "McMullen's Dean Scholar",
    description: "Selected as one of the 60 students in the college of engineering to receive this award for students with outstanding achievements and engineering potential.",
    image: mcmullen,
  },
  {
    title: "Engineers in Action Project Team",
    description: "Engineers in Action builds a bridge annually with an underserved community to overcome a geographical limitation. The engineering subteam designs and implements the bridge, along with educating the local community on maintaining the structure.",
    image: EIA,
  },
  {
    title: "Student Manager at Visitor Relations",
    description: "Coordinated and scheduled a team of 80 tour guides while overseeing the daily operations of the Cornell visitor's center.",
    image: tg,
  },
  {
    title: "Mediocre Melodies",
    description: "Music director and member of a student a cappella group for mediocre singers.",
    image: mm,
  },
];

const codecademyCerts = [
  {
    title: "Computer Science Certificate",
    description: "Topics: Data Structures | Algorithms | Trees and Graphs | Databases | Computer Architecture",
  },
  {
    title: "Web Development Certificate",
    description: "Topics: JavaScript | React | CSS | API Interactions | Hooks | State Management",
  },
  {
    title: "Additional Courses",
    description: "Topics: Python | TypeScript | Git & GitHub | SQL & PostgreSQL | HTML | OOP",
  },
];

export const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === formalEducationScreens.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Education</h2>

      <div className="mb-5">
        <div className="carousel slide formal-education" id="educationCarousel">
          {/* Formal Education Carousel */}
          <div className="carousel-inner">
            {formalEducationScreens.map((screen, index) => (
              <div
                className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                key={index}
              >
                <img src={screen.image} className="d-block w-100 carousel-image" alt={screen.title} />
                <div className="carousel-caption gray-background">
                  <h5>{screen.title}</h5>
                  <p style={{ fontSize: "14px" }}>{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={() => setCurrentIndex(currentIndex === 0 ? formalEducationScreens.length - 1 : currentIndex - 1)}
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* Codecademy Section */}
      <div className="codecademy-section mt-5">
        <h4 className="text-center">Codecademy</h4>
        <div className="row">
          {codecademyCerts.map((cert, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};