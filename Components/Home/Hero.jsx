import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-20 px-4'>
            <div className='md:flex items-center justify-between space-y-8'>
                <div className='flex flex-col space-y-8 lg:w-[40%]'>
                    <h1 className='lg:text-5xl text-4xl'>The best platform for cross-functional work</h1>
                    <div className='border border-gray-600 w-20'></div>
                    <p className='text-xl text-gray-600 leading-8'>Want to drive efficiency across your organization? Asana is flexible and easy for all teams to use, so you can deliver quality work together, faster.
                    </p>
                    <div className='flex gap-4'>
                        <Link href={""} className="text-lg font-medium bg-black text-white rounded py-2 px-4 hover:bg-red-400 hover:text-black transition-all">Get Started</Link>
                        <Link href={""} className="text-lg font-medium bg-white text-black rounded py-2 px-4 hover:bg-red-400 hover:text-black transition-all border">See how it works</Link>
                    </div>
                </div>

                <div className='lg:w-1/2'>
                    <img src="https://assets.asana.biz/transform/a79665bc-49dc-4b14-a244-bf98ff221df2/homepagev2-image5-2x-EN" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero