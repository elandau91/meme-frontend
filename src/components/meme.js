import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Meme(props){
    console.log(props.meme)
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.meme.url} />
            <Card.Body>
                <Card.Title>{props.meme.name}</Card.Title>
                <Button variant="primary">Create Meme</Button>
            </Card.Body>
        </Card>
        {/* <img className="shuffled_img" src={props.meme.url} /> */}
        </>
    )
}

export default Meme