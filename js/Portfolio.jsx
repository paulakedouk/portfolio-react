import React from 'react';
import { render } from 'react-dom';
import Header from './Header';

const App = () => (
  <div className="app">
    <Header />
  </div>
);

render(<App />, document.getElementById('app'));
