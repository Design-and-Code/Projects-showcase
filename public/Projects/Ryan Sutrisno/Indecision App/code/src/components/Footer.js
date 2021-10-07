import React from 'react';

const Footer = (props) => (
  <div className='footer'>
    <footer className='footer__text'>
      Copyright &copy; {new Date().getFullYear()} . {props.footer}
    </footer>
  </div>
);

Footer.defaultProps = {
  footer: 'Created by : Ryan Sutrisno'
};

export default Footer;
