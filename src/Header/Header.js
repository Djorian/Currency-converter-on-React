import React from 'react';
import './Header.css';

import Nav from '../Nav/Nav';

class Header extends React.Component {

  render() {
    return (
      <header id="header">
        <div id="heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="text-center mt-3 mb-3">Курсы обмена валют</h1>
                <p className="text-center mb-3">Перевести деньги из одной валюты в другую</p>
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </header>
    );
  }
}

export default Header;
