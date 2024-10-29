import React, { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './Work.css';
import stanford_logo from '../Images/stanford_logo.jpg';
import davis_logo from '../Images/davis_logo.png';
import cal_logo from '../Images/cal_logo.png';
import solar_logo from '../Images/solar_logo.png';

const jobsData = [
  {
    id: 1,
    title: 'Systems Optimization',
    subtitle: 'Data Analytics - Stanford University',
    logo: stanford_logo, 
    responsibilities: [
      'Analyzed and projected trends in system return water temperatures to optimize campus mechanical system energy use.',
      'Found optimal setpoints and decreased the yearly electric cost by 12%.',
      'Used the data and findings to independently develop a cost estimation tool in Microsoft Power BI from scratch.',
      'The Power BI dashboards were showcased at a national conference on campus decarbonization, illustrating electrical use and cost trends across thousands of scenarios.',
      'Interfaced directly with the client to present my findings and implement their feedback.',
      'Received overwhelmingly positive feedback from Stanford on the UI and usability of the tool.'
    ],
  },
  {
    id: 2,
    title: 'Campus Decarbonization',
    subtitle: 'Lead Mechanical Design - UC Davis',
    logo: davis_logo,
    responsibilities: [
      'Surveyed 24 steam-powered buildings on campus to understand their current mechanical systems and constraints.',
      'Led a cross-disciplinary team to design fully electrified, zero-net-carbon systems for all surveyed buildings.',
      'Calculated heating and potable water requirements for each building, identifying opportunities for system optimization and diversification.',
      'Created detailed mechanical drawings, details, and specifications in AutoCAD for designs.',
      'Communicated directly with contractors and vendors to ensure designs were manufacturable.',
    ],
  },
  {
    id: 3,
    title: 'Clean Energy Campus',
    subtitle: 'Mechanical Design - UC Berkeley',
    logo: cal_logo,
    responsibilities: [
      'Surveyed 60 buildings reliant on steam and natural gas to assess their mechanical heating and cooling systems.',
      'Collaborated with a cross-disciplinary team to redesign the mechanical systems of 10 buildings, achieving zero-net-carbon solutions.',
      'Calculated heating, cooling, and process steam loads for each building and designed electric system replacements.',
      'Developed detailed mechanical drawings in Autodesk Revit.',
      'Coordinated directly with clients and architects to ensure all design requirements were met.'
    ],
  },
  {
    id: 4,
    title: 'Solar Cell Plant',
    subtitle: 'Mechanical Design',
    logo: solar_logo,
    responsibilities: [
      'Designed the mechanical air systems for a solar cell manufacturing plant with 8 specialized rooms, each requiring precise temperature and humidity control.',
      'Conducted detailed heat transfer and fluid dynamics calculations to optimize airflow and temperature regulation across all rooms.',
      'Designed ductwork and fan layouts for the warehouse, ensuring efficient airflow and environmental control.',
      'Served as the sole mechanical design engineer for the airside systems, developing detailed mechanical drawings in Autodesk Revit.'
    ],
  },
];

export const Work: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);

  return (
    <div>
      <h2 className="text-center mb-4">Work Experience</h2>
    <div className="work-container">
      <div className="work-header">
        <FaBriefcase className="work-icon" />
        <h2 className="work-title">2022-2024: Mechanical Engineer @ Affiliated Engineers, Inc.</h2>
      </div>

      <div className="work-content">
        <div className="work-job-list">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className={`work-job-item ${selectedJob.id === job.id ? 'selected' : ''}`}
              onClick={() => setSelectedJob(job)}
            >
              <img src={job.logo} alt={`${job.title} logo`} className="work-job-logo" />
              <div className="work-job-text">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-subtitle">{job.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="work-job-details">
          <ul>
            {selectedJob.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Work;

