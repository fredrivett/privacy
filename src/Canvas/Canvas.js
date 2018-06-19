import React from 'react';

import classes from './Canvas.css';

const canvas = props => {
  let transformedQuestions = null;

  return (
    <div className="Canvas">
      <div className="Canvas__section">
        <h2 className="Canvas__section-header">Business Practices</h2>
        <i className="Canvas__icon fas fa-hands-helping"></i>
      </div>
      <div className="Canvas__section">
        <h2 className="Canvas__section-header">Another thing</h2>
      </div>
      <div className="Canvas__section">
        <h2 className="Canvas__section-header">What will this one be</h2>
      </div>
      <div className="Canvas__section">
        <h2 className="Canvas__section-header">Not sure tbh</h2>
      </div>
    </div>
  );
};

export default canvas;
