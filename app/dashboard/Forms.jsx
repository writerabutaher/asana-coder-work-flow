import React from 'react'
import { BsPlusCircleDotted, BsThreeDots } from 'react-icons/bs'

const Forms = () => {
    return (
        <div>
            <div className='w-full h-[400px] bg-white rounded-2xl p-[4%] space-y-8'>
                <div className='text-gray-600 flex justify-between items-center'>
                    <h1 className='text-3xl'>Forms</h1>
                    <BsThreeDots size={'2rem'} />
                </div>

                <div className='flex justify-center'>
                    <img src="https://img.icons8.com/carbon-copy/256/form.png" className='w-40' alt="" />
                </div>

                <div className='text-gray-600 flex gap-4 items-center justify-center'>
                    <BsPlusCircleDotted size={'1rem'} />
                    <p>Add New Form</p>
                </div>
            </div>
        </div>
    )
}

export default Forms