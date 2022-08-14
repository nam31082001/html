import { NavLink } from 'react-router-dom'
import '../navAllProduct/nav.css'
const NavAllProduct = () => {
    return (

        <div className="navAllProduct">
            <NavLink to="/All-Product" activeClassName="active" exact> Tất Cả sản Phẩm</NavLink>
            <NavLink to="/NPC" activeClassName="active" exact> Sản Phẩm Lỗi</NavLink>
        </div>

    )
}
export default NavAllProduct