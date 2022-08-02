


import { NavLink } from "react-router-dom"
import '../NavManage/style.css'
const NavManageProduct = () => {
    return (
        <div className="navManageProduct">
            <NavLink to="/Product-Manage" activeClassName="active" exact={true}>
              Tất Cả Sản Phẩm
            </NavLink>
            <NavLink to="/brokenProduct" activeClassName="active">
               Sản Phẩm Hỏng
            </NavLink>

        </div>
    )
}
export default NavManageProduct