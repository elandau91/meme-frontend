import React from 'react'


function Meme(props){
    return(
        <>
        <img className="shuffled_img" src={props.meme.url} />
        </>
    )
}

export default Meme