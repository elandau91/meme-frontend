import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


function Meme(props){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const base_image = new Image();
    base_image.src = props.meme.url;
    const wrh = base_image.width / base_image.height;
    const newWidth = 600;
    const newHeight = newWidth / wrh;


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
              {/* <img src={props.meme.url} /> */}
              <svg
              width={newWidth}
              id="svg_ref"
              height={newHeight}
            //   ref={el => { this.svgRef = el }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <image
                // ref={el => { this.imageRef = el }}
                xlinkHref={props.meme.url}
                height={newHeight}
                width={newWidth}
              />
            </svg>
              <div className="form">
                <Form.Group>
                    <Form.Label>Top Text</Form.Label>
                    <Form.Control type="text" placeholder="Type here"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bottom Text</Form.Label>
                    <Form.Control type="text" placeholder="Type here"/>
                </Form.Group>
              </div>
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