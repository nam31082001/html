import '../buyHome/style-buy.css'
import Buy_Product from '../buy-product/buy-product'
import History_Buy from '../history-buy/history-bye'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagtinate from '../buy-product/Pagination'

const Buy = () => {
    const [dataProduct, setDataProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrenPage] = useState(1);
    const [postPerPage] = useState(10);
    const [dataCart, setDataCart] = useState([])
    let arrPrice=[]


    useEffect(() => {
        async function apiProduct() {
            setLoading(true)
            let res = await axios.get('http://localhost:3000/product')
            let data = (res && res.data) ? res.data : [];
            setDataProduct(data)
            setLoading(false)
        };
        apiProduct()
    }, []);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfLastFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = dataProduct.slice(indexOfLastFirstPost, indexOfLastPost)
    const pagtinate = pageNumber => setCurrenPage(pageNumber);
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(dataProduct.length / postPerPage); i++) {
        pageNumbers.push(i)
    }
    const AddCart = (job) => {
        let CopyDataCart = [...dataCart]
        CopyDataCart.push(job)
        setDataCart(CopyDataCart)
       
    }
    const DeleteCart = (job) => {
        let CopyCartDelete = [...dataCart]
        CopyCartDelete = CopyCartDelete.filter((item) => job.id !== item.id)
        setDataCart(CopyCartDelete)
    }
    return (
        <>
            <div className="buy">
                <div className="buy-product">
                    <Buy_Product
                        data={currentPosts}
                        loading={loading}
                        dataFull={dataProduct}
                        dataCart={AddCart}
                    />
                    <Pagtinate
                        postPerPage={postPerPage}
                        pagtinate={pagtinate}
                        pageNumbers={pageNumbers}
                    />
                </div>
                <div className="history-buy-product">
                    <History_Buy
                        buyDataCart={dataCart}
                        deleteCart={DeleteCart}
                        buyPrice={arrPrice}
                    />
                </div>

            </div>
            <p>bản Quyền Cao Văn Nam</p>
        </>
    )
}
export default Buy