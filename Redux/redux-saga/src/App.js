
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";
import Nav from "./component/nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/users" >
            <User/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
