import React from 'react'
import { BsPlusCircleDotted, BsThreeDots } from 'react-icons/bs'

const Goals = () => {
    return (
        <div className='w-full h-[400px] bg-white rounded-2xl p-[4%] space-y-8'>
            <div className='text-gray-600 flex justify-between items-center'>
                <h1 className='text-3xl'>Goals</h1>
                <BsThreeDots size={'2rem'} />
            </div>

            <div className='text-gray-600 flex gap-4 items-center justify-center border p-2 rounded-full'>
                <BsPlusCircleDotted size={'1rem'} />
                <p>Add Goal</p>
            </div>
        </div>
    )
}

export default Goals