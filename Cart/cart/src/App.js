
import './App.css';
import ProductHome from './Componnts/Home';
import CartProduct from './Componnts/Cart';
import Nav from './Componnts/Nav';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <ProductHome/>
        </Route>
        <Route path="/cartProduct"> 
          <CartProduct/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
