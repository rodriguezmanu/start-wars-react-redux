import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import MovieDetails from '../../containers/details/MovieDetails';
import Home from '../home/Home';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/:id" component={MovieDetails} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default App;
