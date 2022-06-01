import React from 'react'

export default function Meme(props){
    return(
        <div className='relative h-screen md:h-[800px]'>
            <p className='memetext absolute top-14 left-1/2 -translate-x-1/2'>
                {props.memetop}
            </p>
            <p className='memetext absolute bottom-14 left-1/2 -translate-x-1/2'>
                {props.memebottom}
            </p>
            <img src={props.memeSource} alt={props.memeName} className='mt-4  object-contain h-full m-auto'/>
            
        </div>
    )
}