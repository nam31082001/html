
import '../Nav-Product/style.css'
import { NavLink } from "react-router-dom"
const NavProduct = () => {
    return (
        <div className="navProduct">
            <NavLink to="/Add-Product" activeClassName="active" exact={true}>
              Thêm sản Phẩm
            </NavLink>
            <NavLink to="/Product-Manage" activeClassName="active">
               Quản Lý Sản Phẩm
            </NavLink>

        </div>
    )
}
export default NavProduct