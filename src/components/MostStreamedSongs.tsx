import { useEffect, useState } from 'react'
import BarChart from './charts/BarChart';
import { ChartData } from 'chart.js';
import { barChart } from '../../data';

export default function MostStreamedSongs() {

    const [data, setData] = useState<ChartData<'bar'>>();

    useEffect(() => {
        const chartData = {
            labels: barChart.map((item) => item.song),
            datasets: [
                {
                    label: 'Streams',
                    data: barChart.map((item) => item.streams),
                    backgroundColor: '#78C1F3',
                },
            ],
        };
        setData(chartData);
    }, [barChart]);

    if (!data) {
        return null;
    }

    return (
        <div className='shadow-2xl p-5 w-[80vw] lg:w-[25%]'>
            <BarChart data={data} title="Streamed Songs" height='380px' />
        </div>
    )
}
