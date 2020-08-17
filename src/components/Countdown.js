import React from 'react';
import { Card, Modal, Button, Image, Container } from 'react-bootstrap';
import countdown from './portfolio_images/countdownButtons.PNG';
import countdownChange from './portfolio_images/countdownChange.PNG';
import countdownCover from './portfolio_images/countdown_cover.PNG';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CountdownModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            React Countdown
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={countdown} fluid className="portfolioImage"/>
            <Image src={countdownChange} fluid className="portfolioImage"/>
          <p>
            Technical project to create countdown timer, with functionalities to pause, resume, reset as 
            well as speed it up. Created style and animation to illustration the functionality of the countdown as it starts.
            <br/>
            <br/>
            Technologies Used:<br/>
            <strong>HTML | CSS | React | Material-UI</strong> 
          </p>

          <Container className="projectLinks">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/axtho24/countdown"><Button>Git Reposetory</Button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://varfaj-react-countdown.netlify.app"><Button>Project Live</Button></a>
            </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const Countdown = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Card onClick={() => setModalShow(true)} className="h-100">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    </div>
                </div>
                <Card.Img variant="top" src={countdownCover} />
                <Card.Body>
                    <Card.Title>React Countdown</Card.Title>
                </Card.Body>
            </Card>
            
            <CountdownModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Countdown;