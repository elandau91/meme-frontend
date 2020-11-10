import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function Meme(props){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div className="meme_cards">
        <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.meme.url} />
            <Card.Body>
                <Card.Title>{props.meme.name}</Card.Title>
                <Button onClick={handleShow} variant="primary">Create Meme</Button>
            </Card.Body>
        </Card>
        
        <Modal 
            show={show} 
            onHide={handleClose}
            size="lg"
            backdrop="static"
            keyboard={false}
            >
          <Modal.Header closeButton>
            <Modal.Title>Customize {props.meme.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={props.meme.url} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default Meme