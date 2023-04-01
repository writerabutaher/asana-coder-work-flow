import Image from 'next/image'
import React from 'react'
import logo from '../../assets/asana.png'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-black">

            <div className="pt-12 lg:pt-16">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
                        <div>
                            <Image src={logo} alt="" width={'30'} />
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Asana</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <Link href={""} className="text-white hover:underline">Features</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Resource</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Enterprise</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Pricing</Link>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <Link href={""} className="text-white hover:underline">Overview</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Solutions</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Pricing</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Customers</Link>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <Link href={""} className="text-white hover:underline">About</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Investor Relations</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Jobs</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Press</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Blog</Link>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <Link href={""} className="text-white hover:underline">Contact</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Documentation</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Chat</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">FAQ</Link>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <Link href={""} className="text-white hover:underline">Terms of Service</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Privacy Policy</Link>
                                </div>

                                <div>
                                    <Link href={""} className="text-white hover:underline">Cookie settings</Link>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="border-t py-8 text-center text-sm text-gray-400">© 2023 - Present Asana. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer