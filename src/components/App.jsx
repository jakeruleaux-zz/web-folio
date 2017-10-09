import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App () {
  return (
    <div>
      App
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>

    </div>
  )
}

export default App;
