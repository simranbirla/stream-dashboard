import { LucideProps } from 'lucide-react'
import React from 'react'


type TCard = {
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    color: string,
    textColor: string,
    label: string,
    data: string,
}

export default function Card({ Icon, color, label, data, textColor }: TCard) {

    return (
        <div className='flex gap-3 justify-center items-center md:max-w-sm mx-auto rounded-2xl shadow-lg p-6 w-full'>
            <div className={`${color} rounded-full p-4`}>
                <Icon className={`${textColor} size-4`} />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-bold'>{data}</p>
                <p className='text-sm font-medium text-gray-600'>{label}</p>
            </div>
        </div>
    )
}
