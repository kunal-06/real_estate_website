import { PureComponent, useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';
function DashBoardLineChart() {
    const user = JSON.parse(localStorage.getItem("user"))
    const  [Data,setData]=useState([])
    useEffect(()=>{
       if(user.role=='Admin'){
        fetch(`https://localhost:7273/api/Dashboard/TotalPropertyCount`).then((res)=>res.json()).then((data)=>{
            setData([...data])
        })
       }
       else{
        fetch(`https://localhost:7273/api/Dashboard/TotalRent/${5}`).then((res)=>res.json()).then((data)=>{
            setData([...data])
        })}
    },[])

    
        return <>
            {Data.length>0?
                <LineChart width={500} height={300} data={Data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend/>
                    <Line type="monotone" dataKey="totalRent" name={user.role=='Admin'?"Property":"Rent"} stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>:""
            }
        </>
    
}

export default DashBoardLineChart;