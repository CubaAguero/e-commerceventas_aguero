import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from './pages/Home'
import Cart from './pages/Cart';
import ItemListContainer from './pages/ItemListContainer';
import Contact from './pages/Contact';
import About from './pages/About';


//Componets
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './pages/ItemDetailContainer';
//

function App() {
  return (
    <div className="App">
     
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
          </Switch>
      </Router>

    </div>
  );
}

export default App;
