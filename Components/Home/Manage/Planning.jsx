import React from 'react'
import { MdDone } from 'react-icons/md'
import { AiOutlineLike, AiOutlineUser } from 'react-icons/ai'

const Planning = () => {
    return (
        <div>
            <div>
                <h1 className='text-xl text-gray-600 py-4'>Planning</h1>
                <div className='grid grid-cols-2 items-center justify-between gap-4 text-gray-600 border-t p-1'>
                    <div className='flex items-center gap-4'>
                        <MdDone size={'2rem'} className='border rounded-full p-1' />
                        <p>Develop framework</p>
                        <div className='flex items-center gap-2'>
                            <AiOutlineLike size={'1.5rem'} />
                            <p>3</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiOutlineUser size={'1.5rem'} />
                        <p className='border-x p-2'>Mar 1-10</p>
                        <div className='w-12 h-3 bg-orange-400 rounded-2xl'></div>
                        <div className='w-12 h-3 bg-orange-400 rounded-2xl border-l'></div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 text-gray-600 border-t p-1'>
                    <div className='flex items-center gap-4'>
                        <MdDone size={'2rem'} className='border rounded-full p-1' />
                        <p>Write campaign brief</p>
                        <div className='flex items-center gap-2'>
                            <AiOutlineLike size={'1.5rem'} />
                            <p>3</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiOutlineUser size={'1.5rem'} />
                        <p className='border-x p-2'>Mar 1-10</p>
                        <div className='w-12 h-3 bg-blue-400 rounded-2xl'></div>
                        <div className='w-12 h-3 bg-blue-400 rounded-2xl border-l'></div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 text-gray-600 border-t p-1'>
                    <div className='flex items-center gap-4'>
                        <MdDone size={'2rem'} className='border rounded-full p-1' />
                        <p>Finalize launch plan
                        </p>
                        <div className='flex items-center gap-2'>
                            <AiOutlineLike size={'1.5rem'} />
                            <p>3</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiOutlineUser size={'1.5rem'} />
                        <p className='border-x p-2'>Mar 1-10</p>
                        <div className='w-12 h-3 bg-indigo-400 rounded-2xl'></div>
                        <div className='w-12 h-3 bg-indigo-400 rounded-2xl border-l'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planning