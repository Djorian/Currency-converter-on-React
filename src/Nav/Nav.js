import React from 'react';
import './Nav.css';

let activeMain = '';
let activeAbout = '';
let activeContact = '';

class Nav extends React.Component {

  activeNavLink = () => {
    let currentLocation = window.location.href;

    if (currentLocation === "https://portfolio-5-currency-converter.firebaseapp.com/" || currentLocation === "https://portfolio-5-currency-converter.firebaseapp.com") {
      activeMain = 'active';
    }
    if (currentLocation === "https://portfolio-5-currency-converter.firebaseapp.com/about") {
      activeAbout = 'active';
    }
    if (currentLocation === "https://portfolio-5-currency-converter.firebaseapp.com/contact") {
      activeContact = 'active';
    }
  }

  render() {
    return (
      <div id="nav">
        {this.activeNavLink()}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
                <a className="navbar-brand" href="/">Курсы Валют</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className={'nav-link ' + activeMain} href="/">Главная</a>
                    </li>
                    <li className="nav-item">
                      <a className={'nav-link ' + activeAbout} href="/about">О нас</a>
                    </li>
                    <li className="nav-item">
                      <a className={'nav-link ' + activeContact} href="/contact">Контакты</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" target="_blank" rel="noopener noreferrer" href="http://exchangeratesapi.io/">API</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
