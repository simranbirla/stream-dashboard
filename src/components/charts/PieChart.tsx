import Chart from 'chart.js/auto';
import {
    CategoryScale,
    Title,
    Tooltip,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(CategoryScale, Title, Tooltip);
export default function PieChart({
    data,
    title,
    option,
    height,
}: {
    data: ChartData<'pie'>;
    title: string;
    option?: ChartOptions<'pie'>;
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
                color: '#020a36',
            },
            legend: {
                display: false,
            },
        },
        ...option,
    };

    return (
        <div style={{ height: height ?? '100%' }}>
            <Pie data={data as ChartData<'pie'>} options={options} />
        </div>
    );
}
