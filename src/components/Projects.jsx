import React from 'react';
import projectsData from '../data/proj.jsx';

const Projects = () => (
  <section id="projects">
    <div className="projects-container">
      <div className="heading">
        <h2 className="title">My Works</h2>
        <div className="separator" />
        <p className="subtitle">
  Here's a list of the recent projects I've been working on — ranging from full-stack web apps to blockchain-based dApps. I'm constantly building, learning, and experimenting to grow as a developer and contribute to impactful, real-world solutions.
</p>

      </div>
      {projectsData.map((project, idx) => (
        <div className="project" key={idx}>
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
            <img className="project-image" src={project.img} alt={`Screenshot of ${project.title}`} />
          </a>
          <div className="project-details">
            <h3 className="project-tile">{project.title}</h3>
            <small>{project.tech}</small>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                View source <i className="fas fa-external-link-alt"></i>
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Try it Live <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;