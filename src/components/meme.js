import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'



function Meme(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [topY, setTopY] = useState("10%");
    const [topX, setTopX] = useState("50%");
    const [bottomY, setBottomY] = useState("90%");
    const [bottomX, setBottomX] = useState("50%");
    const [toptext, setTopText] = useState("");
    const [bottomtext, setBottomText] = useState("");

    //const topChangeHandler = (e) => setTopText({toptext: e.target.value})

    const base_image = new Image();
    base_image.src = props.meme.url;
    const wrh = base_image.width / base_image.height;
    const newWidth = 600;
    const newHeight = newWidth / wrh;

    //console.log()
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
              <text
                x={topX}
                y={topY}
                dominantBaseline="middle"
                textAnchor="middle"
                onMouseDown={event => this.handleMouseDown(event, 'top')}
                onMouseUp={event => this.handleMouseUp(event, 'top')}
              >
                  {toptext}
              </text>
              <text
                dominantBaseline="middle"
                textAnchor="middle"
                x={bottomX}
                y={bottomY}
                onMouseDown={event => this.handleMouseDown(event, 'bottom')}
                onMouseUp={event => this.handleMouseUp(event, 'bottom')}
              >
                  {bottomtext}
              </text>
            </svg>

              <div className="form">
                <Form.Group>
                    <Form.Label>Top Text</Form.Label>
                    <Form.Control type="text" placeholder="Type here" onChange={(e) => setTopText(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bottom Text</Form.Label>
                    <Form.Control type="text" placeholder="Type here" onChange={(e) => setBottomText(e.target.value)}/>
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