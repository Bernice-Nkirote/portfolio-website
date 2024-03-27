import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <main>
      <section id='home' className='container'>
        <article>
          <h1 className='playfair-display-h1'>HI I'M BERNICE</h1>
          <div className='main-photo'>
            <img
              className='mainImg'
              src='portfolio-images/main-photo.jpg'
              alt='bernice'
            />
            <div className='intro'>
              <h4>Developer/ Frontend/ Backend/ Procurement Professional</h4>
              <p>
                How does a procurement professional turn into a coding virtuoso?
                Let me take you on a journey from supply chains to code lines,
                where strategy meets syntax and innovation is boundless.
              </p>
              <button className='abt-btn'>
                <Link to='about'>
                  Whole Story
                  <FontAwesomeIcon
                    className='abt-icon'
                    icon={faArrowRightLong}
                  />
                </Link>
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;
