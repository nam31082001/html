import '../miniHome/home.css'
import React from 'react';
import Chart from './Chart/Chart';
import Pagination from './Phân Table/Pagination';
import Sp from './SP chạy';
import Sp_un from './sp2022';
import Nav from '../Nav/nav';



const HomeMini = () => {

    const today = new Date();
    const month = today.getMonth() + 1
    return (
        <div className="HomeMini">
            <Nav/>
            <div className="Bao_cao_thang">
                <div className="doanh_thu">
                    <h2>0 Đồng</h2>
                    <p>Doanh Thu</p>
                    <p> Tháng{month}</p>
                </div>
                <div className="loi_nhuan">
                    <h2>0 Đồng</h2>
                    <p>Lợi Nhuận</p>
                    <p> Tháng{month}</p>
                </div>
                <div className="so_luong">
                    <h2> 0  Sản Phẩm</h2>
                    <p>Số Lượng</p>
                    <p> Tháng{month}</p>
                </div>
                <div className="gia_tri">
                    <h2>19999999999 Đồng</h2>
                    <p>Tổng số sản phẩm</p>
                    <p> Tháng{month}</p>
                </div>
            </div>
            <div className="bao_cao_nam">
                <div className="so_do">
                    <div className="Chart">
                       <Chart/>
                    </div>
                    <div>
                     
                       <Pagination today={today}/>
                    </div>
                </div>
                <div className="top">
                    <div>
                        <Sp/>
                    </div>
                    <div>
                       <Sp_un/>
                    </div>

                </div>

            </div>
            <div>
                bản quyền  Cao Văn Nam
            </div>




        </div>
    )
}
export default HomeMini