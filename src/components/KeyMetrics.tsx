import Card from './Card'
import { metricsData } from '../../data.ts'
import { AudioWaveform, TvMinimalPlay, UserCheck, Users, Wallet } from 'lucide-react'

export default function KeyMetrics() {
    return (
        <div className='grid gap-5 sm:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5  '>
            <Card color='bg-orange-100' textColor='text-orange-400' data={metricsData.totalUsers} label='Total Users' Icon={Users} />
            <Card color='bg-pink-100' textColor='text-pink-400' data={metricsData.activeUsers} label='Active Users' Icon={UserCheck} />
            <Card color='bg-blue-100' textColor='text-blue-400' data={metricsData.totalStream} label='Total Stream' Icon={TvMinimalPlay} />
            <Card color='bg-green-100' textColor='text-green-400' data={metricsData.revenue} label='Total Revenue' Icon={Wallet} />
            <Card color='bg-purple-100' textColor='text-purple-400' data={metricsData.artist} label='Artist' Icon={AudioWaveform} />
        </div>
    )
}
