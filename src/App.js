import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom';
import Products from './components/Products';
 
function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" exact element={<Products/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
