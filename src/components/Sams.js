import React from 'react';
import { Card, Modal, Button, Image, Container } from 'react-bootstrap';
import SamsFirst from './portfolio_images/sam_site.png';
import SamsSecond from './portfolio_images/sam_site_2.png';
import SamsThird from './portfolio_images/sam_site_3.png';
import SamCover from './portfolio_images/sam_site_cover.png';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SamsModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sams Portfolio Site
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={SamsFirst} fluid className="portfolioImage"/>
            <Image src={SamsSecond} fluid className="portfolioImage"/>
            <Image src={SamsThird} fluid className="portfolioImage"/>

          <p>
            Personla portfolio site build for my SO. As a student in the Master program she was very buys until the night before, when inform she needed a new site deploy
            to GoDaddy. Build was build over night to be be presented to other students and professionals. The plan is to move this simple prototype and recreat it with Vue.js
            to improve design and load times.
            <br/>
            <br/>
            Technologies Used:<br/>
            <strong>HTML | CSS | Javascript | jQuery</strong> 
          </p>

          <Container className="projectLinks">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/axtho24/sams_site"><Button>Git Reposetory</Button></a>
                <a target="_blank" rel="noopener noreferrer" href="http://samrcole.com"><Button>Project Live</Button></a>
            </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const Sams = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Card onClick={() => setModalShow(true)} className="h-100">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    </div>
                </div>
                <Card.Img variant="top" src={SamCover} />
                <Card.Body>
                    <Card.Title>Sams Portfolio Site</Card.Title>
                </Card.Body>
            </Card>
            
            <SamsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Sams;