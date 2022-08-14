import axios from "axios"
import { useState } from "react"
import Paging from "../../Paging/Paging"
import '../ProductGood/style.css'
const ProductGood = ({ dataProductAll, putApiProduct, deletePostApi }) => {
    console.log(8)
    const [currentPageProduct, setCurrenPageProduct] = useState(1)
    const [postPerPageProduct] = useState(10)
    const [isProduct, setIsProduct] = useState('')
    const [CheckProductAll, setCheckProductAll] = useState()




    const indexOfLastPostProduct = currentPageProduct * postPerPageProduct
    const indexOfLastFirstPostProduct = indexOfLastPostProduct - postPerPageProduct
    const currentPostsProduct = dataProductAll.slice(indexOfLastFirstPostProduct, indexOfLastPostProduct)
    const pagtinateProduct = pagProduct => setCurrenPageProduct(pagProduct)
    const pagProduct = []
    for (let i = 1; i <= Math.ceil(dataProductAll.length / postPerPageProduct); i++) {
        pagProduct.push(i)
    }



    const handlePutProduct = (item) => {
        setIsProduct(item)
        let isLength = Object.keys(isProduct).length === 0
        setCheckProductAll(isLength)
        if (!CheckProductAll && isProduct.id === item.id) {
            let index = dataProductAll.findIndex(job => job.id === item.id)
            dataProductAll[index].Name = isProduct.Name
            dataProductAll[index].idName = isProduct.idName
            dataProductAll[index].price = isProduct.price
            setIsProduct('')
            let dataPost = {
                id: isProduct.id,
                Name: isProduct.Name,
                idName: isProduct.idName,
                price: isProduct.price,
                number: 1
            }
            putApiProduct(dataPost)
            return
        }
    }
    const handleIdName = (e) => {
        let CopyProduct = { ...isProduct }
        CopyProduct.idName = e.target.value
        setIsProduct(CopyProduct)

    }
    const handleName = (e) => {
        let CopyProduct = { ...isProduct }
        CopyProduct.Name = e.target.value
        setIsProduct(CopyProduct)

    }
    const handlePrice = (e) => {
        let CopyProduct = { ...isProduct }
        CopyProduct.price = e.target.value
        setIsProduct(CopyProduct)
    }


    const hanldeAddBroken = (item) => {
        let datapost={
            Name:item.Name,
            idName:item.idName,
            price:item.price,
            number:1
        }
        const posts=async ()=>{
            await axios.post('http://localhost:3000/brokenProduct',datapost)
        }
        posts()
        deletePostApi(item)
    }





    return (
        <div className="ProductGood">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Mã Sản Phẩm </th>
                    <th>Tên sản Phẩm</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
                {currentPostsProduct.map((item, index) => {
                    return (
                        <>
                            {CheckProductAll ?
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.idName}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={() => handlePutProduct(item)}>Sửa</button>
                                            <button onClick={() => hanldeAddBroken(item)}>Thêm Vào SP Hỏng</button>

                                        </td>
                                    </tr>
                                </>
                                :
                                <>
                                    {isProduct.id === item.id ?
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <input
                                                        value={isProduct.idName}
                                                        onChange={(e) => handleIdName(e)}
                                                    />


                                                </td>
                                                <td>
                                                    <input
                                                        value={isProduct.Name}
                                                        onChange={(e) => handleName(e)}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        value={isProduct.price}
                                                        onChange={(e) => handlePrice(e)}
                                                    />
                                                </td>
                                                <td>
                                                    <button onClick={() => handlePutProduct(item)}>
                                                        {CheckProductAll === false && isProduct.id === item.id ?
                                                            "Lưu" : "Sửa"}

                                                    </button>
                                                    <button onClick={() => hanldeAddBroken(item)}>Thêm Vào SP Hỏng</button>

                                                </td>
                                            </tr>
                                        </>
                                        :
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.idName}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button onClick={() => handlePutProduct(item)}>Sửa</button>
                                                    <button onClick={() => hanldeAddBroken(item)}>Thêm Vào SP Hỏng</button>

                                                </td>
                                            </tr>

                                        </>

                                    }

                                </>
                            }
                        </>


                    )
                })}

            </table>
          <p>
          <button>Xem tất Cả</button>
            <Paging
                paging={pagtinateProduct}
                arrNumber={pagProduct} />
          </p>
        </div>
    )
}
export default ProductGood