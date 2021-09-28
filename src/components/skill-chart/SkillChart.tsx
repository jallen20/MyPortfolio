import React from 'react';
import {ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar} from "recharts";
import {SkillChartWrapper} from "./SkillChart.styles";

const SkillChart = () => {
    const data = [
        {
            name: 'React',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'SpringBoot',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '.NET',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Docker',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Cloud Technologies',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'UI/Web Design',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Photoshop',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <SkillChartWrapper width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" orientation='bottom' padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </SkillChartWrapper>
    )
}
export default SkillChart;