import React from 'react'
import Meme from '../components/meme'


function MemeContainer(props) {
  

        return(
            <>
            {props.memes ?
                <>
            <h1>Test</h1>
            {props.memes.map(meme => {
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