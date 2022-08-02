import './buy-product.css'
import { useState } from 'react';



const Buy_Product = ({ data, loading, dataFull,dataCart }) => {
    const [checkData, setCheckData] = useState(false)
    const [searchName, setSeachName] = useState('')
    const onclickDataFull = () => {
        setCheckData(!checkData)
        console.log(checkData)
    }

    const OnClickCart=(item)=>{
        dataCart(item)
    }

    return (
        <>
            <div className="product">
                <h4>Sản Phẩm Đang Bán</h4>
                {loading ?
                    <>
                        Loading.....
                    </>
                    :
                    <>
                        {checkData ?
                            <>
                                <p><label>Tìm Kiếm sản Phẩm Tên:</label><input
                                    type="text"
                                    placeholder="Search..."
                                    onChange={(event) => { setSeachName(event.target.value) }}
                                /></p>
                                <table>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã sp</th>
                                        <th>Tên</th>
                                        <th>Giá($)</th>
                                    </tr>
                                    {dataFull.filter((item) => {
                                        if (searchName === '') {
                                            return item
                                        } else if (item.Name.toLowerCase().includes(searchName.toLowerCase())) {
                                            return item
                                        }
                                    }).map(item => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.idName}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.price}</td>
                                                    <td><button onClick={()=>OnClickCart(item)}>Mua</button></td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                    <tr>
                                        <button onClick={() => onclickDataFull()}>Ẩn</button>
                                    </tr>
                                </table>
                            </> :
                            <>
                                <p><label>Tìm Kiếm sản Phẩm Tên:</label><input

                                    type="text"
                                    placeholder="Search..."
                                    onChange={(event) => { setSeachName(event.target.value) }}
                                /></p>
                                <table>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã sp</th>
                                        <th>Tên</th>
                                        <th>Giá($)</th>
                                    </tr>
                                    {data.filter((item) => {
                                        if (searchName === '') {
                                            return item
                                        } else if (item.Name.toLowerCase().includes(searchName.toLowerCase())) {
                                            return item
                                        }
                                    }).map(item => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.idName}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.price}</td>
                                                    <td><button  onClick={()=>OnClickCart(item)}>Mua</button></td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                    <tr>
                                        <button onClick={() => onclickDataFull()}>Xem tất Cả</button>
                                    </tr>
                                </table>
                            </>}
                    </>}

            </div>
        </>
    )
}
export default Buy_Product