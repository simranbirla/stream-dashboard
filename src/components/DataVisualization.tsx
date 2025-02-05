import UserGrowthChart from './UserGrowthChart'
import RevenueChart from './RevenueChart'
import MostStreamedSongs from './MostStreamedSongs'

export default function DataVisualization() {

    return (
        <div className='flex mt-6 gap-5 lg:gap-3 lg:h-[400px] flex-col lg:flex-row'>
            <UserGrowthChart />
            <RevenueChart />
            <MostStreamedSongs />
        </div>
    )
}
