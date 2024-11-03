import React from 'react';
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiMicrosoftsqlserver } from 'react-icons/si';

export const SkillsIcons: React.FC = () => {
  return (
    <div className='skills-icons-container'>
      <div title="Python">
        <FaPython />
      </div>
      <div title="JavaScript">
        <FaJs />
      </div>
      <div title="TypeScript">
        <SiTypescript />
      </div>
      <div title="HTML">
        <FaHtml5 />
      </div>
      <div title="CSS">
        <FaCss3Alt />
      </div>
      <div title="React">
        <FaReact />
      </div>
      <div title="Node.js">
        <FaNodeJs />
      </div>
      <div title="SQL">
        <SiMicrosoftsqlserver />
      </div>
      <div title="MySQL">
        <SiMysql />
      </div>
      <div title="Git">
        <FaGit />
      </div>
    </div>
  );
};
