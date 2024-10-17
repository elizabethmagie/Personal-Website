import React, { useState } from "react";
import "./Education.css";
import cornell from '../Images/cornell.jpg';
import mcmullen from '../Images/mcmullen.jpg';
import EIA from '../Images/EIA.jpg';
import tg from '../Images/tg.jpg';
import mm from '../Images/mm.jpg';

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
    description: "Coordinated and scheduled a team of 80 tour guides while overseeing the daily operations of the Cornell visitor's center. Ensured smooth and efficient service, helping hundreds of guests each day experience the campus with personalized attention and care.",
    image: tg, 
  },
  {
    title: "Mediocre Melodies",
    description: "Music director and member of a student a cappella group for mediocre singers.",
    image: mm, 
  },
];

export const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === formalEducationScreens.length - 1 ? 0 : prevIndex + 1
    );
  };


  const toggleCard = (cardTitle: string) => {
    setSelectedCard(selectedCard === cardTitle ? null : cardTitle);
  };

  return (
    <div className="education-container">
      <div className="column formal-education-carousel">
        <div className="carousel-container">
          <div className="carousel-screen">
            <img src={formalEducationScreens[currentIndex].image} alt={formalEducationScreens[currentIndex].title} />
            <h3>{formalEducationScreens[currentIndex].title}</h3>
            <p>{formalEducationScreens[currentIndex].description}</p>
          </div>
          <button className="carousel-button right" onClick={handleNext}>
            &#9654;
          </button>
        </div>
      </div>

      <div className="column certifications">
        <h2>Codecademy</h2>
        <div className="card" onClick={() => toggleCard("CompSci")}>
          <h3>Computer Science Certificate</h3>
          {selectedCard === "CompSci" && (
            <p>Data Structures, Algorithms, Trees and Graphs, Databases, Computer Architecture, Discrete Math</p>
          )}
        </div>

        <div className="card" onClick={() => toggleCard("WebDev")}>
          <h3>Web Development Certificate</h3>
          {selectedCard === "WebDev" && (
            <p>Earned from Codecademy. Topics: Components, Hooks, State Management.</p>
          )}
        </div>

        <div className="card" onClick={() => toggleCard("HTML & CSS")}>
          <h3>HTML & CSS Certificate</h3>
          {selectedCard === "HTML & CSS" && (
            <p>Earned from Codecademy. Topics: Flexbox, Grid, Responsive Design.</p>
          )}
        </div>

        {/* Add more cards as needed */}
      </div>
    </div>
  );
};
