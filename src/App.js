import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import CreateStock from './components/CreateStock/CreateStock';


const My404 = () => {
  return (
    <div>
      Error
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/stocks" component={ CreateStock } />
        <Route render={My404} />
      </Switch>
    </main>
  )
}

export default App;
