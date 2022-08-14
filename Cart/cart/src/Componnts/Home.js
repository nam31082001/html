import { useContext, useEffect } from 'react'
import Context from '../stort/contextCart'
import { actionCart } from '../stort/indexCart'
import axios from 'axios'


const ProductHome = () => {
    const [state, dispatch] = useContext(Context)
    const { todo } = state
    const GetApiProduct = async () => {
        let res = await axios.get('http://localhost:3000/product')
        let resData = (res && res.data) ? res.data : []
        return resData
    }

    useEffect(() => {
        GetApiProduct().then(
            res => {
                console.log(res)
                dispatch(actionCart.getApi(res))
                console.log(todo)
            }
        )
    }, [])

    const handleBuy=(job)=>{
        dispatch(actionCart.addProduct(job))
    }
    return (
        <table>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Giá</th>
                <th></th>
            </tr>
            {todo.map((item, index) => {
                return(
                    <tr>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.price}</td>
                    <td>
                        <button onClick={()=>handleBuy(item)}>Mua</button>
                    </td>
                </tr>
                )
                
            })}
        </table>



    )
}
export default ProductHome