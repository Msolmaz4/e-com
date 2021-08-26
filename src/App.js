
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import React from 'react';
import ProductList from './components/ProductList'
import Details from './components/Deatils'
import Cart from './components/Cart'
import Default from './components/Default'


 
function App() {
 
  

  return (
      <div>
        <React.Fragment>
          <Navbar/>
         <Switch>
          <Route path='/' component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route component={Default}/> 

         </Switch>
        </React.Fragment>
     
      </div>


     
  
  );
}

export default App;
