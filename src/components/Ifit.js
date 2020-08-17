import React from 'react';
import { Card, Modal, Button, Image, Container } from 'react-bootstrap';
import FitPage from './portfolio_images/ifit_site.png';
import FitCover from './portfolio_images/ifit_cover.png';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IfitModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            iFit Page Assessment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={FitPage} fluid className="portfolioImage"/>
          <p>
            Technical assessment to create a landing page as close as possible to the design given.
            Used Avocode as suggested by iFit team to inspect design files, extract images, and 
            create as close a pixel prefect landing page as possible.
            <br/>
            <br/>
            Technologies Used:<br/>
            <strong>HTML | CSS | React | GatsbyJS | React-bootstrap | Avocode</strong> 
          </p>

          <Container className="projectLinks">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/axtho24/gatsby_iFit"><Button>Git Reposetory</Button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://ifitchallenge.netlify.app"><Button>Project Live</Button></a>
            </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const Ifit = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Card onClick={() => setModalShow(true)} className="h-100">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    </div>
                </div>
                <Card.Img variant="top" src={FitCover} />
                <Card.Body>
                    <Card.Title>iFit Landing Page</Card.Title>
                </Card.Body>
            </Card>
            
            <IfitModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Ifit;