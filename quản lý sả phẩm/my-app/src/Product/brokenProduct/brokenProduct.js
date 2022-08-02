import { useState } from "react"

const BrokenProduct=({DeleteProduct,LoadingBroKen,dataBrokenProduct,AddProducts})=>{
    const [SearchBrokenProduct, setSearchBrokenProduct] = useState('')


    const deleteProduct=(item)=>{
        DeleteProduct(item)
    }
    const AddProduct=(item)=>{
        AddProducts(item)
    }
    return (
        <div className='ManageProduct'>
            {LoadingBroKen ?
                <>
                    Loading.......

                </> :
                <>
                    <p
                        style={{ textAlign: 'right' }}>  <label>Tìm Kiếm sản Phẩm:</label>
                        <input
                            type="text"
                            placeholder='Tìm Kiếm Theo Tên...'
                            onChange={(event) => { setSearchBrokenProduct(event.target.value) }}

                        />
                    </p>
                    <table>

                        <tr>
                            <th>STT</th>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Chi Tiết</th>
                        </tr>
                        {dataBrokenProduct.filter((item) => {
                            if (SearchBrokenProduct === '') {
                                return item
                            } else if (item.Name.toLowerCase().includes(SearchBrokenProduct.toLowerCase())) {
                                return item
                            }
                        }).map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.idName}</td>
                                    <td>{item.Name}</td>
                                    <td>
                                        
                                        <button onClick={()=>deleteProduct(item)}>Xóa</button>
                                        <button  onClick={()=>AddProduct(item)}>Thêm vô sản Phẩm Bán</button>
                                       

                                    </td>
                                </tr>
                            )
                        })}
                    </table>


                </>
            }
            <p>bản quyền Cao Văn Nam</p>
        </div>
    )
}
export default BrokenProduct