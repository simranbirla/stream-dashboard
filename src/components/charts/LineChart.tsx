import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    ChartOptions,
    ChartData,
} from 'chart.js';

Chart.register(CategoryScale, BarElement, Title, Tooltip);

export default function LineChart({
    data,
    title,
    option,
    height,
}: {
    data: ChartData<'line'>;
    title: string;
    option?: ChartOptions<'line'>;
    height?: string;
}) {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: title,
                font: {
                    size: 22,
                },
                color: '#023620',
            },
            legend: {
                display: true,
            },
        },
        ...option,
    };

    return (
        <div style={{ height: height ?? '100%' }}>
            <Line data={data} options={options} />
        </div>
    );
}
