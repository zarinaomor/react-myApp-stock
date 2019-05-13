import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import StockContainer from './components/StockContainer/StockContainer';

const My404 = () => {
  return (
    <div>
      You are lost
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/stocks" component={ StockContainer } />
        <Route exact={My404} />
      </Switch>
    </main>
  )
}

export default App;
