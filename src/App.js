import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import MovieDetail from './pages/movieDetail';
import ErrorPage from './pages/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/movie/:id" component={MovieDetail}></Route>
          <Route path="*" component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
