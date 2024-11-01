import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fun.css';
import golf2 from '../Images/golf2.jpg';
import half_dome from '../Images/half_dome.jpg';
import ski2 from '../Images/ski2.jpg';
import travel from '../Images/travel.jpg';

export const Fun: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const activities = [
    { title: "Hiking", image: half_dome, description: `
      Hiking is one of my favorite ways to explore and experience nature. 
      Everywhere I travel, I love to see what unique landscapes and views each place has to offer. 
      I grew up going to Yosemite National Park, one of my favorite places in the world, and the photo here is at
      the summit of Half Dome. Some of my favorite hikes have been Huayna Picchu in Machu Picchu,
      Glacier Point in Yosemite, the Kalalau Trail on Kauai, and the Narrows in Zion National Park.
      `},
    { title: "Golfing", image: golf2, description: `
      Since graduating, I've become obsessed with golfing. It's taken up a lot of my time and money, but the satisfaction
      of hitting a great shot keeps me coming back. Exploring different courses around the country has been a highlight,
      although I'm especially partial to the Presidio and Half Moon Bay courses in the Bay Area. I'm most excited for 
      all the golf I'm going to play in Hawaii over the next couple years, and I'm hoping golf will be a sport I can enjoy 
      well into retirement.
      `},
    { title: "Skiing", image: ski2, description: `
      I’ve been an avid skier since childhood, one of the perks of growing up in California. I’ve loved experiencing the
      amazing skiing the Sierras offer, enjoying incredible west coast powder without living in the cold. Mammoth Mountain
      and Palisades are my home resorts, but Aspen and Whistler are my all-time favorites. I hope to spend an 
      entire winter ski-bumming in the Rockies, and perhaps even make it to the Alps someday for both the slopes
      and the après ski!
      `},
    { title: "Travel", image: travel, description: `
      I love to travel. Experiencing new places and cultures makes me feel truly alive, and I prioritize it since
      novelty changes our perception of time. Most recently, I journeyed through Scandinavia, Peru, and Greece, each 
      destination offering unique foods and breathtaking landscapes. I dream to spend the next few years as a digital nomad, 
      exploring diverse cities, immersing myself in different cultures, and embracing the stunning beauty our world has to offer."
      `},
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Fun</h2>
      <div className="row">
        {activities.map((activity, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div
              className={`card fun-card ${flippedCard === index ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="front">
                <img
                  src={activity.image}
                  className="card-img-top rounded-3"
                  alt={activity.title}
                />
              </div>
              <div className="back" onClick={() => handleCardClick(index)}>
                <div className="card-body">
                  <h5 className="card-title">{activity.title}</h5>
                  <p className="card-text">{activity.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: '400px' }}></div>
    </div>
  );
};

