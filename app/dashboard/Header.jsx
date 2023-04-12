import Image from 'next/image'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import logo from '../../assets/asana.png'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-gray-900 px-6 py-2 border-b border-gray-500'>

                <div className='flex items-center gap-4'>
                    <FiMenu size={"1.5rem"} className="text-white" />
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="" width={'30'} />
                        <h1 className="text-3xl text-white">asana</h1>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <input
                        className="h-10 w-full rounded-full border-none bg-gray-600 pl-4 pr-10 text-sm sm:w-96 outline-none text-white"
                        placeholder="Search"
                    />
                    <button
                        className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full p-2 text-white transition hover:text-gray-500"
                    >
                        <AiOutlineSearch size={'1rem'} />
                    </button>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <Link href={""} className="text-xs bg-white text-gray-600 rounded p-2">Add Billing Info</Link>

                    <Link href={""} className="">
                        <img
                            alt="user"
                            src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/1x/external-user-interface-kiranshastry-gradient-kiranshastry.png"
                            className="h-10 w-10 rounded-full object-cover"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header