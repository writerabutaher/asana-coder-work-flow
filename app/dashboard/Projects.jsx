import React from 'react'
import { BsPlusCircleDotted, BsThreeDots } from 'react-icons/bs'

const Projects = () => {
    return (
        <div className='w-full h-[400px] bg-white rounded-2xl p-[4%] space-y-8'>
            <div className='text-gray-600 flex justify-between items-center'>
                <h1 className='text-3xl'>Projects</h1>
                <BsThreeDots size={'2rem'} />
            </div>
            <div className='text-gray-600 flex gap-4 items-center'>
                <BsPlusCircleDotted size={'2rem'} />
                <h3 className='text-xl'>Create Project</h3>
            </div>
        </div>
    )
}

export default Projects