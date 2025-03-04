import React, { PureComponent, useEffect, useState } from 'react';
import { BsAlignCenter } from 'react-icons/bs';
import { ResponsiveContainer, PieChart, Pie, Legend,Sector, Cell } from 'recharts';



export default function DashboardPieChart(){
        const user = JSON.parse(localStorage.getItem("user"))
        const  [Data,setData]= useState([])
         const [state,setState] = useState({
            activeIndex: 0,
         })        
        useEffect(()=>{
           
          fetch(`https://localhost:7273/api/Dashboard/TotalPropertyTypeCount/${user.userID}`).then((res)=>res.json()).then((data)=>{
            setData([...data])
            console.log(data)
        })
           },[])

           const COLORS = ['#0088FE', '#00C49F'];
           
            const renderActiveShape = (props) => {
             const RADIAN = Math.PI / 180;
             const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
             const sin = Math.sin(-RADIAN * midAngle);
             const cos = Math.cos(-RADIAN * midAngle);
             const sx = cx + (outerRadius + 10) * cos;
             const sy = cy + (outerRadius + 10) * sin;
             const mx = cx + (outerRadius + 30) * cos;
             const my = cy + (outerRadius + 30) * sin;
             const ex = mx + (cos >= 0 ? 1 : -1) * 22;
             const ey = my;
             const textAnchor = cos >= 0 ? 'start' : 'end';
           
             return (
               <g>
                 <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                   {String(payload.name).substring(4,)}
                 </text>
                 <Sector
                   cx={cx}
                   cy={cy}
                   innerRadius={innerRadius}
                   outerRadius={outerRadius}
                   startAngle={startAngle}
                   endAngle={endAngle}
                   fill={fill}
                 />
                 <Sector
                   cx={cx}
                   cy={cy}
                   startAngle={startAngle}
                   endAngle={endAngle}
                   innerRadius={outerRadius + 6}
                   outerRadius={outerRadius + 10}
                   fill={fill}
                 />
                 <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                 <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                 <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{"Count "+value}</text>
                 <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                   {`(Rate ${(percent * 100).toFixed(2)}%)`}
                 </text>
               </g>
             );
           };
        
          function onPieEnter(_,index){
            setState({
              activeIndex: index,
            });
          };
          
        
    return (
       
        <PieChart width={400} height={300}>
          <Pie
            activeIndex={state.activeIndex}
            activeShape={renderActiveShape}
            data={Data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {Data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
       
    );
  
}