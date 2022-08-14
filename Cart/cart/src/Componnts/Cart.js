import { useContext, useEffect } from 'react'
import Context from '../stort/contextCart'
import { actionCart } from '../stort/indexCart'

const CartProduct = () => {
    const [state, dispatch] = useContext(Context)
    const { cart } = state
    let tongCong = 0
    
    const handleGiam = (index) => {
        dispatch(actionCart.giam(index))
    }
  
    cart.map(item => {
        tongCong += parseInt(item.price) * parseInt(item.quantity) 
    })
    return (
        <table>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>SL</th>
                <th>Giá</th>
                <th></th>
            </tr>
            {cart.map((item, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button
                                onClick={() => handleGiam(index)}
                            >-</button>

                            {item.quantity}

                            <button>+</button>

                        </td>
                        <td>{+item.price * +item.quantity}</td>
                    </tr>
                )
            })}
            {tongCong}
        </table>
    )
}
export default CartProduct