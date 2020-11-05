import React from 'react'

class MemeContainer extends React.Component {

    state = {
        memes: []
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => this.setState({memes: data.data.memes}))
    }

    render(){
        return(
            <>
            <h1>Test</h1>
            {this.state.memes.map(meme => {
                return(
                    <img src={meme.url}/>
                )
            })}
            </>
        )
    }
}

export default MemeContainer