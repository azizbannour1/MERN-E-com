import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';


 

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
     <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/register"   element={<Register/>} />
    <Route path="/login"   element={<Login/>} />
    <Route path="/cart"   element={<Cart/>} />
    <Route path="/products/:category"   element={<ProductList/>} />
    <Route path="/product/:id"   element={<Product/>} />
    </Routes>
    </Router>
   );
}

export default App;
