import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Admin from './Admin';

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
