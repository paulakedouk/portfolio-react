import React from 'react';
import preload from '../data.json';

const Header = () => (
  <div className="background main">
    <div className="header-text">
      <div>
        <h1 className="header-title">{preload.header.name}</h1>
        <h2 className="header-subtitle">{preload.header.subtitle}</h2>
        <p className="header-p">{preload.header.text}</p>
        <div className="header-arrow">
          <img alt="Arrow" src={`../public/img/arrow.svg`} />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
