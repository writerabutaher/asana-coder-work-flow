import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

const Timeline = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='grid grid-cols-2 gap-6'>
                <div className='bg-orange-400 px-4 py-2 rounded-xl flex items-center gap-2'>
                    <MdDone size={'2rem'} className='border rounded-full p-1 hover:bg-gray-300 text-white' />
                    <p>Write campaign brief</p>
                </div>
                <div className='bg-blue-400 px-4 py-2 rounded-xl flex items-center gap-2'>
                    <MdDone size={'2rem'} className='border rounded-full p-1 hover:bg-gray-300 text-white' />
                    <p>Develop messaging framework
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='bg-indigo-400 px-4 py-2 rounded-xl flex items-center gap-2'>
                    <MdDone size={'2rem'} className='border rounded-full p-1 hover:bg-gray-300 text-white' />
                    <p>Finalize launch plan
                    </p>
                </div>
                <div className='bg-red-400 px-4 py-2 rounded-xl flex items-center gap-2'>
                    <MdDone size={'2rem'} className='border rounded-full p-1 hover:bg-gray-300 text-white' />
                    <p>Create marketing materials</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='bg-yellow-400 px-4 py-2 rounded-xl flex items-center gap-2'>
                    <MdDone size={'2rem'} className='border rounded-full p-1 hover:bg-gray-300 text-white' />
                    <p>Hold kickoff meeting
                    </p>
                </div>
                <div className='bg-green-400 px-4 py-2 rounded-xl flex items-center gap-2'>
                    <MdDone size={'2rem'} className='border rounded-full p-1 hover:bg-gray-300 text-white' />
                    <p>Review campaign assets
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Timeline