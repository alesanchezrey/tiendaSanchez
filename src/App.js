import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const stock = 5
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer greeting="Bienvenido a Funko Pop Stars" />
      <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
