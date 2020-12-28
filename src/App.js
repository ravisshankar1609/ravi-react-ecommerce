import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';

import { ProductProvider } from './context';
import Modal from './components/Modal';

function App() {
  return (
   <>
   <ProductProvider>
   <Router>
  
   <Navbar/>
   <Switch>
   <Route exact path="/" component = {Home}/>  
     <Route path="/products" component = {ProductList}/>
     <Route path="/details" component = {Details}/>
     <Route path="/cart" component={Cart}/>
     <Route component={Default}/> 
   </Switch>
   <Modal/>
   </Router>
   </ProductProvider>
   
  
   </>
  );
}

export default App;
