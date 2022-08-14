import NavTotal from "../../../NavTotal/Nav"
import NavAllProduct from "../navAllProduct/navAllProduct"
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import '../AllProduct/allProduct.css'
import ProductGood from "../ProductGood/ProductGood";
import ProductBroken from "../ProductBroken/ProductBroken";
import { useEffect, useState } from "react";

const AllProduct = () => {
    const [dataProductAll, setDataProductAll] = useState([])
    const [dataProductBroken, setDataProductBroken] = useState([])


    const getApiProductBroken = async () => {
        let res = await axios.get('http://localhost:3000/brokenProduct')
        let data = (res && res.data) ? res.data : []
        setDataProductBroken(data)
    }
    const deleteProduct = async (item) => {
        await axios.delete(`http://localhost:3000/product/${item.id}`)
    }



    useEffect(() => {
        const getApiProduct = async () => {
            let res = await axios.get('http://localhost:3000/product')
            let data = (res && res.data) ? res.data : []
            setDataProductAll(data)
        }
        getApiProduct()
        getApiProductBroken()
    }, [])


    const putApiProduct = async (item) => {
        await axios.put(`http://localhost:3000/product/${item.id}`, item)
    }



    const deletePostApi = (item) => {
        let Copy = [...dataProductAll]
        let CopyBroken = [...dataProductBroken, item]
        Copy = Copy.filter(job => job.id !== item.id)
        setDataProductAll(Copy)
        setDataProductBroken(CopyBroken)
        deleteProduct(item)
    }

    const deletebroken = (item) => {
        let Copy = [...dataProductBroken]
        Copy = Copy.filter(job => job.id !== item.id)
        setDataProductBroken(Copy)

        const deleteApi = async () => {
            await axios.delete(`http://localhost:3000/brokenProduct/${item.id}`)
        }
        deleteApi()
    }

    const AddbrokenGoood = (item) => {
        deletebroken(item)
        let Copyproduct = [...dataProductAll, item]
        setDataProductAll(Copyproduct)
        let dataBrokenGood = {
            Name: item.Name,
            idName: item.idName,
            price: item.price,
            number: 1
        }

        const posts = async () => {
            await axios.post('http://localhost:3000/product', dataBrokenGood)
        }
        posts()




    }







    return (
        <>
            <NavTotal />

            <div className="AllProduct">
                <Router>
                    <NavAllProduct />
                    <Switch>
                        <Route exact path="/All-Product">
                            <ProductGood
                                dataProductAll={dataProductAll}
                                putApiProduct={putApiProduct}
                                deletePostApi={deletePostApi}
                            />
                        </Route>
                        <Route path="/NPC">
                            <ProductBroken
                                dataProductBroken={dataProductBroken}
                                deletebroken={deletebroken}
                                AddbrokenGoood={AddbrokenGoood}
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>


        </>
    )
}
export default AllProduct