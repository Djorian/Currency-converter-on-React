import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CookieApp from '../CookieApp/CookieApp';
import Rate from '../Rate/Rate';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Error404 from '../Error404/Error404';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <main>
                  <Router>
                    <Switch>
                      <Route exact path="/" component={Rate} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/contact" component={Contact} />
                      <Route component={Error404}></Route>
                    </Switch>
                  </Router>
                  <CookieApp />
                </main>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
