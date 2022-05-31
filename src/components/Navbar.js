import React from 'react'
import memeLogo from './../images/meme2.png'

export default function Navbar(){
    return(
        <div className='navbar-bg h-[150px] w-screen flex flex-row justify-between items-center px-0 py-4 xl:px-96'>
            <img src={memeLogo} alt="Meme Logo" className='h-full'/>
            <h1 className='text-white text-6xl font-sans font-bold mx-10'>Meme Generator</h1>
        </div>
    )
}