import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';

class MainHeader extends Component {
  render() {
    return (
      <div className='topnav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/habibbhutto'
        >
          Github
        </a>
      </div>
    );
  }
}

export default MainHeader;
