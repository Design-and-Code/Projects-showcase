import React from 'react';

const Header = (props) => (
  <div className='header'>
    <div className='container'>
      <h1 className='header__title'>{props.title}</h1>
      <div className='header__container'>
        {props.subtitle && (
          <h2 className='header__subtitle'>{props.subtitle}</h2>
        )}
        <small className='header__watermark'>{props.watermark}</small>
      </div>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Indecision Apps'
};

export default Header;
