import NavBar from './components/NavBar.js';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          E-commerce Ventas Agüero
        </h1>
        <NavBar/>     
        <ItemListContainer />
      </header>

    </div>
  );
}

export default App;
