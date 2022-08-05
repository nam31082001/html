

import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const SideBar = () => {
    const [Check, setCheckSquare] = useState(true)
    const caretSquare = () => {
        setCheckSquare(!Check)
    }



    return (
        <div className="sideBar">
            {Check ? <>
                <div className="caretSquare">
                    <span onClick={() => caretSquare()}><i class="fas fa-caret-square-left fa-2x"  ></i></span>
                </div>
            </> :
                <>
                    <div className="caretSquare">
                        <span onClick={() => caretSquare()}><i class="fas fa-caret-square-down fa-2x"></i></span>

                    </div>
                    <div className='Menu'>
                        <Accordion className="nam"  >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    trang chủ
                                  {/* <NavLink   to="/" activeClassName="active" exact >  Trang Chủ</NavLink> */}
                                </Accordion.Header> </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Quản Lý Chung</Accordion.Header>
                                <Accordion.Body>
                                       <a> Thêm Sản Phẩm</a><br/>
                                       <a>Mua Thêm Sản Phẩm</a>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Sản Phẩm</Accordion.Header>
                                <Accordion.Body>
                                      <a>Thêm sản Phẩm </a><br/>
                                      <a>Tất cả Sản Phẩm</a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Khách Hàng</Accordion.Header>
                                <Accordion.Body>
                                      <a> Thêm Khách Hàng</a><br/>
                                      <a>Tất Cả Khách Hàng</a>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </div>

                </>}

        </div>
    )
}
export default SideBar