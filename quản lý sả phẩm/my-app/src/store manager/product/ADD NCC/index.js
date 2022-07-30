import React, { useEffect, useState } from "react"
import '../ADD NCC/style.css'
import Nav_Product from "../nav-product/nav";
import Quan_Ly_NCC from '../QUẢN LÝ NCC/index'
import Add from "../home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



const Add_Ncc = () => {
    const [customerInformation, setCustomerInformation] = useState([
        { id: 1, name: "Công Ty A", phone: "08779899", product: "Bánh Mỳ1", email: "abcxyz@gmail.com" },
        { id: 2, name: "Công Ty B", phone: "08779899", product: "Bánh Mỳ2", email: "abcxyz@gmail.com" },
        { id: 3, name: "Công Ty C", phone: "08779899", product: "Bánh Mỳ3", email: "abcxyz@gmail.com" },
        { id: 4, name: "Công Ty D", phone: "08779899", product: "Bánh Mỳ4", email: "abcxyz@gmail.com" },
        { id: 9, name: "Công Ty D", phone: "08779899", product: "Bánh Mỳ4", email: "abcxyz@gmail.com" },
        { id: 5, name: "Công Ty E", phone: "08779899", product: "Bánh Mỳ5", email: "abcxyz@gmail.com" },
        { id: 6, name: "Công Ty F", phone: "08779899", product: "Bánh Mỳ6", email: "abcxyz@gmail.com" },
    ])
    const arr = [...customerInformation]

    const AddItem = (item) => {
        arr.push(item)
        setCustomerInformation(arr)
    }
    const Delete = (job) => {
        let dataNew = [...customerInformation]
        dataNew = dataNew.filter(item => job.id !== item.id)
        setCustomerInformation(dataNew);
    }
    return (
        <Router>
            <div className="Add_Ncc">
                <Nav_Product />
                <Switch>
                    <Route exact path="/add-supplier"  >
                        <Add dataAdd={AddItem} />
                    </Route>
                    <Route path="/nhacungcap">
                        <Quan_Ly_NCC data={arr} delete={Delete}  />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default Add_Ncc