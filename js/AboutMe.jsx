import React from 'react';
import { string } from 'prop-types';

const AboutMe = props => (
  <div>
    <h3 className="title-session">{props.about}</h3>
    <div className="bottom-line" />
  </div>
);

AboutMe.propTypes = {
  about: string.isRequired
};

export default AboutMe;
