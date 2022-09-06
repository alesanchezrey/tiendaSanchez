import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const stock = 5
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Funko Pop Stars" />
      <ItemCount stock={stock}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
