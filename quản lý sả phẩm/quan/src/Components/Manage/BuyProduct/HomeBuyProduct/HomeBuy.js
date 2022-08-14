import axios from "axios"
import { useEffect, useState } from "react"
import NavTotal from "../../../../NavTotal/Nav"
import ShopProduct from "../ShopProduct/ShopProduct"
import '../HomeBuyProduct/styleHomeProduct.css'
import { Link } from "react-router-dom"
import Paging from "../../../Paging/Paging"


const HomeBuy = () => {

    const [dataProduct, setDataProduct] = useState([])
    const [displayShop, setDisplayShope] = useState(true)
    const [productBuy, setProductBuy] = useState([])
    const [numberProduct, setNumberProduct] = useState('')
    const [abc, setAbc] = useState(1)
    const [item, setItem] = useState({})
    const [SearchHomeBuy,setSearchHomeBuy]=useState()



    const [currentPageHomeBuy, setCurrenPageHomeBuy] = useState(1)
    const [postPerPageHomeBuy] = useState(10)


    const indexOfLastPostHomeBuy= currentPageHomeBuy * postPerPageHomeBuy
    const indexOfLastFirstPostHomeBuy= indexOfLastPostHomeBuy - postPerPageHomeBuy
    const currentPostsHomeBuy = dataProduct.slice(indexOfLastFirstPostHomeBuy, indexOfLastPostHomeBuy)
    const pagtinateHomeBuy= pagHomeBuy=> setCurrenPageHomeBuy(pagHomeBuy)
    const pagHomeBuy = []
    for (let i = 1; i <= Math.ceil(dataProduct.length / postPerPageHomeBuy); i++) {
        pagHomeBuy.push(i)
    }


    const Abc = (number, item) => {
        setAbc(number)
        setItem(item)
    }
    console.log(9)


    useEffect(() => {
        async function GetDataProduct() {
            let res = await axios.get('http://localhost:3000/product')
            let dataRes = (res && res.data) ? res.data : []
            setDataProduct(dataRes)
        }
        GetDataProduct()
    }, [])
    useEffect(() => {
        let dataPut = {
            Name: item.Name,
            idName: item.idName,
            number: abc,
            price: 90 * parseInt(abc)
        }
        const PutApiBuy = async () => {
            await axios.put(`http://localhost:3000/buy/${item.id}`, dataPut)
        }
        PutApiBuy()

        const getDataBuy = async () => {
            let res = await axios.get('http://localhost:3000/buy')
            let resData = (res && res.data) ? res.data : []
            setProductBuy(resData)
            setNumberProduct(resData.length)
        }
        getDataBuy()
    }, [abc])
    const handleShop = () => {
        setDisplayShope(!displayShop)
        console.log(displayShop)
    }
    const handleAddProductError = (job) => {
        let Copy = [...dataProduct]
        Copy = Copy.filter(item => item.id !== job.id)
        setDataProduct(Copy)
        async function deleteProduct() {
            await axios.delete(`http://localhost:3000/product/${job.id}`)
        }
        deleteProduct()
        async function postBrokenProduct() {
            let res = await axios.post('http://localhost:3000/brokenProduct', job)
            console.log(res)
        }
        postBrokenProduct()

    }

    const handleBuyProduct = (job) => {
        let dataBuy = {
            id: job.id,
            Name: job.Name,
            idName: job.idName,
            number: 1,
            price: job.price
        }
        axios
            .post('http://localhost:3000/buy', dataBuy)
            .then(res => {
                let jobPost = (res && res.data) ? res.data : {}
                let CopyProductBuy = [...productBuy]
                CopyProductBuy.push(jobPost)
                setProductBuy(CopyProductBuy)
                setNumberProduct(CopyProductBuy.length)
                alert("Thêm thành công")
            })
            .catch(err => {
                alert('Sản Phẩm đã có ')
            })

    }

    const deleteProductShop = (job) => {
        let CopyProductBuy = [...productBuy]
        CopyProductBuy = CopyProductBuy.filter(item => item.id !== job.id)
        setProductBuy(CopyProductBuy)
        setNumberProduct(CopyProductBuy.length)
        const deleteApi = async () => {
            await axios.delete(`http://localhost:3000/buy/${job.id}`)
        }
        deleteApi()
    }

    return (
        <div className="HomeBuy">
            <NavTotal />
            <div className="HomeBuy-Total">
                <div className="HomeBuy-Table">
                    <h3>Sản Phẩm </h3>
                    <label>Tìm kiếm:</label><input
                     placeholder="Tìm Kiếm..."
                     value={SearchHomeBuy}
                     onChange={(e)=>setSearchHomeBuy(e.target.value)}
                    />
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá ($)</th>
                            <th>Chỉnh Sửa</th>
                        </tr>
                        {currentPostsHomeBuy
                        
                        .map((item, index) => {
                            return (

                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.idName}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.price} $</td>
                                    <td>
                                        <button onClick={() => handleBuyProduct(item)}>Xuất Sản Phẩm</button>
                                        <button><Link to={`/Buy-Product/${item.id}`} >Chi Tiết</Link></button>
                                        <button onClick={() => handleAddProductError(item)}>Thêm vào Sản Phẩm Xấu</button>
                                    </td>
                                </tr>

                            )
                        })}
                    </table>
                    <p>
                        <button>Xem tất Cả</button>
                        <Paging
                            paging={pagtinateHomeBuy}
                            arrNumber={pagHomeBuy} />
                    </p>
                </div>
                <div className="HomeBuy-Shop">
                    {displayShop ?
                        <>
                            <p> <i onClick={() => { handleShop() }} class="fas fa-shopping-bag fa-2x"><sup style={
                                { color: 'red' }
                            }>{numberProduct}</sup></i><br /></p>
                        </>
                        :
                        <>
                            <p style={{ textAlign: 'right' }}
                            > <i onClick={() => { handleShop() }} className="fas fa-times fa-2x"></i><br /></p>
                            <ShopProduct
                                productBuy={productBuy}
                                deleteProductShop={deleteProductShop}
                                numberProduct={numberProduct}
                                Abc={Abc}
                            />
                        </>}
                </div>
            </div>


        </div >
    )
}
export default HomeBuy