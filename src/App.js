import NavBar from './components/NavBar.js';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <NavBar/>     
        <ItemDetailContainer />
      </header>

    </div>
  );
}

export default App;
