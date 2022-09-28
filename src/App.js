import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
 
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
