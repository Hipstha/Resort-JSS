import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Navbar = (props) => (
  <>
    <div className="nav-center">
      <div className="nav-header">
        <img src="./images/logo.svg" alt="Beach Resort" />
        <button type="button" className="nav-btn"></button>
      </div>
      <ul className="nav-links show-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Rooms">Rooms</a>
        </li>
      </ul>
    </div>
  </>
);

export default Navbar;
