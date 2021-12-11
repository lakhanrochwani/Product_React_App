import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui fixed menu ">
      <div className="ui container center">
        <Link to="/">
          <h2>Shoppers Stop!</h2>
        </Link>
        <Link to="/cart">
          <i
            className="shopping cart icon"
            style={{ fontSize: '24px', position: 'absolute', right: '479px' }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
