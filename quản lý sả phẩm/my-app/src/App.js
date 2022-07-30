import './App.css';
import HomeMini from './miniHome/home';
import Nav from './Nav/nav';
import { useEffect, useState } from 'react';
import SideBar from './SideBar/bar';
import Home_Manager from './store manager/home/home';
import Home_Order from './Đặt Hàng/Home/home';
import Home_Product from './Sản Phẩm/Home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  const [ShowGoToTop, setShowGoToTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const GoToTopClick = () => {
    window.scrollTo(0, 0);
  }
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path="/" >
            <HomeMini />
          </Route>
          <Route path="/store-manager" >
            <Home_Manager />
          </Route>
          <Route path="/order" >
            <Home_Order />
          </Route>
          <Route exact path="/product" >
            <Home_Product />
          </Route>

        </Switch>


        {ShowGoToTop && <> <i style={{ position: 'fixed', right: 20, bottom: 20, }} onClick={() => GoToTopClick()} class="fad fa-arrow-circle-up fa-4x"></i></>}
      </div>

    </Router>

  );
}

export default App;
