import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Sessions from './Sessions';
import AboutMe from './AboutMe';

const App = () => (
  <div className="app">
    <Header />
    <Sessions />
    <AboutMe />
  </div>
);

render(<App />, document.getElementById('app'));
