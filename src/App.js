import './App.css';
import Products from './components/products/Products';
import Context from './context/Context';
import Header from './components/header.js/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Context>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<Products />}></Route>
            <Route exact path='/cart' element={< Cart />}></Route>
          </Routes>
        </div>

      </Router>
    </Context>
  );
}

export default App;
