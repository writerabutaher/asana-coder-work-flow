import Footer from '@/Components/Footer/Footer'
import Hero from '@/Components/Home/Hero'
import Manage from '@/Components/Home/Manage/Manage'
import Software from '@/Components/Home/Software'
import StartedCard from '@/Components/Home/StartedCard'
import Tools from '@/Components/Home/Tools'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Manage />
            <StartedCard />
            <Tools />
            <Software />
            <Footer />
        </div>
    )
}

export default HomePage