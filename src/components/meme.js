import React from 'react'


function Meme(props){
    return(
        <>
        <img src={props.meme.url} />
        </>
    )
}

export default Meme