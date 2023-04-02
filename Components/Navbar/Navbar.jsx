"use client"

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineDown, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import Image from "next/image";
const { useState } = require("react");
import logo from '../../assets/asana.png'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        <Link href={""} className="text-gray-500 hover:text-black font-semibold flex items-center gap-1">Why Asana?  <AiOutlineDown size={'.8rem'} /></Link>,
        <Link href={""} className="text-gray-500 hover:text-black font-semibold flex items-center gap-1">Features <AiOutlineDown size={'.8rem'} /></Link>,
        <Link href={""} className="text-gray-500 hover:text-black font-semibold flex items-center gap-1">Resources <AiOutlineDown size={'.8rem'} /></Link>,
        <Link href={""} className="text-gray-500 hover:text-black font-semibold">Enterprise</Link>,
        <Link href={""} className="text-gray-500 hover:text-black font-semibold">Pricing</Link>,
    ]

    return (
        <div>
            <div className="relative">
                <div className="mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl py-4 px-8 shadow-sm flex items-center justify-between bg-white rounded">
                    <div className="flex space-x-12">
                        <div className="flex items-center gap-2">
                            <Image src={logo} alt="" width={'30'} />
                            <h1 className="text-3xl font-semibold">asana</h1>
                        </div>
                        <ul className="lg:flex space-x-8 items-center hidden">
                            {navItems.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                    </div>

                    <div className="flex gap-6 items-center">
                        <ul className="sm:flex gap-6 hidden">
                            <li className="flex gap-4 text-gray-500">
                                <TfiWorld size={'1.5rem'} />
                                <p>|</p>
                                <AiOutlineMail size={'1.5rem'} />
                                <AiOutlineUser size={'1.5rem'} />
                            </li>
                            <li>
                                <Link href={""} className="text-lg font-medium bg-black text-white rounded py-2 px-4 hover:bg-red-400 hover:text-black transition-all">Get Started</Link>
                            </li>
                        </ul>

                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 "
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <FiMenu size={"2rem"} className="text-gray-500" />
                            </button>

                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <Image src={logo} alt="" width={'30'} />
                                                <h1 className="text-3xl font-semibold">asana</h1>
                                            </div>
                                            <div>
                                                <button
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <AiOutlineClose size={'2rem'} className="text-gray-500" />
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <ul className="space-y-4">
                                                {navItems.map((e, i) => <li key={i}>{e}</li>)}
                                                <li>
                                                    <Link href={""} className="text-lg font-medium bg-black text-white rounded py-2 px-4 hover:bg-red-400 hover:text-black transition-all">Get Started</Link>
                                                </li>
                                                <li>
                                                    <Link href={""} className="text-lg font-medium bg-white text-black rounded py-2 px-4 hover:bg-red-400 hover:text-black transition-all border">Log In</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar