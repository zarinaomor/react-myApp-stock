import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import CreateStock from './components/StockContainer/StockContainer';
import Register from './components/Login/Register';
import Home from './components/Home/Home'


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
        <Route exact path="/home" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/stocks" component={ CreateStock } />
        <Route render={My404} />
      </Switch>
    </main>
  )
}

export default App;
