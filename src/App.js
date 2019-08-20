import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>hellp there give me candy</h1>
  </div>
);

function App() {
  return (<Router>

    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>

  </Router>
  );
}

export default App;
