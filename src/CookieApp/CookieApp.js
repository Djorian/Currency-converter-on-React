import React from 'react';
import './CookieApp.css';

class CookieApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  hideCoockieBlock() {
    document.querySelector('#cookie').style.display = (document.querySelector('#cookie').style.display === 'block') ? 'block' : 'none';
    return true;
  }

  render() {
    return (
      <div id="cookie" className="mt-3 text-center">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
        частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button onClick={this.hideCoockieBlock} className="btn btn-outline-secondary btn-sm">OK</button></div>
    );
  }
}

export default CookieApp;
