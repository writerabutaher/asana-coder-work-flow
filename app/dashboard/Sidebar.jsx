import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiGitRepoForked, BiTask } from 'react-icons/bi'
import { FcInvite } from 'react-icons/fc'
import { TbTargetArrow } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi'

const Sidebar = () => {
    return (
        <div className='hidden md:block'>
            <div className="flex flex-col justify-between bg-gray-900 h-screen pt-16">
                <div className="px-4">
                    <nav className="flex flex-col space-y-1">
                        <Link href={""}
                            className="flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 text-white border border-gray-500"
                        >
                            <AiOutlineHome />
                            <span className="text-sm font-medium"> Home </span>
                        </Link>
                        <Link href={""}
                            className="flex items-center gap-2 rounded-lg hover:bg-gray-500 px-4 py-2 text-white border border-gray-500"
                        >
                            <BiTask />
                            <span className="text-sm font-medium"> My Tasks </span>
                        </Link>
                        <Link href={""}
                            className="flex items-center gap-2 rounded-lg hover:bg-gray-500 px-4 py-2 text-white border border-gray-500"
                        >
                            <MdOutlineNotificationsNone />
                            <span className="text-sm font-medium"> Inbox </span>
                        </Link>
                        <Link href={""}
                            className="flex items-center gap-2 rounded-lg hover:bg-gray-500 px-4 py-2 text-white border border-gray-500"
                        >
                            <BiGitRepoForked />
                            <span className="text-sm font-medium"> Reporting </span>
                        </Link>
                        <Link href={""}
                            className="flex items-center gap-2 rounded-lg hover:bg-gray-500 px-4 py-2 text-white border border-gray-500"
                        >
                            <HiOutlineDocumentText />
                            <span className="text-sm font-medium"> Portfolios </span>
                        </Link>
                        <Link href={""}
                            className="flex items-center gap-2 rounded-lg hover:bg-gray-500 px-4 py-2 text-white border border-gray-500"
                        >
                            <TbTargetArrow />
                            <span className="text-sm font-medium"> Goals </span>
                        </Link>
                    </nav>
                </div>

                <div className="static inset-x-0 bottom-0 border-t border-white text-white">
                    <Link href={""} className="flex items-center gap-2 p-4">
                        <FcInvite size={"2rem"} />
                        <div>
                            <p>Invite Teammates</p>
                        </div>
                    </Link>
                    <Link href={""} className="flex items-center gap-2 p-4">
                        <img
                            src="https://img.icons8.com/flat-round/1x/question-mark.png" alt=''
                            className="w-8 rounded-full object-cover"
                        />
                        <div>
                            <p>Help & getting started</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Sidebar