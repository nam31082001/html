import React, { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../Chart/style.css'

const Chart = () => {

    const [data, setChart] = useState([
        { name: 'T1', SALES: 4000, about: 2400 },
        { name: 'T2', SALES: 3000, about: 1398 },
        { name: 'T3', SALES: 2000, about: 9800 },
        { name: 'T4', SALES: 2780, about: 3908 },
        { name: 'T5', SALES: 1890, about: 4800 },
        { name: 'T6', SALES: 2390, about: 3800 },
    ])
    return (
        <>

            <h2>BÁO CÁO BÁN HÀNG 6 THÁNG ĐẦU NĂM</h2>
            <ResponsiveContainer className="chart" height={300}>

                    <LineChart
                        width={600}
                        height={800}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="SALES" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="about" stroke="red" />
                    </LineChart>
            </ResponsiveContainer>
        </>
    )
}
export default Chart