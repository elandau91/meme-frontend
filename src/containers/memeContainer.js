import React from 'react'
import Meme from '../components/meme'


function MemeContainer(props) {
    const shuffled = props.memes.sort(() => 0.5 - Math.random())
        return(
            <>
            {props.memes ?
                <>
            {shuffled.slice(0,10).map(meme => {
                return(
                <Meme meme={meme} />
                )
            })}
            </>
            :   
            null
            }
            </>
        )

}

export default MemeContainer