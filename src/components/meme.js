import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'



function Meme(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [toptext, setTopText] = useState("");
    const [bottomtext, setBottomText] = useState("");
    // const [isTopDragging, setTopToggle] = useState(false);
    // const [isBottomDragging, setBottomToggle] = useState(false);

    const [coordinates, setCoordinates] = useState({
      topY: "10%",
      topX: "50%",
      bottomY: "90%",
      bottomX: "50%",
      isTopDragging: false,
      isBottomDragging: false
    })

    const base_image = new Image();
    base_image.src = props.meme.url;
    const wrh = base_image.width / base_image.height;
    const newWidth = 600;
    const newHeight = newWidth / wrh;
    const textStyle = {
      fontFamily: "Impact",
      fontSize: "50px",
      textTransform: "uppercase",
      fill: "#FFF",
      stroke: "#000",
      userSelect: "none"
    }


    const getStateObj = (e, type) => {
      //console.log(e.target.parentElement)

      let rect = e.target.parentElement.getBoundingClientRect();
      const xOffset = e.clientX - rect.left;
      const yOffset = e.clientY - rect.top;
      let stateObj = {};
      if (type === "bottom") {
        console.log("bottom")
        stateObj = {
          isBottomDragging: true,
          isTopDragging: false,
          bottomX: `${xOffset}px`,
          bottomY: `${yOffset}px`
        }
      } else if (type === "top") {
        console.log("top")
        stateObj = {
          isTopDragging: true,
          isBottomDragging: false,
          topX: `${xOffset}px`,
          topY: `${yOffset}px`
        }
      }
      return stateObj;
    }
  
    const handleMouseDown = (e, type) => {
      console.log("down")
      const stateObj = getStateObj(e, type);
      document.addEventListener('mousemove', (event) => handleMouseMove(event, type));
      setCoordinates(stateObj)
    }
  
    const handleMouseMove = (e, type) => {
      console.log("hi")
      if (coordinates.isTopDragging || coordinates.isBottomDragging) {
        let stateObj = {};
        if (type === "bottom" && coordinates.isBottomDragging) {
          stateObj = getStateObj(e, type);
        } else if (type === "top" && coordinates.isTopDragging){
          stateObj = getStateObj(e, type);
        }
        setCoordinates(stateObj) 
      }
    };
  
    const handleMouseUp = (event, type) => {
      console.log("up")
      let stateObj = {...coordinates}
      if (type === "bottom") {
        stateObj.isBottomDragging = false
      } else if (type === "top"){
        stateObj.isTopDragging = false
      }
      //document.removeEventListener('mousemove', () => handleMouseMove);
      console.log("gone?")
      console.log(stateObj)
        document.addEventListener('mousemove', function (handleMouseMove) {
          handleMouseMove.stopPropagation();
      }, true);
      setCoordinates(stateObj)
    }

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
              ref={el => { let svgRef = el }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <image
                ref={el => { let imageRef = el }}
                xlinkHref={props.meme.url}
                height={newHeight}
                width={newWidth}
              />
              <text
                style={textStyle}
                x={coordinates.topX}
                y={coordinates.topY}
                dominantBaseline="middle"
                textAnchor="middle"
                onMouseDown={event => handleMouseDown(event, 'top')}
                onMouseUp={event => handleMouseUp(event, 'top')}
              >
                  {toptext}
              </text>
              <text
                style={textStyle}
                dominantBaseline="middle"
                textAnchor="middle"
                x={coordinates.bottomX}
                y={coordinates.bottomY}
                onMouseDown={event => handleMouseDown(event, 'bottom')}
                onMouseUp={event => handleMouseUp(event, 'bottom')}
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