import React from 'react'
import { BiCustomize } from 'react-icons/bi'
import Projects from './Projects'
import Forms from './Forms'
import Priorities from './Priorities'
import Goals from './Goals'

const Dashboard = () => {
    return (
        <div>
            <div className='px-[2%] pt-16 space-y-8'>
                <div className='text-center space-y-8'>
                    <h1 className='text-2xl text-left'>Home</h1>
                    <h3 className='text-lg'>Tuesday, April 4</h3>
                    <h1 className='text-3xl'>Good Evening Abu</h1>
                </div>
                <div className='flex items-center justify-between'>

                    <div class="flex items-center gap-2 text-gray-600 bg-white p-2 rounded self-end">
                        <BiCustomize />
                        <span class="text-sm font-medium"> Customization </span>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
                    <Priorities />
                    <Goals />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
                    <Projects />
                    <Forms />
                </div>

            </div>
        </div>
    )
}

export default Dashboard