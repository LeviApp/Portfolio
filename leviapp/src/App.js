import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './SASS/App.sass';
import Navigation from './Navigation';
import Dev from './Dev'
import Art from './Art'
import Contact from './Contact'
function App() {
  return (
    <div className="App">
     <Navigation />
     <Route exact path="/dev" component={Dev} />
     <Route exact path="/art" component={Art} />
     <Route exact path="/contact" component={Contact} />

    </div>
  );
}

export default App;