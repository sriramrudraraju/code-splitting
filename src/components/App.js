import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

// import CreatedStore from './store'
import createStore from '../store/store';
import Route from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={createStore()}>
          <Router>
            {/*navigation links*/}
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
              </ul>
              <hr />

              {/*routing view*/}
              <Route />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
