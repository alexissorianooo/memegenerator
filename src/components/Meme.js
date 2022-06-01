import React from 'react'

export default function Meme(props){
    return(
        <div className='relative h-full lg:max-h-[800px]'>
            <p className='memetext absolute top-4 left-1/2 -translate-x-1/2 md:text-5xl text-4xl md:max-w-[500px]'>
                {props.memetop}
            </p>
            <p className='memetext absolute bottom-4 left-1/2 -translate-x-1/2 md:text-5xl text-4xl md:max-w-[500px]'>
                {props.memebottom}
            </p>
            <img src={props.memeSource} alt={props.memeName} className='object-scale-down m-auto max-h-[800px]'/>
            
        </div>
    )
}