import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import HomePage from './pages/home';

import './app.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavLink exact to="/">Home</NavLink> | 
          <NavLink to="/about">About</NavLink> | 
          <NavLink to="/contact">Contact</NavLink>

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
          </Switch>

          
      </BrowserRouter>
    </div>
  );
}

export default App;
