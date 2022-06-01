import React from 'react'

export default function Meme(props){
    return(
        <img src={props.memeSource} alt={props.memeName} className='mt-4 h-full object-contain md:object- md:h-[800px]'/>
    )
}