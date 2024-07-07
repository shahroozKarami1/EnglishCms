import React from 'react'
import  "./chart.css"

import {
    BarChart, Bar, CartesianGrid, XAxis, Tooltip, ResponsiveContainer   ,  Legend
} from "recharts"
export default function Chart({ title, data, dataKey, grid  ,  type }) {
    return (
        <>
            <div className='chart'  >
                <h3 className='chart-title'>{title}</h3>
                <ResponsiveContainer width="100%" aspect={4}   >
                    <BarChart    width={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}   >
                        <Bar  dataKey="Sale" stroke="#FFC107" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month"   stroke='#fff' />
                        {/* <Legend></Legend> */}
                        <Tooltip />
                    </BarChart>
                    


                </ResponsiveContainer>


            </div>

        </>
    )
}
