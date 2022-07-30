import React from "react";
import '../NavList/list.css'


const ListNav = () => {


    const list = [
        { id: 1, columns1: "Bán Hàng Mới", columns2: "Báo Cáo Bán Hàng", columns3: "Thêm dịch Vụ", columns4: "Thêm Nhà cung cấp" },
        { id: 2, columns1: "Quản lý dơn hàng", columns2: "Tóm tắt bán hàng", columns3: "Quản lý sản phẩm", columns4: "Quản lý cung cấp" },
        { id: 3, columns1: "Quản lý dỏn hàng", columns2: "Báo cáo bán hàng", columns3: "In mã vạch", columns4: "Mua mới" },
        { id: 4, columns1: "", columns2: "Hàng tồn kho", columns3: "Sản phẩm hư hỏng", columns4: "Lịch sử mua" },
    ]
    return (
        <div className="ListNav">
            <table>
                <thead>
                    <tr>
                        <th>Bán Hàng</th>
                        <th>Báo Cáo Bán Hàng</th>
                        <th>Sản Phẩm & Dịch Vụ</th>
                        <th>Quản Lý Mua Hàng</th>
                    </tr>
                </thead>

                <tbody>
                    {list.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td><a href="#">{item.columns1}</a></td>
                                <td><a href="#">{item.columns2}</a></td>
                                <td><a href="#">{item.columns3}</a></td>
                                <td><a href="#">{item.columns4}</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListNav