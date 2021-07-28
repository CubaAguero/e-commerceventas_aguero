import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

//Pages
import Home from './pages/Home'
import Cart from './pages/Cart';
import ItemListContainer from './pages/ItemListContainer';
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';


//Componets
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './pages/ItemDetailContainer';
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
         </Router>
      </CartProvider>

    </div>
  );
}

export default App;
