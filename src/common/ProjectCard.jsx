import React from 'react';

function ProjectCard({ src, link, h3, p ,className }) {
  return (
    <a href={link} target="_blank">
      <img className={className} src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
