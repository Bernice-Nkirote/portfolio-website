import React from 'react';
import './About.css';

function About() {
  return (
    <section id='about' className='abt-container'>
      <article>
        <h1 className='playfair-display-h1'>About Me</h1>
        <div className='sub-title'>
          <h4>
            "To bring about change you must not be afraid to take the first
            step." Rosa Parks.
          </h4>
          <p className='abt-info'>
            From navigating supply chains to crafting code, my journey ignited
            when developers introduced a procurement web app. Intrigued, i
            immersed myself in coding's complexities, honing skills in
            problem-solving and innovation for over two years.Beyond screens,
            I'm a seeker of self-improvement, an artist, avid reader, and a
            tender caretaker of roses.
          </p>
          <div className='about-img'>
            <img
              className='abtImage'
              src='portfolio-images/about-me.jpeg'
              alt='about-img'
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
