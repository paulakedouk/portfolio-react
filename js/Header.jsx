import React from 'react';
import preload from '../data.json';

const Header = () => (
  <div className="background main">
    {preload.header.map(infos => (
      <div className="header-text">
        <h1 className="header-title">{infos.name}</h1>
        <h2 className="header-subtitle">{infos.subtitle}</h2>
        <p className="header-p">{infos.text}</p>
        <div className="header-arrow">
          <img alt="Arrow" src={`../public/img/arrow.svg`} />
        </div>
      </div>
    ))}
  </div>
);

export default Header;
