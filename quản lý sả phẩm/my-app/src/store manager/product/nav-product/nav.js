import React from "react";
import { NavLink } from "react-router-dom";
import '../nav-product/style.css'

const Nav_Product = () => {
    return (
        <div className="nav_product">
            <NavLink to="/add-supplier" activeClassName="active" exact={true}>
                Thêm Nhà cung cấp
            </NavLink>
            <NavLink to="/nhacungcap" activeClassName="active">
                Nhà  Cung Cấp
            </NavLink>

        </div>
    );
}

export default Nav_Product
