import logo from './logo.svg';
import './App.css';
import Khai_Bao from './Khai_Báo';
import Khai_Bao1 from './Khai_Báo Toàn đan';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Tờ Khai y tế /VietNam Health Declaration</h1>
        <Nav />
        <Switch>
          <Route path="/home" exact>
            <Khai_Bao />
          </Route>
          <Route path="/news">
            <Khai_Bao1  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
