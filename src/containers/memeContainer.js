import React from 'react'


function MemeContainer(props) {
  

        return(
            <>
            {props.memes ?
                <>
            <h1>Test</h1>
            {props.memes.map(meme => {
                return(
                    <img src={meme.url}/>
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