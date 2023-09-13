// import { nanoid } from 'nanoid';
// import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    
    <div>
      
      {options.map(option => (
        <button

          // key={nanoid()}
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        
        </button>
      ))}
    </div>
    
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;