import React, { useEffect, useState } from "react";
import '../Home/style.css'
import Nav from "../../Nav/nav";
import NavProduct from "../Nav-Product/navProduct";
import AddProduct from "../Add Product/addProduct";
import ManageProduct from "../Manage Product/manageProduct";
import NavManageProduct from "../NavManage/NavManage";
import BrokenProduct from "../brokenProduct/brokenProduct";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import axios from "axios";
const Home_Order = () => {
    const [LoadingProduct, setLoadingProduct] = useState(false);
    const [LoadingBroKen, setLoadingBroken] = useState(false);
    const [dataHomeProduct, setHomeProduct] = useState();
    const [dataBrokenProduct, setDataBrokenProduct] = useState([]);


    useEffect(() => {
        async function ApiHomeOrder() {
            setLoadingProduct(true)
            let res = await axios.get('http://localhost:3000/product');
            let data = (res && res.data) ? res.data : [];
            setHomeProduct(data)
            setLoadingProduct(false)
        }
        ApiHomeOrder()
    }, [])
    useEffect(() => {
        async function ApiHomeOrder() {
            setLoadingBroken(true)
            let bro = await axios.get(' http://localhost:3000/brokenProduct');
            let databro = (bro && bro.data) ? bro.data : []
            setDataBrokenProduct(databro)
            setLoadingBroken(false)
        }
        ApiHomeOrder()
    }, [])

    const AddBroken = (item) => {
        var data = {
            Name: item.Name,
            price: item.price,
            idName: item.idName
        }
        let Copy = [...dataHomeProduct]
        Copy = Copy.filter(job => item.id !== job.id)
        setHomeProduct(Copy)
        async function PostBrokenProduct() {
            let dataNew = await axios.post(' http://localhost:3000/brokenProduct', data);
            let dataAdd = (dataNew && dataNew.data) ? dataNew.data : []
            let copyData = [...dataBrokenProduct]
            copyData.push(dataAdd);
            setDataBrokenProduct(copyData)
        }
        PostBrokenProduct()
        async function deleteApi() {
            await axios.delete(`http://localhost:3000/product/${item.id}`)
        }
        deleteApi()
    }


    const deleteProduct = (item) => {
        let Copy = [...dataBrokenProduct]
        Copy = Copy.filter(job => item.id !== job.id)
        setDataBrokenProduct(Copy)
        async function deleteApi() {
            await axios.delete(`http://localhost:3000/brokenProduct/${item.id}`)
        }
        deleteApi()
    }
    const AddProducts = (item) => {
        deleteProduct(item)
        var data = {
            Name: item.Name,
            price: item.price,
            idName: item.idName
        }
        const AddProductSale = async () => {
            let dataNew = await axios.post(' http://localhost:3000/product', data);
            let dataAdd = (dataNew && dataNew.data) ? dataNew.data : []
            let copyData = [...dataHomeProduct]
            copyData.push(dataAdd);
            setHomeProduct(copyData)

        }
        AddProductSale()
    }
    const inputAddProduct = (item) => {
        console.log(item)
        var data = {
            Name: item.name,
            price: item.Price,
            idName: item.idName
        }
        const InputAddProducts = async () => {
            await axios.post(' http://localhost:3000/product', data)
            let Copy = [...dataHomeProduct]
            Copy.push(data)
            setHomeProduct(Copy)
        }
        InputAddProducts()
    }
    const PutProductS= async(item)=>{
        console.log(item)
        await axios.put(' http://localhost:3000/product', item)
    }
    PutProductS()

    return (
        <Router>

            <div className="Home_Product">
                <Nav />
                <NavProduct />
                <Switch>
                    <Route exact path="/Add-Product"  >
                        <AddProduct InputAddProduct={inputAddProduct} />
                    </Route>
                    <Route path="/Product-Manage">
                        <Router>

                            <NavManageProduct />
                            <Switch>
                                <Route exact path="/Product-Manage"  >
                                    <ManageProduct
                                        addBroken={AddBroken}
                                        loadingProduct={LoadingProduct}
                                        dataHomeProduct={dataHomeProduct}
                                    />
                                </Route>
                                <Route path="/brokenProduct"  >
                                    <BrokenProduct
                                        AddProducts={AddProducts}
                                        DeleteProduct={deleteProduct}
                                        LoadingBroKen={LoadingBroKen}
                                        dataBrokenProduct={dataBrokenProduct}
                                    />
                                </Route>

                            </Switch>
                        </Router>


                    </Route>

                </Switch>
            </div>
        </Router>

    )
}
export default Home_Order