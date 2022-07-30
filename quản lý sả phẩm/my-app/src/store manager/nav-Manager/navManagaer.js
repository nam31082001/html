import React from 'react';
import '../nav-Manager/style.css';
import { NavLink } from "react-router-dom"


const Nav_Manager = () => {
    return (
        <div className="topnav">
                <NavLink to="/add-supplier"  activeClassName="active" exact={true}>
                   Nhà cung cấp
                </NavLink>
                <NavLink to="/buy-product" activeClassName="active">
                   Mua Bán Sản Phẩm
                </NavLink>
               
            </div>
    )
}
export default Nav_Manager