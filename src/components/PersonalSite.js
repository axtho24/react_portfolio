import React from 'react';
import { Card, Modal, Button, Image, Container } from 'react-bootstrap';
import PortfolioImage from './portfolio_images/portfolio.png';
import PortfolioCover from './portfolio_images/portfolio_cover.png';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SiteModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            My Portfolio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={PortfolioImage} fluid className="portfolioImage"/>
          <p>
            Personal website that I created to display my most recent work, as well as future ideas for projects.
            <br/>
            <br/>
            Technologies Used:<br/>
            <strong>HTML | CSS | SASS | React | React-bootstrap</strong> 
          </p>

          <Container className="projectLinks">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/axtho24/portfolio"><Button>Git Reposetory</Button></a>
            </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const PersonalSite = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Card onClick={() => setModalShow(true)} className="h-100">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    </div>
                </div>
                <Card.Img variant="top" src={PortfolioCover} />
                <Card.Body>
                    <Card.Title>My Portfolio</Card.Title>
                </Card.Body>
            </Card>
            
            <SiteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default PersonalSite;
