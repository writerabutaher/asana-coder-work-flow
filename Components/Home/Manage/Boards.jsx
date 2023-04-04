import React from 'react'
import board from '../../../assets/Scrum_board.png'
import Image from 'next/image'

const Boards = () => {
    return (
        <div className='flex items-center gap-4'>
            <Image src={board} alt='' width={800} />
        </div>
    )
}

export default Boards