import React from "react";
import Nav from "../../Nav/nav";
import Nav_Manager from '../nav-Manager/navManagaer';
import Add_Ncc from '../product/ADD NCC/index';
import Buy_History from '../buy/BUY HISTORY/index'
import '../home/style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const Home_Manager = () => {
    return (
        <Router>
            <div className="Home_Manager">
                <Nav />
                <Nav_Manager />
                <Switch>
                    <Route exact path="/add-supplier"  >
                        <Add_Ncc/>
                    </Route>
                    <Route path="/buy-product">
                      <Buy_History/>
                    </Route>
                   
                </Switch>
            </div>
        </Router>
    )
}
export default Home_Manager