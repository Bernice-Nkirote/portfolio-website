import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { links, social } from '../resources/data';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [sectionHeight, setSectionHeight] = useState({});
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  // Calculates the height for the sections dynamically
  useEffect(() => {
    const measuredOffsets = {};
    links.forEach((link) => {
      const sectionRef = document.getElementById(link.id);
      if (sectionRef) {
        const offsetTop = sectionRef.offsetTop; // Get the top offset of the section
        measuredOffsets[link.id] = offsetTop;
      }
    });
    setSectionHeight(measuredOffsets);
  }, []);
  // Calculates the height for the links dynamically
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const closeMenu = () => {
    setShowLinks(false);
  };

  const calculateOffset = () => {
    // Get the viewport height
    const viewportHeight = window.innerHeight;
    // Define a threshold for smaller screens
    const threshold = 800; // You can adjust this threshold as needed
    // Define the offset values for different screen sizes
    const offset = viewportHeight < threshold ? -1000 : 0;
    return offset;
  };
  const navigation = (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h2 className='logo'>web-architect.</h2>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={sectionHeight[link.id] + calculateOffset()}
                  duration={500}
                  onClick={closeMenu}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className='social-media'>
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url} target='blank' rel='noopener noreferrer'>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
  return <main>{navigation}</main>;
}

export default Navbar;
