
import { useState } from 'react'
import '../Manage Product/style.css'
const ManageProduct = ({ loadingProduct, dataHomeProduct, addBroken }) => {
    const [SearchProduct, setSearchProductName] = useState('')
    const [Length, setLength] = useState();
    const [isMProduct, setIsMProduct] = useState(true)
    const AddBrokenProduct = (item) => {
        alert('Đã Thêm Sản Phẩm Thành Công')
        addBroken(item)
    }
    const PutProduct = (item) => {
        setLength(item)
        let isEmptyObj = Object.keys(Length).length === 0;
        setIsMProduct(isEmptyObj)
        if (!isMProduct && Length.id === item.id) {
            let index = dataHomeProduct.filter((job) => item.id === job.id)
            dataHomeProduct[index].Name = Length.Name;
            dataHomeProduct[index].idName = Length.idName
            return
        }
    }
    const onChangeIdName=(e)=>{
        let LengthCopy={...Length}
        LengthCopy.idName=e.target.value
        setLength(LengthCopy)
    }
    const onChangeName=(e)=>{
        let LengthCopy={...Length}
        LengthCopy.Name=e.target.value
        setLength(LengthCopy)
    }
    return (
        <div className='ManageProduct'>
            {loadingProduct ?
                <>
                    Loading.......

                </> :
                <>
                    <p
                        style={{ textAlign: 'right' }}>  <label>Tìm Kiếm sản Phẩm:</label>
                        <input
                            type="text"
                            placeholder='Tìm Kiếm Theo Tên...'
                            onChange={(event) => { setSearchProductName(event.target.value) }}

                        />
                    </p>
                    <table class="table table-striped">

                        <tr>
                            <th>STT</th>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Chi Tiết</th>
                        </tr>
                        {dataHomeProduct.filter((item) => {
                            if (SearchProduct === '') {
                                return item
                            } else if (item.Name.toLowerCase().includes(SearchProduct.toLowerCase())) {
                                return item
                            }
                        }).map((item, index) => {
                            return (
                                <>
                                    {isMProduct ?
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.idName}</td>
                                                <td>{item.Name}</td>
                                                <td>
                                                    <button onClick={() => PutProduct(item)}> Sủa</button>
                                                    <button>Chi Tiết</button>
                                                    <button >Mua</button>
                                                    <button onClick={() => AddBrokenProduct(item)}>Thêm vào sản Phẩm hỏng</button>

                                                </td>
                                            </tr>

                                        </> :
                                        <>
                                            {item.id === Length.id ?
                                                <>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td><input
                                                            value={item.idName}
                                                            onChange={(e) => onChangeIdName(e)}
                                                        /></td>
                                                        <td><input
                                                            value={item.Name}
                                                            onChange={(e) => onChangeName(e)}
                                                        /></td>
                                                        <td>
                                                            <button onClick={() => PutProduct(item)}>
                                                                {isMProduct === false && Length.id === item.id ?
                                                                    "Lưu" : "Sửa"}

                                                            </button>
                                                            <button>Chi Tiết</button>
                                                            <button >Mua</button>
                                                            <button onClick={() => AddBrokenProduct(item)}>Thêm vào sản Phẩm hỏng</button>

                                                        </td>
                                                    </tr>

                                                </> :
                                                <>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.idName}</td>
                                                        <td>{item.Name}</td>
                                                        <td>
                                                            <button onClick={() => PutProduct(item)}> Sủa</button>
                                                            <button>Chi Tiết</button>
                                                            <button >Mua</button>
                                                            <button onClick={() => AddBrokenProduct(item)}>Thêm vào sản Phẩm hỏng</button>

                                                        </td>
                                                    </tr>

                                                </>}
                                        </>

                                    }
                                </>
                            )
                        })}
                    </table>


                </>
            }
            <p>bản quyền Cao Văn Nam</p>
        </div>
    )
}
export default ManageProduct