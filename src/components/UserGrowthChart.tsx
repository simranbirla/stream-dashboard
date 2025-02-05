import React, { useEffect, useState } from 'react'
import LineChart from './charts/LineChart'
import { ChartData } from 'chart.js';
import { lineChart } from '../../data';

export default function UserGrowthChart() {
  const [data, setData] = useState<ChartData<'line'>>();


  useEffect(() => {
    setData({
      labels: lineChart.map(name => name.month),
      datasets: [
        {
          label: 'Active Users',
          data: lineChart.map((item) => item.activeUser),
          borderColor: 'rgb(134, 209, 154)',
          backgroundColor: 'rgb(134, 209, 154)',
        },
        {
          label: 'Total Users',
          data: lineChart.map((item) => item.totalUsers),
          borderColor: '#78C1F3',
          backgroundColor: '#78C1F3',
        },
      ],
    });
  }, [lineChart])

  if (!data) return <></>;

  return (
    <div className='shadow-2xl p-3 min-h-[400px] lg:w-[50%] w-[80vw]'>
      <LineChart title='User Growth Chart' data={data} />
    </div>
  )
}
