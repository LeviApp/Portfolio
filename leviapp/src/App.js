import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './SASS/App.sass';
import Navigation from './Navigation';
import About from './About'
import Dev from './Dev'
import Art from './Art'
import Contact from './Contact'

import { Redirect } from 'react-router'

function App() {
  return (
    <div className="App">
     <Navigation />
      <Route exact path="/">
      {<Redirect to="/about" />}
      </Route>     
    <Route path="/about" component={About} />
     <Route path="/dev" component={Dev} />
     <Route path="/art" component={Art} />
     <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
