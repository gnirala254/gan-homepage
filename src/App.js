import './App.css';
import Products from './components/products/Products';
import Context from './context/Context';
import Header from './components/header.js/Header';

function App() {
  return (
    <Context>
      <div className="App">
        <Header />
        <Products />
      </div>
    </Context>
  );
}

export default App;
