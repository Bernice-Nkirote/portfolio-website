import React from 'react';
import './Services.css';
import { skillset } from '../resources/skills';
function Services() {
  return (
    <section id='services' className='service-section'>
      <h1 className='playfair-display-h1'>Services</h1>
      <article className='services'>
        {skillset.map((skill) => (
          <div key={skill.id} className='skill'>
            <div className='skills-title'>
              <h5 className='service'>{skill.service}</h5>
              <p className='icon'>{skill.icon}</p>
            </div>
            <div className='service-body'>
              <p className='text-service'>{skill.text}</p>
              {/* Map through devicons and render them */}
              <div className='img-container'>
                {skill.devicons && skill.devicons.length > 0 ? (
                  skill.devicons.map((devicon, index) => (
                    <img
                      key={index}
                      className='icon-img'
                      src={devicon.imgUrl}
                      alt={devicon.name}
                    />
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Services;
