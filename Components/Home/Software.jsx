import Image from 'next/image'
import React from 'react'
import logo from '../../assets/asana.png'
import Link from 'next/link'

const Software = () => {
    return (
        <div className='flex justify-center bg-black'>
            <div className='flex flex-col gap-8 py-40 items-center max-w-screen-lg'>
                <Image src={logo} alt="" width={'50'} />
                <h1 className='lg:text-6xl text-4xl text-white text-center'>Try the #1 software in project and product management</h1>
                <Link href={""} className="lg:text-2xl text-xl font-medium bg-white text-black rounded p-4 hover:bg-red-400 hover:text-black transition-all">Get Started</Link>
            </div>
        </div>
    )
}

export default Software