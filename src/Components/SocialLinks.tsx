import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './SocialLinks.css';

export const SocialLinks: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', fontSize: '1.5rem' }}>
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/elizabeth-magie/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="icon"
      >
        <FaLinkedin />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/elizabethmagie"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="icon"
      >
        <FaGithub />
      </a>

      {/* Email Icon */}
      <a
        href="mailto:lizzieemagie@gmail.com"
        aria-label="Email"
        className="icon"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};