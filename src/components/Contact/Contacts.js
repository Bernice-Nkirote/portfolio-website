import React, { useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  // Functionality for the footer
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('.footer');
    const name = 'Bernice Nkirote';
    footer.innerHTML = `&copy; ${currentYear} ${name}. All rights reserved.`;
  }, []);
  return (
    <section id='contacts' className='contact-section'>
      <h1 className='playfair-display-h1'>Contacts</h1>
      <article className='contacts'>
        <div className='info'>
          <h4>
            <a
              href='mailto:bernicemwirigi@gmail.com'
              target='blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </h4>
        </div>
        <div className='info'>
          <h4>
            <a
              href='tel:+254713244148'
              target='blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </h4>
        </div>
        <div className='info'>
          <h4>
            <a
              href='https://wa.me/254713244148'
              target='blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} />
            </a>
          </h4>
        </div>
      </article>
      <div className='download-cv'>
        <h5 className='desc'>
          Click below to snag my CV and let the adventure begin.
        </h5>
        <button className='download-btn'>
          <a href='/download-cv'>
            Download CV <FontAwesomeIcon icon={faDownload} />
          </a>
        </button>
      </div>
      <footer className='footer'></footer>
    </section>
  );
}

export default Contacts;
