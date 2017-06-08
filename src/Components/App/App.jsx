import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import bootstrapStyle from '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import appStyle from './_app.scss';
import AppContainer  from '../../Containers/AppContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <AppContainer />
      </Router>
    );
  }
};

render(<App />, document.getElementById('app'));
