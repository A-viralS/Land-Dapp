import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent page reload
    navigate('/about');
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return (
    <button
      type="button"
      className={`py-4 border-radius px-6 bg-amber-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
      onClick={handleClick}
    >
      Read More
    </button>
  );
};

export default Button;
