import React from 'react'

export default function Meme(props){
    return(
        <img src={props.memeSource} alt={props.memeName} className='h-[800px]'/>
    )
}