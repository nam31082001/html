import { useState } from "react"


const ShopProduct = ({ Abc, productBuy, deleteProductShop, numberProduct }) => {
    const [count, setCount] = useState('1')



    const handleDeleteProduct = (item) => {
        deleteProductShop(item)
    }

    const handleCountReduce = (item) => {
        setCount(parseInt(count) - 1)
        Abc(count, item)
    }
    const handleCountTotal = (item) => {
        setCount(parseInt(count) + 1)
        Abc(count, item)
    }



    return (
        <>
            <h3> Xuất Kho {numberProduct} Sản Phẩm</h3>
            <table>

                <tr>
                    <th>STT</th>
                    <th>Tên </th>
                    <th>Số Lượng</th>
                    <th>Giá ($)</th>
                </tr>
                {productBuy.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.Name}</td>
                            <td>
                                <button onClick={() => handleCountReduce(item)}>-</button>
                                <i>{count}</i>
                                <button onClick={() => handleCountTotal(item)}>+</button>
                            </td>
                            <td>{item.price}</td>
                            <td> <button onClick={() => handleDeleteProduct(item)}>Xóa</button></td>
                        </tr>
                    )
                })}
            </table>

        </>
    )
}
export default ShopProduct