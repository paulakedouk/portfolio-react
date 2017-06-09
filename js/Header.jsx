import React from 'react';

const TextHeader = {
  margin: '0 auto',
  paddingBottom: '100px',
  alignContent: 'center'
};

const Title = {
  fontSize: '60px',
  fontWeight: '700',
  color: 'white',
  textAlign: 'center',
  marginBottom: '15px'
};

const Subtitle = {
  backgroundColor: '#ED527F',
  color: 'white',
  paddingTop: '10px',
  width: '340px',
  height: '30px',
  borderRadius: '20px',
  letterSpacing: '3px',
  fontWeight: '300',
  fontSize: '14px',
  textAlign: 'center',
  margin: '0 auto'
};

const Quote = {
  position: 'absolute',
  left: '0',
  right: '0',
  bottom: '70px',
  textAlign: 'center',
  color: 'white',
  letterSpacing: '2px',
  fontSize: '16px'
};

const Arrow = {
  width: '50px',
  position: 'absolute',
  left: '0',
  right: '0',
  bottom: '30px',
  margin: '0 auto',
  cursor: 'pointer',
  transform: 'matrix(1, 0, 0, 1, 0, 0)'
};

const Header = () => (
  <div className="background">
    <div style={TextHeader}>
      <h1 style={Title}>anapaula.io</h1>
      <h2 style={Subtitle}>designer & developer</h2>
      <p style={Quote}>Testando</p>
      <div className="arrowImg" style={Arrow} />
    </div>
  </div>
);

export default Header;
