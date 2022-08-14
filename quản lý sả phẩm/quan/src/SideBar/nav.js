
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from "react-router-dom"
const Nav = () => {
    const [checkTF, setCheckTF] = useState(false);

    return (
        <>
            {checkTF ?
                <div>
                    <button onClick={() => setCheckTF(!checkTF)}> <i className="fas fa-bars fa-2x" ></i></button>
                </div> :
                <div>
                   <div className='sideBar' style={{width:'200px'}}>
                   <button onClick={() => setCheckTF(!checkTF)}>
                    <i className="fas fa-times fa-2x"></i>
                    </button>
                    <Accordion>
                        <Accordion.Item >

                            <Accordion.Header>
                            <NavLink to="/" activeClassName="active" exact> Trang Chủ</NavLink>
                            </Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Quản lý </Accordion.Header>
                            <Accordion.Body>
                                <NavLink to="/Add-Supplier" activeClassName="active"> Nhà Cung Cấp</NavLink><br /><br/>
                                <NavLink to="/Buy-Product" activeClassName="active" > Xuất Sản Phẩm </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Sản Phẩm</Accordion.Header>
                            <Accordion.Body>
                                <NavLink to="/Add-Product" activeClassName="active" >Thêm Sản Phẩm</NavLink><br />
                                <NavLink to="/All-Product" activeClassName="active" >Tất Cả Sản Phẩm</NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Khách Hàng</Accordion.Header>
                            <Accordion.Body>
                                <NavLink to="/Add-Client" activeClassName="active" >Thêm Khách Hàng</NavLink><br />
                                <NavLink to="/All-Client" activeClassName="active" >Tất Cả Khách hàng</NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Tin tức</Accordion.Header>

                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Đăng Xuất</Accordion.Header>

                        </Accordion.Item>
                    </Accordion>

                   </div>
                </div>}
        </>

    )
}
export default Nav