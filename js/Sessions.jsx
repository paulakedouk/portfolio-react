import React from 'react';
import AboutMe from './AboutMe';
import preload from '../data.json';

const Sessions = () => (
  <div className="main">
    <header className="topic-session">
      {preload.session.map(session => <AboutMe key={session.key} {...session} />)}
    </header>
  </div>
);

export default Sessions;
