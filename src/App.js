import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (<Router>

    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>

  </Router>
  );
}

export default App;
