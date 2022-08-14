
import './App.css';
import Nav from './SideBar/nav';
import HomePage from './Components/HomePage/Home/homePage';
import HomeAddProduct from './Components/Manage/AddSupplier/HomeAddSupplier/home';
import HomeBuy from './Components/Manage/BuyProduct/HomeBuyProduct/HomeBuy';
import DetailBuy from './Components/Manage/BuyProduct/DetailBuy/DetailBuy';
import NavTotal from './NavTotal/Nav';
import AddProduct from './Components/Product/AddProduct/AddProduct';
import AllProduct from './Components/Product/AllProduct/AllProduct'
import AddClient from './Components/Client/AddClient/addClient';
import AllClient from './Components/Client/Allclient/AllClient';
import DetailClient from './Components/Client/Detail/DetailClient';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
function App() {

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
   

  const postApiProduct=async(item)=>{
    await axios.post('http://localhost:3000/product',item)
  }


  return (
    <>  <Router>
      <div className="App-1">
        <Nav />
        <div className='App-2'>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/Add-Supplier">
              <HomeAddProduct />
            </Route>
            <Route path="/Buy-Product" exact>
              <HomeBuy />
            </Route>
            <Route path="/Buy-Product/:id" >
              <NavTotal />
              <DetailBuy />
            </Route>



            <Route path="/Add-Product">
              <AddProduct
              postApiProduct={postApiProduct}
              />
            </Route>
            <Route path="/All-Product">
              <AllProduct/>
            </Route>


            
            <Route path="/Add-Client">
             <AddClient/>
            </Route>
            <Route path="/All-Client" exact>
             <AllClient/>
            </Route>
            <Route path="/All-Client/:id" >
              <NavTotal />
              <DetailClient />
            </Route>


             
          




          </Switch>
        </div>

      </div>
    </Router>
      {ShowGoToTop && <> <i style={{ position: 'fixed', right: 20, bottom: 20, }} onClick={() => GoToTopClick()} class="fad fa-arrow-circle-up fa-4x"></i></>}
    </>


  );
}

export default App;
