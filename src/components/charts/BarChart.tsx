import Chart from 'chart.js/auto';
import {
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, BarElement, Title, Tooltip);

export default function BarChart({
    data,
    title,
    option,
    height,
}: {
    data: ChartData<'bar'> | ChartData<'line'>;
    title: string;
    option?: ChartOptions<'bar'>;
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
            <Bar data={data as ChartData<'bar'>} options={options} />
        </div>
    );
}
