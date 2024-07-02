import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <div>
      <a href={link}>
        <img src={src} alt={`${h3} logo`} className="hover" />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
