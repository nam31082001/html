import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

const DetailBuy = () => {
    const [DetailBuy, setDetailBuy] = useState({})
    let { id } = useParams()
    let history = useHistory()
    const handleBackBuy = () => {
        history.push("/Buy-Product")
    }

    useEffect(() => {
        const GetDataDetail = async () => {
            let res = await axios.get(`http://localhost:3000/product/${id}`)
            let resData = (res && res.data) ? res.data : []
            setDetailBuy(resData)
        }
        GetDataDetail()
    })
    return (
        <>
        <h3>Chi tiết sản Phẩm  : {DetailBuy.Name}</h3>
            idname:   {DetailBuy.idName}<br/>
           
               Giá: {DetailBuy.price} $ <br/>
            <button onClick={handleBackBuy}>Back</button>
        </>
    )
}
export default DetailBuy