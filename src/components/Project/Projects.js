import React from 'react';
import './Project.css';
import { projects } from '../resources/data';

function Projects() {
  return (
    <section id='projects' className='project-section'>
      <h1 className='playfair-display-h1'>Projects</h1>
      <article className='projects'>
        {projects.map((project) => {
          const { id, name, img, url, icon, viewPage, view } = project;
          return (
            <div key={id} className='card'>
              <img className='card-img' src={img} alt={name} />
              <div className='card-body'>
                <h4 className='card-title'>{name}</h4>
                <a href={url} target='blank' rel='noopener noreferrer'>
                  <button className='card-btn'>{icon}</button>
                </a>
                <a href={viewPage} target='blank' rel='noopener noreferrer'>
                  <button className='card-view'>View {view}</button>
                </a>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Projects;
