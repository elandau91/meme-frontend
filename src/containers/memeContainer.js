import React from 'react'
import Meme from '../components/meme'
import CardColumns from 'react-bootstrap/CardColumns'


function MemeContainer(props) {
    const shuffled = props.memes.sort(() => 0.5 - Math.random())
        return(
            <>
            {props.memes ?
                <>
                <CardColumns>
                    {shuffled.slice(0,10).map(meme => {
                        return(
                        <Meme meme={meme} />
                        )
                    })}
                </CardColumns>
            </>
            :   
            null
            }
            </>
        )

}

export default MemeContainer