import { useEffect, useState } from 'react'
import './histroy-buy.css'






const History_Buy = ({ buyDataCart, deleteCart }) => {
    const [NumberProduct, setNumberProduct] = useState('1')
   let counnt= +0
    const OnClickDelete = (item) => {
        deleteCart(item)
    }
    const checkMess=()=>{
        alert(`thanh toán:${counnt}VND`)
    }


    
    const PRICE=()=>{
        buyDataCart.map(function (item) {
            counnt=counnt+Number(item.price)
            return counnt
        })
    }
    PRICE()
    console.log('check',counnt)
    return (
        <>
            <div className="History-Order">
                <h4>Đơn Hàng Chờ</h4>
                <table>
                    <tr>
                        <th>Stt</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Tiền</th>
                        <th>Chỉnh Sủa</th>
                    </tr>
                    {buyDataCart.map((item, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.Name} </td>
                                <td>{item.price} Vnd</td>
                                <td>
                                    <input
                                        type="text"
                                        value={NumberProduct}
                                        onChange={event => setNumberProduct(event.target.value)}
                                    />
                                </td>
                                <td></td>
                                <td><button onClick={() => OnClickDelete(item)}>Xóa</button></td>
                            </tr>
                        )
                    })}
                </table>
                <p>Tổng cộng:{counnt}VND</p>
                <p>Phương Thức Thanh Toán:<select id="cars" name="cars">
                    <option value="volvo"></option>
                    <option value="volvo">Thanh Toán Tiền Mặt</option>
                    <option value="saab">Thanh Toán Bằng Thẻ</option>
                </select></p>
                <p><button className='btn' onClick={()=>checkMess()}>Thanh toán</button></p>
            </div>

        </>
    )
}
export default History_Buy