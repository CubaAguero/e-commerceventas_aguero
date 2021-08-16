import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

//Pages
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';


//Componets
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
//
//Context
import { CartProvider } from './Context/CartContext';


//

function App() {
  
  return (
    <div className="App">
     <CartProvider>
        <Router>
          <NavBar/> 
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/Products">
                <ItemListContainer />
              </Route>
              
              <Route exact path="/Category/:categoryID">
                <ItemListContainer />
              </Route>

              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>

              <Route path="/Cart">
                <Cart />
              </Route>

              <Route path='/Contact'>
                <Contact />
              </Route>

              <Route path='/About'>
                <About />
              </Route>

              <Route path='/Checkout'>
                <Checkout />
              </Route>
            </Switch>
            <Footer />
         </Router>
      </CartProvider>

    </div>
  );
}

export default App;
