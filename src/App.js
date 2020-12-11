import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/scss/style.scss';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
