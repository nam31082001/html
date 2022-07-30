import { useEffect, useLayoutEffect, useState } from 'react';
import '../order/style.css';
import axios from 'axios';


const Order = (props) => {
    const date = props.today
    const check1 = props.check
    const check2 = props.check2
    const check3 = props.check3

    const day = date.getDate()
    const month = date.getMonth() + 1
    const [Order, setOrder] = useState([])
    const [Order1, setOrder1] = useState([])
    const [Order2, setOrder2] = useState([])
    const [Order3, setOrder3] = useState([])
    const [text ,setText]=useState('Hiện 1 đến 10 khách')



    useEffect(() => {
        async function fetchData() {
            let OrderCopy = []
            let OrderCopy2 = []
            let OrderCopy3 = []

            let res = await axios.get('http://localhost:3000/posts');
            console.log(res.data)
            let data = (res && res.data) ? res.data : [];
            data.map(item => {
                if (item.number <= 10) {
                    OrderCopy.push(item)
                    setOrder(OrderCopy)
                    setOrder1(OrderCopy)
                }
                if (item.number > 10 && item.number <= 20) {
                    OrderCopy2.push(item)
                    setOrder2(OrderCopy2)
                }
                if (item.number > 20) {
                    OrderCopy3.push(item)
                    setOrder3(OrderCopy3)
                }
            })
            console.log(Order)
            setText('Hiện 1 đến 10 khách')
        }
        fetchData()
    }, [])
    useEffect(() => {
        setOrder(Order1)
        setText('Hiện 1 đến 20 khách')
    }, [check1])
    useEffect(() => {
        setOrder(Order2)
        setText('Hiện 10 đến 20 khách')
    }, [check2])
    useEffect(() => {
        setOrder(Order3)
        setText('Hiện 20 đến 30 khách')
    }, [check3])

    return (
        <>
            <h2> Số Hàng Đặt trong hôm nay ngày : {day}/{month} </h2>
            <table className="tableOrder">
               

                    <tr>
                        <th>Id Khách Hàng</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Trạng Thái</th>
                        <th>Money</th>
                    </tr>
                
                <tbody>
                    {Order.map((item, index) => {
                        return (
                        
                                <tr key={item.id}>
                                    <td>{item.number}</td>
                                    <td>{item.client}</td>
                                    <td>{item.date}</td>
                                    <td><button>{item.status}</button></td>
                                    <td>{item.money}</td>
                                </tr>
                            
                        )
                    })}
                </tbody>
                


            </table>
            <p className='pOrder'>{text}</p>
        </>
    )
}

export default Order