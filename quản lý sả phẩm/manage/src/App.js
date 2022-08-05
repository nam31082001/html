import SideBar from './siBar/SideBar';
import TotalHome from './Home/TotalHome/TotalHome';
import './App.css';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <Router>
      <div className="App">
        <SideBar />
        {/* <Switch>
          <Route> */}
            <TotalHome exact path="/" />
          {/* </Route>
        </Switch> */}

      </div>
    // </Router>

  );
}

export default App;
