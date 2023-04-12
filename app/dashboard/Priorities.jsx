import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'

const Priorities = () => {
    return (
        <div>
            <div className='w-full h-[400px] bg-white rounded-2xl p-[4%]'>
                <div className='text-gray-600 flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/1x/external-user-interface-kiranshastry-gradient-kiranshastry.png" alt="" className='w-10' />
                        <h1 className='text-2xl md:text-3xl'>My Priorities</h1>
                        <AiFillLock size={'1rem'} />
                    </div>

                    <BsThreeDots className='font-w-[2rem]' />
                </div>
            </div>
        </div>
    )
}

export default Priorities