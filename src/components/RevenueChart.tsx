import React, { useEffect, useState } from 'react'
import PieChart from './charts/PieChart';
import { ChartData } from 'chart.js';
import { pieChart } from '../../data';

export default function RevenueChart() {
    const [data, setData] = useState<ChartData<'pie'>>();

    useEffect(() => {

        const totalRevenue = pieChart.reduce((acc, item) => acc + item.revenue, 0)
        const pieChartData = pieChart.map(item => {

            const percent = Number(((item.revenue / totalRevenue) * 100).toFixed(2))

            return {
                ...item,
                percentage: percent
            }
        })

        const chartData = {
            labels: pieChartData.map(item => item.source),
            datasets: [
                {
                    label: '%',
                    data: pieChartData.map(item => item.percentage),
                    backgroundColor: ['#fee685', '#d8fa99', '#b8e6fe', '#e9d4ff', '#ffccd3'],
                },
            ],
        };

        setData(chartData);
    }, [pieChart]);


    if (!data) return <></>;


    return <div className='shadow-2xl p-5 w-[80vw]  min-h-[400px] lg:w-[25%]'>
        <PieChart data={data} title="Revenue" />
    </div>


}
