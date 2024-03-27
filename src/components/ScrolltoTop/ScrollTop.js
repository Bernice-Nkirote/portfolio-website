import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollTop.css';
import { useEffect, useState } from 'react';
const ScrollTop = () => {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {topButton && (
        <button className='top-btn' onClick={scrollUp}>
          <FontAwesomeIcon className='iconTop' icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
