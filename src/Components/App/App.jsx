import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import bootstrapStyle from '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import appStyle from './_app.scss';
import AppContainer from '../../Containers/AppContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <div className="parallaxIndex">
            <div className="welcomeContainer">
              <h3> The best bitcoin assistant </h3>
              <h1> WELCOME TO THE NEW CURRENCY HELPER </h1>
              <h3> All you need to know about bitcoin </h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className='generalContainer'>
                  <AppContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
};

render(<App />, document.getElementById('app'));
