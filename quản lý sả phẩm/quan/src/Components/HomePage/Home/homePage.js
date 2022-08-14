import NavTotal from "../../../NavTotal/Nav"
import '../Home/homePage.css'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from "react";
import axios from 'axios'
import Paging from "../../Paging/Paging";
const HomePage = () => {
    const [dataPost, setDataPost] = useState([])
    const [SearchHomePage, setSearchHomePage] = useState('')
    const [currentPage, setCurrenPage] = useState(1);
    const [postPerPage] = useState(12)
    const [checkAll, setCheckAll] = useState(true)


    const All = () => {
        setCheckAll(!checkAll)
    }
    useEffect(() => {
        const getApiPost = async () => {
            let res = await axios.get('http://localhost:3000/posts')
            let dataRes = (res && res.data) ? res.data : []
            setDataPost(dataRes)
        }
        getApiPost()
    }, [])
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfLastFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = dataPost.slice(indexOfLastFirstPost, indexOfLastPost)
    const pagtinate = pageNumber => setCurrenPage(pageNumber);
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(dataPost.length / postPerPage); i++) {
        pageNumbers.push(i)
    }



    const date = new Date()
    const data = [
        { name: 'Tháng 1', sale: 4000, about: 2400 },
        { name: 'Tháng 2', sale: 3000, about: 1398 },
        { name: 'Tháng 3', sale: 2000, about: 9800 },
        { name: 'Tháng 4', sale: 2780, about: 3908 },
        { name: 'Tháng 5', sale: 1890, about: 4800 },
        { name: 'Tháng 6', sale: 2390, about: 3800 },
    ]
    let month = date.getMonth()
    let year = date.getFullYear()

    return (
        <>
            <NavTotal />
            <div className="homepage">
                <div className="item1">
                    <div className="item1-Sales">
                        <h3>Số Hàng Bán Được</h3>
                        <h5>XXX.XXX.XXX VND</h5>
                        <br />
                        <h6>Tháng{month}</h6>
                    </div>
                    <div className="item1-Profit">
                        <h3> Lợi Nhuận Đạt Được</h3>
                        <h5>XXX.XXX.XXX VND</h5>
                        <br />
                        <h6>Tháng{month}</h6>

                    </div>
                    <div className="item1-Turnover">
                        <h3>Doanh Thu Trong Tháng</h3>
                        <h5>XXX.XXX.XXX VND</h5>
                        <br />
                        <h6>Tháng{month}</h6>
                    </div>
                </div>
                <div className="item2">
                    <div className="item2-Chart">
                        <h3>Biểu Đồ bán Hàng  Tháng Đầu Năm {year}</h3>
                        <div>
                            <ResponsiveContainer className="chart" height={300}>
                                <LineChart
                                    width={600}
                                    height={300}
                                    data={data}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="sale" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="about" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div>
                            <h3>Sản Phẩm Đã Bán Ngày Hôm qua</h3>
                            <p> <label>Tìm Kiếm</label> <input
                                type="text"
                                placeholder="Tìm kiếm Theo tên ..."
                                onChange={(e) => setSearchHomePage(e.target.value)}

                            /></p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên</th>
                                        <th>Ngày Đặt</th>
                                        <th>Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {checkAll ?
                                        <>

                                            {currentPosts.filter((item) => {
                                                if (SearchHomePage === '') {
                                                    return item
                                                } else if (item.client.toLowerCase().includes(SearchHomePage.toLowerCase())) {
                                                    return item
                                                }
                                            }).map(item => {
                                                return (
                                                    <tr key={item.number}>
                                                        <td>{item.number}</td>
                                                        <td>{item.client}</td>
                                                        <td>{item.date}</td>
                                                        <td>{item.status}</td>
                                                    </tr>
                                                )
                                            })}
                                            <span onClick={() => All()}>Xem tất Cả</span>

                                        </>
                                        :
                                        <>
                                            {dataPost.filter((item) => {
                                                if (SearchHomePage === '') {
                                                    return item
                                                } else if (item.client.toLowerCase().includes(SearchHomePage.toLowerCase())) {
                                                    return item
                                                }
                                            }).map(item => {
                                                return (
                                                    <tr key={item.number}>
                                                        <td>{item.number}</td>
                                                        <td>{item.client}</td>
                                                        <td>{item.date}</td>
                                                        <td>{item.status}</td>
                                                    </tr>
                                                )
                                            })}
                                            <span onClick={() => All()}>Ẩn</span>
                                        </>

                                    }


                                </tbody>

                            </table>

                            {checkAll ? <>  <Paging paging={pagtinate} arrNumber={pageNumbers} /></> : <></>}

                        </div>
                    </div>
                    <div className="item2-Table">
                        <div>
                            <h3> Top 10  sản Phẩm bán chạy nhất Tháng</h3>
                            <table>
                                <tr>
                                    <th>Stt</th>
                                    <th>Tên</th>
                                    <th>Số Lượng Bán</th>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <h3> Top 10  sản Phẩm bán chạy nhất năm </h3>
                            <table>
                                <tr>
                                    <th>Stt</th>
                                    <th>Tên</th>
                                    <th>Số Lượng Bán</th>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default HomePage