"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { name: '00-06', hour: 8 },
    { name: '06-12', hour: 4 },
    { name: '12-18', hour: 11 },
    { name: '18-00', hour: 20 }
];

export default function Chart() {
    return (
        <div dir="ltr" className="w-100% h-80 pr-5">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={100}
                    height={226}
                    data={data}
                    barSize={40}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 40, right: 40 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="hour" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}