import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div className = 'App'>
    <Header />
     <Switch>
     <Route exact path = '/' component= {Homepage} />
     <Route path = '/shop' component= {ShopPage} />
     </Switch>
    </div>
  );
}

export default App;
