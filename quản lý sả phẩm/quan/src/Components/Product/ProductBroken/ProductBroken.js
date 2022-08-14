import { useState } from "react"
import Paging from "../../Paging/Paging"
import '../ProductBroken/style.css'

const ProductBroken = ({ dataProductBroken,deletebroken ,AddbrokenGoood}) => {
    console.log(9)
    const [currentPageBroken, setCurrenPageBroken] = useState(1)
    const [postPerPageBroken] = useState(5)


    const indexOfLastPostBroken = currentPageBroken * postPerPageBroken
    const indexOfLastFirstPostBroken = indexOfLastPostBroken - postPerPageBroken
    const currentPostsBroken = dataProductBroken.slice(indexOfLastFirstPostBroken, indexOfLastPostBroken)
    const pagtinateBroken = pagBroken => setCurrenPageBroken(pagBroken)
    const pagBroken = []
    for (let i = 1; i <= Math.ceil(dataProductBroken.length / postPerPageBroken); i++) {
        pagBroken.push(i)
    }

    const onClickBroken =(item)=>{
        deletebroken(item)
    }
    const onClickAddProduct=(item)=>{
        AddbrokenGoood(item)
    }



    return (
        <div className="ProductBroken">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Lý Do</th>
                    <th>Chỉnh sửa</th>
                </tr>
                {currentPostsBroken.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.Name}</td>
                            <td>{item.price}</td>
                            <td>Lỗi</td>
                            <td>
                                <button onClick={()=>onClickBroken(item)}>Xóa</button>
                                <button onClick={()=>onClickAddProduct(item)}>Sp OK</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
           <p>
           <button>Xem tất Cả</button>
            <Paging
                paging={pagtinateBroken}
                arrNumber={pagBroken}
            />
           </p>

        </div>
    )
}
export default ProductBroken