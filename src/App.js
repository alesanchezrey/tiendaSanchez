import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
  <div className="App">
    <CartProvider>
      <BrowserRouter>   
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a Funko Pop Stars"/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
