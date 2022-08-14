import { NavLink } from 'react-router-dom'
import '../navAddSupplier/style.css'
const NavAddSupplier = () => {
    return (

        <div className="navAddSupplier">
            <NavLink to="/Add-Supplier" activeClassName="active" exact> Thêm Nhà Cung Cấp</NavLink>
            <NavLink to="/all-Supplier" activeClassName="active" exact> Quản Lý Nhà Cung Cấp</NavLink>
        </div>

    )
}
export default NavAddSupplier