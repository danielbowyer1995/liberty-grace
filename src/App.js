import React from 'react'
import {
  Route,
} from "react-router-dom";

import './App.css';

import Home from './pages/home/home.component'
import Header from './components/header-component/header.component'
import Shop from './pages/shop/shop.component'
import DesignerFrames from './pages/designer-frames/designer-frames.component';
import ProductPage from './pages/product-page/product-page.components';

const App = () => {
  return (
      <div className="App">
        <Header/>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/shop/designer-frames' component={DesignerFrames} />
        <Route exact path={'/shop/designer-frames/:productId'} component={ProductPage} />
      </div>
    
  );
}

export default App;
