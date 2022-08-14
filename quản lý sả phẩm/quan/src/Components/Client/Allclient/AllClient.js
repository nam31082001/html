import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavTotal from "../../../NavTotal/Nav"
import Paging from "../../Paging/Paging"
import '../Allclient/style.css'

const AllClient = () => {
    const [dataClient, setDataClient] = useState([])
    const [isClient, setIsClient] = useState()
    const [itemClient, setItemClient] = useState('')
    const [currentPageClient, setCurrenPageClient] = useState(1)
    const [postPerPageClient] = useState(10)


    const indexOfLastPostClient = currentPageClient * postPerPageClient
    const indexOfLastFirstPostClient= indexOfLastPostClient - postPerPageClient
    const currentPostsClient = dataClient.slice(indexOfLastFirstPostClient, indexOfLastPostClient)
    const pagtinateClient= pagClient=> setCurrenPageClient(pagClient)
    const pagClient = []
    for (let i = 1; i <= Math.ceil(dataClient.length / postPerPageClient); i++) {
        pagClient.push(i)
    }


    useEffect(() => {
        const GetApiClient = async () => {
            let res = await axios.get('http://localhost:3000/Client')
            let data = (res && res.data) ? res.data : []
            setDataClient(data)

        }
        GetApiClient()
    }, [])

    const handleDeleteClient = (item) => {
        let CopyDataClient = [...dataClient]
        CopyDataClient = CopyDataClient.filter(job => item.id !== job.id)
        setDataClient(CopyDataClient)
        const deleteApiClient = async () => {
            await axios.delete(`http://localhost:3000/Client/${item.id}`)
        }
        deleteApiClient()
    }


    const handlePutClient = (item) => {
        setItemClient(item)
        let isLength = Object.keys(itemClient).length === 0
        setIsClient(isLength)
        if (!isClient && itemClient.id === item.id) {
            let index = dataClient.findIndex(job => job.id === item.id)
            dataClient[index].Name = itemClient.Name
            dataClient[index].number = itemClient.number
            dataClient[index].email = itemClient.email
            dataClient[index].address = itemClient.address
            setItemClient('')
            let dataClientPut = {
                id: itemClient.id,
                idName: itemClient.idName,
                Name: itemClient.Name,
                number: itemClient.number,
                passport: itemClient.passport,
                birth: itemClient.birth,
                email: itemClient.email,
                address: itemClient.address,
            }
            const PutClient = async () => {
                await axios.put(`http://localhost:3000/Client/${item.id}`, dataClientPut)
            }
            PutClient()
            return
        }
    }
    const onChangeName = (e) => {
        let Copy = { ...itemClient }
        Copy.Name = e.target.value
        setItemClient(Copy)
    }
    const onChangeNumber = (e) => {
        let Copy = { ...itemClient }
        Copy.number = e.target.value
        setItemClient(Copy)
    }
    const onChangeEmail = (e) => {
        let Copy = { ...itemClient }
        Copy.email = e.target.value
        setItemClient(Copy)
    }
    const onChangeAddress = (e) => {
        let Copy = { ...itemClient }
        Copy.address = e.target.value
        setItemClient(Copy)
    }




    return (
        <>
            <NavTotal />
            <div className="AllClient">
                <h3>Tất Cả Khách Hàng</h3>
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số Điện Thoại</th>
                        <th>Email</th>
                        <th>Địa Chỉ Nhà</th>
                        <th>Chỉnh Sửa</th>
                    </tr>
                    {currentPostsClient.map((item, index) => {
                        return (
                            <>
                                {isClient ?
                                    <>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.number}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button onClick={() => handleDeleteClient(item)}>Xóa</button>
                                                <button><Link to={`/All-Client/${item.id}`}>  Chi Tiết </Link></button>
                                                <button onClick={() => handlePutClient(item)}>Sửa</button>
                                            </td>

                                        </tr>
                                    </>
                                    :
                                    <>
                                        {item.id === itemClient.id ?
                                            <>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <input
                                                            value={itemClient.Name}
                                                            onChange={(e) => onChangeName(e)}
                                                        />

                                                    </td>
                                                    <td>

                                                        <input
                                                            value={itemClient.number}
                                                            onChange={(e) => onChangeNumber(e)}
                                                        />

                                                    </td>
                                                    <td>

                                                        <input
                                                            value={itemClient.email}
                                                            onChange={(e) => onChangeEmail(e)}
                                                        />

                                                    </td>
                                                    <td>
                                                        <input
                                                            value={itemClient.address}
                                                            onChange={(e) => onChangeAddress(e)}
                                                        />

                                                    </td>
                                                    <td>
                                                        <button onClick={() => handleDeleteClient(item)}>Xóa</button>
                                                        <button><Link to={`/All-Client/${item.id}`}>  Chi Tiết </Link></button>
                                                        <button onClick={() => handlePutClient(item)}>
                                                            {isClient === false && itemClient.id === item.id ?
                                                                'Lưu' : 'Sửa'}

                                                        </button>
                                                    </td>

                                                </tr>
                                            </>
                                            :
                                            <>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.number}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.address}</td>
                                                    <td>
                                                        <button onClick={() => handleDeleteClient(item)}>Xóa</button>
                                                        <button><Link to={`/All-Client/${item.id}`}>  Chi Tiết </Link></button>
                                                        <button onClick={() => handlePutClient(item)}>Sửa</button>
                                                    </td>

                                                </tr></>}
                                    </>}
                            </>
                        )
                    })}
                </table>
                <p>
          <button>Xem tất Cả</button>
            <Paging
                paging={pagtinateClient}
                arrNumber={pagClient} />
          </p>
            </div>
        </>
    )
}
export default AllClient