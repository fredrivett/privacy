import React from 'react';
import Canvas from '../Canvas/Canvas';

import classes from './Sidebar.css';

const sidebar = props => {
  let transformedQuestions = null;

  return (
    <section className="Sidebar">
      <Canvas />
    </section>
  );
};

export default sidebar;
