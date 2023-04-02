import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const StartedCard = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-20 px-4'>
            <div className='flex flex-col gap-4 text-gray-600 py-8'>
                <h1 className='text-4xl'>Get started easily</h1>
                <p className='text-xl'>Whether you want to start with a pre-built template for marketing, operations, product, learn more from a demo, or talk to our support team, Asana can help with that.</p>
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 items-center'>
                <div className='bg-white shadow-lg w-[400px]'>
                    <img src="https://assets.asana.biz/transform/e8a84139-c507-4e7e-b4ba-42ae83cbfcea/homepage-template-2x-EN-png" alt="" />
                    <div className='flex flex-col gap-8 p-8'>
                        <h1 className='text-3xl text-gray-600'>Start with a template</h1>
                        <Link href={""} className="text-xl font-medium text-black hover:text-red-400 transition-all">See templates <AiOutlineArrowRight size={'1.2rem'} className='inline' /></Link>
                    </div>
                </div>
                <div className='bg-white shadow-lg w-[400px]'>
                    <img src="https://assets.asana.biz/transform/edd2fe33-dd67-42be-91a5-f7ad125f9a8c/homepage-demo-2x-EN" alt="" />
                    <div className='flex flex-col gap-8 p-8'>
                        <h1 className='text-3xl text-gray-600'>See Asana in action</h1>
                        <Link href={""} className="text-xl font-medium text-black hover:text-red-400 transition-all">View demos <AiOutlineArrowRight size={'1.2rem'} className='inline' /></Link>
                    </div>
                </div>
                <div className='bg-white shadow-lg w-[400px]'>
                    <img src="https://assets.asana.biz/transform/3801a4c7-91e4-4c79-919d-4c061d03fab4/homepage-sales-2x-EN" alt="" />
                    <div className='flex flex-col gap-8 p-8'>
                        <h1 className='text-3xl text-gray-600'>Talk with our sales team</h1>
                        <Link href={""} className="text-xl font-medium text-black hover:text-red-400 transition-all">Contact sales<AiOutlineArrowRight size={'1.2rem'} className='inline' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartedCard