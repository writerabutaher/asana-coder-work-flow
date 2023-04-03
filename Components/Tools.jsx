"use client"

import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import Marquee from 'react-fast-marquee'

const Tools = () => {

    const toolsData = [
        {
            img: "https://luna1.co/c1de9a.png",
            title: "Jira Cloud",
            text: "For coordination. Create Jira issues and track work without leaving Asana.",
            color: "bg-sky-500"
        },
        {
            img: "https://luna1.co/google-sheets_logo.svg",
            title: "Google Sheets",
            text: "Turn Asana projects or tasks into spreadsheets in Google Sheets.",
            color: "bg-green-700"
        },
        {
            img: "https://luna1.co/Zoom_icon.svg",
            title: "Zoom",
            text: "Make meetings actionable with tasks, action items, and searchable transcripts.",
            color: "bg-sky-700"
        },
        {
            img: "https://luna1.co/microsoft-teams_logo.svg",
            title: "Microsoft Teams",
            text: "Connect your team’s conversations to actionable items in Asana.",
            color: "bg-indigo-500"
        },
        {
            img: "https://luna1.co/e1196d.png",
            title: "Everhour",
            text: "Track time, estimate tasks, set up a fixed-fee budget.",
            color: "bg-gray-700"
        },
        {
            img: "https://luna1.co/instagrantt_logo.svg",
            title: "Instagantt",
            text: "Create a Gantt chart, schedule tasks in a timeline.",
            color: "bg-cyan-500"
        },
        {
            img: "https://luna1.co/e8c36b.png",
            title: "Power BI",
            text: "Bring your team’s data to life.",
            color: "bg-black"
        },
        {
            img: "https://luna1.co/6e6990.png",
            title: "Office 365",
            text: "Asana notifications delivered to your Microsoft Groups.",
            color: "bg-red-500"
        },
        {
            img: "https://luna1.co/71d453.png",
            title: "Sharepoint",
            text: "Easily attach files directly to tasks.",
            color: "bg-green-500"
        },
        {
            img: "https://luna1.co/b9f2bc.png",
            title: "Harvest",
            text: "The Harvest timer is built into the Asana task pane",
            color: "bg-orange-500"
        }
    ]

    return (
        <div>
            <div className='flex flex-col gap-4 text-gray-600 py-8 max-w-screen-xl mx-auto'>
                <h1 className='text-4xl'>Get started easily</h1>
                <p className='text-xl'>Whether you want to start with a pre-built template for marketing, operations, product, learn more from a demo, or talk to our support team, Asana can help with that.</p>
            </div>
            <Marquee
                pauseOnHover={true}
                gradient={false}
                className='flex py-20'>
                {
                    toolsData.map((tool, i) => {
                        const { img, title, text, color } = tool;
                        return (
                            <div key={i} className={`w-[260px] h-[300px] shadow-2xl rounded-xl p-6 flex flex-col gap-4 mx-4 text-white ${color}`}>
                                <div className='bg-white w-16 rounded-xl flex justify-center p-1'>
                                    <img src={img} alt="" />
                                </div>
                                <h1 className='text-lg font-semibold'>{title}</h1>
                                <p>{text}</p>
                                <BsArrowUpRightCircle size={'2rem'} className='hover:bg-gray-300 rounded-xl cursor-pointer' />
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    )
}

export default Tools