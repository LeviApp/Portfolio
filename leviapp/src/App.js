import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './SASS/App.sass';
import Navigation from './Navigation';
import About from './About'
import Dev from './Dev'
import Art from './Art'
import Contact from './Contact'
import Submitted from './Submitted'

import { Redirect } from 'react-router'

function App() {
  return (
    <div className="App">
     <Navigation />    
    <Route path="/about" component={About} />
    <Route exact path="/" render={(props) =>  <Redirect to='/about' /> } />

     <Route path="/dev" component={Dev} />
     <Route path="/art" component={Art} />
     <Route path="/contact" component={Contact} />
     <Route path="/submitted" component={Submitted} />

    </div>
  );
}

export default App;
