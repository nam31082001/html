import NavTotal from "../../../../NavTotal/Nav"
import NavAddSupplier from "../navAddSupplier/navAddSupplier"
import AddSupplier from "../AddSupplider/AddSupplider";
import AllSupplider from "../AllSupplier/AllSupplider";
import Detail from "../Detail/Detail";

import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useEffect, useState } from "react";

const HomeAddProduct = () => {
    const [dataSupplier, setDataSupplier] = useState([]);
    useEffect(() => {
        async function getApiSupplient() {
            let res = await axios.get('http://localhost:3000/Supplier')
            let data = (res && res.data) ? res.data : []
            setDataSupplier(data)

        }
        getApiSupplient()
    }, [])


    const DeleteSupplier = (job) => {
        let Copy = [...dataSupplier]
        Copy = Copy.filter(item => item.id !== job.id)
        setDataSupplier(Copy);
        async function deleSupplier() {
            await axios.delete(`http://localhost:3000/Supplier/${job.id}`)
        }
        deleSupplier()
    }



    const PostSupplier = (job) => {
        console.log(job)
        async function Post() {
            let res = await axios.post('http://localhost:3000/Supplier', job)
            let resData = (res && res.data) ? res.data : []
            let Copy = [...dataSupplier]
            Copy.push(resData)
            setDataSupplier(Copy)
        }
        Post()
    }

    const PutSupplier = (job) => {
        console.log(job)
        async function Put() {
            await axios.put(`http://localhost:3000/Supplier/${job.id}`, job)
        }
        Put()
    }

    return (
        <>
            <Router>
                <NavTotal />

                <Switch>
                    <Route exact path="/Add-Supplier">
                        <NavAddSupplier />
                        <AddSupplier
                            PostSupplier={PostSupplier}
                        />
                    </Route>
                    <Route path="/all-Supplier" exact>
                        <NavAddSupplier />
                        <AllSupplider
                            data={dataSupplier}
                            DeleteSupplier={DeleteSupplier}
                            PutSupplier={PutSupplier}
                        />

                    </Route>
                    <Route path="/all-Supplier/:id">
                        <Detail />
                    </Route>
                </Switch>

            </Router>

        </>
    )
}

export default HomeAddProduct
