import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function VisiteBookLineChart(){

      const user = JSON.parse(localStorage.getItem("user"))
         const  [Data,setData]=useState([])
         useEffect(()=>{
             fetch(`https://localhost:7273/api/Dashboard/VisiteCount/${5}`).then((res)=>res.json()).then((data)=>{
                 console.log(data)
                 setData([...data])
             })
         },[])
     
    return (
        <BarChart
          width={500}
          height={300}
          data={Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="visitCount" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    );
  }

