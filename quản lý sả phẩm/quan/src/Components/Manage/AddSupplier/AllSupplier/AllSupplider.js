import { useState } from 'react'
import '../AllSupplier/AllSupplier.css'
import { Link, withRouter } from 'react-router-dom';
import Paging from '../../../Paging/Paging'


const AllSupplider = ({ data, DeleteSupplier, PutSupplier }) => {
    const [CheckSupplier, setCheckSupplier] = useState('')
    const [isSupplier, setIsSupplier] = useState()
    const [SearchSupplier, setSearchSupplier] = useState('')
    const [currentPageSupplider, setCurrenPageSupplider] = useState(1);
    const [postPerPagesupplider] = useState(10)
    const [SeeFull, setSeeFull] = useState(true)

    const handleDeletesupplider = (item) => {
        DeleteSupplier(item)
    }
    const handlePutSupplider = (item) => {
        setCheckSupplier(item)
        let isLength = Object.keys(CheckSupplier).length === 0
        setIsSupplier(isLength)
        if (!isSupplier && CheckSupplier.id === item.id) {
            let index = data.findIndex(job => job.id === item.id)
            data[index].name = CheckSupplier.name
            data[index].product = CheckSupplier.product
            data[index].phone = CheckSupplier.phone
            data[index].email = CheckSupplier.email
            data[index].city = CheckSupplier.city
            let putData = {
                id: CheckSupplier.id,
                name: CheckSupplier.name,
                product: CheckSupplier.product,
                phone: CheckSupplier.phone,
                email: CheckSupplier.email,
                city: CheckSupplier.city
            }
            setCheckSupplier('')
            PutSupplier(putData)
            return
        }
    }
    const onChangeName = (e) => {
        let Copy = { ...CheckSupplier }
        Copy.name = e.target.value
        setCheckSupplier(Copy)
    }
    const onChangeProduct = (e) => {
        let Copy = { ...CheckSupplier }
        Copy.product = e.target.value
        setCheckSupplier(Copy)
    }
    const onChangePhone = (e) => {
        let Copy = { ...CheckSupplier }
        Copy.phone = e.target.value
        setCheckSupplier(Copy)
    }
    const onChangeEmail = (e) => {
        let Copy = { ...CheckSupplier }
        Copy.email = e.target.value
        setCheckSupplier(Copy)
    }
    const onChangeCity = (e) => {
        let Copy = { ...CheckSupplier }
        Copy.city = e.target.value
        setCheckSupplier(Copy)
    }


    const indexOfLastPostSupplier = currentPageSupplider * postPerPagesupplider
    const indexOfLastFirstPostSupplier = indexOfLastPostSupplier - postPerPagesupplider;
    const currentPostsSupplier = data.slice(indexOfLastFirstPostSupplier, indexOfLastPostSupplier)
    const pagtinateSupplier = pagNumberSupplier => setCurrenPageSupplider(pagNumberSupplier)
    const pagNumberSupplier = []
    for (let i = 1; i <= Math.ceil(data.length / postPerPagesupplider); i++) {
        pagNumberSupplier.push(i)
    }

    const handleSupplier = () => {
        setSeeFull(!SeeFull)
    }
  




    return (
        <div className="AllSuplider">
            <p style={{ textAlign: 'right' }}><label>Tìm Kiếm:</label><input
                onChange={(e) => setSearchSupplier(e.target.value)}
                placeholder="Tỉm Kiếm Theo Tên ..."
            /></p>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Công Ty</th>
                        <th>Sản Phẩm</th>
                        <th>Số Điện Thoại</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th>Chỉnh Sửa</th>
                    </tr>
                </thead>
                {SeeFull ?
                    <>
                        <tbody>
                            {currentPostsSupplier.filter((item) => {
                                if (SearchSupplier === '') {
                                    return item
                                } else if (item.name.toLowerCase().includes(SearchSupplier.toLowerCase())) {
                                    return item
                                }
                            }).map((item, index) => {
                                return (
                                    <>
                                        {isSupplier ?
                                            <>
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.product}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td>
                                                        <button onClick={() => handleDeletesupplider(item)}>Xóa</button>
                                                  
                                                        <button onClick={() => handlePutSupplider(item)}>Sửa</button>
                                                        <button><Link to={`/all-Supplier/${item.id}`}>  Chi Tiết </Link> </button>
                                                    </td>
                                                </tr>
                                            </>
                                            :
                                            <>
                                                {CheckSupplier.id === item.id ?
                                                    <>
                                                        <tr key={item.id}>
                                                            <td>{index + 1}</td>
                                                            <td>

                                                                <input
                                                                    value={CheckSupplier.name}
                                                                    onChange={(e) => onChangeName(e)}
                                                                />
                                                            </td>
                                                            <td>

                                                                <input
                                                                    value={CheckSupplier.product}
                                                                    onChange={(e) => onChangeProduct(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    value={CheckSupplier.phone}
                                                                    onChange={(e) => onChangePhone(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    value={CheckSupplier.email}
                                                                    onChange={(e) => onChangeEmail(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    value={CheckSupplier.city}
                                                                    onChange={(e) => onChangeCity(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <button onClick={() => handleDeletesupplider(item)}>Xóa



                                                                </button>
                                                              
                                                                <button onClick={() => handlePutSupplider(item)}>
                                                                    {isSupplier === false && CheckSupplier.id === item.id ?
                                                                        'Lưu' : 'Sửa'}
                                                                </button>
                                                                <button><Link to={`/all-Supplier/${item.id}`}>  Chi Tiết </Link> </button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                    :
                                                    <>
                                                        <tr key={item.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.product}</td>
                                                            <td>{item.phone}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.city}</td>
                                                            <td>
                                                                <button onClick={() => handleDeletesupplider(item)}>Xóa</button>
                                                              
                                                                <button onClick={() => handlePutSupplider(item)}> Sửa</button>
                                                                <button><Link to={`/all-Supplier/${item.id}`}>  Chi Tiết </Link> </button>
                                                            </td>
                                                        </tr>
                                                    </>}

                                            </>
                                        }
                                    </>
                                )
                            })}
                        </tbody>  <br /><button onClick={handleSupplier}>Xem tất cả</button>
                        <Paging paging={pagtinateSupplier} arrNumber={pagNumberSupplier} />
                    </>
                    :
                    <>
                        <tbody>
                            {data.filter((item) => {
                                if (SearchSupplier === '') {
                                    return item
                                } else if (item.name.toLowerCase().includes(SearchSupplier.toLowerCase())) {
                                    return item
                                }
                            }).map((item, index) => {
                                return (
                                    <>
                                        {isSupplier ?
                                            <>
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.product}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td>
                                                        <button onClick={() => handleDeletesupplider(item)}>Xóa</button>
                                                      
                                                        <button onClick={() => handlePutSupplider(item)}>Sửa</button>
                                                        <button><Link to={`/all-Supplier/${item.id}`}>  Chi Tiết </Link> </button>
                                                    </td>
                                                </tr>
                                            </>
                                            :
                                            <>
                                                {CheckSupplier.id === item.id ?
                                                    <>
                                                        <tr key={item.id}>
                                                            <td>{index + 1}</td>
                                                            <td>

                                                                <input
                                                                    value={CheckSupplier.name}
                                                                    onChange={(e) => onChangeName(e)}
                                                                />
                                                            </td>
                                                            <td>

                                                                <input
                                                                    value={CheckSupplier.product}
                                                                    onChange={(e) => onChangeProduct(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    value={CheckSupplier.phone}
                                                                    onChange={(e) => onChangePhone(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    value={CheckSupplier.email}
                                                                    onChange={(e) => onChangeEmail(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    value={CheckSupplier.city}
                                                                    onChange={(e) => onChangeCity(e)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <button onClick={() => handleDeletesupplider(item)}>Xóa



                                                                </button>
                                                              
                                                                <button onClick={() => handlePutSupplider(item)}>
                                                                    {isSupplier === false && CheckSupplier.id === item.id ?
                                                                        'Lưu' : 'Sửa'}
                                                                </button>
                                                                <button><Link to={`/all-Supplier/${item.id}`}>  Chi Tiết </Link> </button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                    :
                                                    <>
                                                        <tr key={item.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.product}</td>
                                                            <td>{item.phone}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.city}</td>
                                                            <td>
                                                                <button onClick={() => handleDeletesupplider(item)}>Xóa</button>
                                                               <button onClick={() => handlePutSupplider(item)}> Sửa</button>
                                                               <button><Link to={`/all-Supplier/${item.id}`}>  Chi Tiết </Link> </button>
                                                            </td>
                                                        </tr>
                                                    </>}

                                            </>
                                        }
                                    </>
                                )
                            })}
                        </tbody>  <br />
                      
                        <button onClick={handleSupplier}>Ẩn</button>
                        
                        
                    </>}
            </table>

        </div>
    )
}
export default withRouter(AllSupplider)