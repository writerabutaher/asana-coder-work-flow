import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import Planning from './Planning'
import Content from './Content'
import Link from 'next/link'
import Timeline from './Timeline'

const Manage = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className='pb-32 pt-10'>
                <AiOutlineArrowDown size={'2rem'} />
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className='text-xl'>DRIVE EFFICIENCY ACROSS TEAMS</h3>
                <h1 className='text-4xl'>Manage complex work easily</h1>
                <h3 className='text-xl text-gray-600 pt-2'>Connect what needs to get done, who's doing it, and by when.</h3>
            </div>

            <div className='py-8 flex items-center justify-between'>
                <div className='w-1/2'>
                    <Planning />
                    <Content />
                </div>
                <div className='text-gray-600 w-1/3 flex flex-col gap-4'>
                    <h1 className='text-3xl '>List view</h1>
                    <p className='text-xl text-gray-400'>Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.</p>
                    <Link href={""} className="text-xl font-medium text-black hover:text-red-400 transition-all">Get Started <AiOutlineArrowRight size={'1.2rem'} className='inline' /></Link>
                </div>
            </div>

            <div className='py-8 flex items-center justify-between'>
                <div className='w-1/2'>
                    <Timeline />
                </div>
                <div className='text-gray-600 w-1/3 flex flex-col gap-4'>
                    <h1 className='text-3xl'>Timeline</h1>
                    <p className='text-xl text-gray-400'>See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.</p>
                    <Link href={""} className="text-xl font-medium text-black hover:text-red-400 transition-all">Get Started <AiOutlineArrowRight size={'1.2rem'} className='inline' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Manage