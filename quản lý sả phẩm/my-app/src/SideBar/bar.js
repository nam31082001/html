import { useState } from "react"
import "../SideBar/sbar.css"
import { NavLink } from "react-router-dom"

const SideBar = () => {
    const [check, setCheck] = useState(true)
    const clickBar = () => {
        setCheck(!check);
        console.log(check)
    }
    return (
        <div className="SideBar">
            {check ? <>

                <div className="Nav-Bars">
                    <i className="fas fa-bars fa-2x" onClick={() => clickBar()}></i>
                </div>
            </> : <>


                <div className="Nav-Bars">
                    <i className="fas fa-times fa-2x" onClick={() => clickBar()}></i>
                </div>
                <div className="Menu">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Bảng điều kiển
                    </NavLink><br />
                    <NavLink to="/store-manager" activeClassName="active" >
                        Quản lý Chung
                    </NavLink><br />
                    <NavLink to="/order" activeClassName="active" >
                        Sản Phẩm
                    </NavLink><br />
                    <NavLink to="/product" activeClassName="active" >
                        Khách Hàng
                    </NavLink><br />
                    <NavLink to="" activeClassName="active">
                        Chiến dịch
                    </NavLink><br />
                    <NavLink to="" activeClassName="active" >
                        Báo Cáo
                    </NavLink><br />
                    <NavLink to="" activeClassName="active">
                        Cài Đặt
                    </NavLink><br />
                    <NavLink to="" activeClassName="active" >
                        Quản lý Nhân  sự
                    </NavLink><br />
                </div>
            </>}

        </div>
    )
}

export default SideBar