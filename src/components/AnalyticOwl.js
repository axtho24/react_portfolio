import React from 'react';
import { Card, Modal, Button, Image } from 'react-bootstrap';
import AnalyticRadio from './portfolio_images/AnalyticOwl_radio.PNG';
import AnalyticTv from './portfolio_images/AnalyticOwl_tv.PNG';
import AnalyticWeb from './portfolio_images/AnalyticOwl_web.PNG';
import AnalyticCover from './portfolio_images/AnalyticOwl_cover.png';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnalyticModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            AnalyticOwl
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={AnalyticRadio} fluid className="portfolioImage"/>
            <Image src={AnalyticTv} fluid className="portfolioImage"/>
            <Image src={AnalyticWeb} fluid className="portfolioImage"/>

          <p>
            At Analytic Owl I was tasked with revamping the UI for our many clients, as well updating and adding new charts
            using amChart. Later was also in charge of updating every chart and graph from using amCharts to D3.js. Tasked with updating 
            PDF to new designs supplied to me, and import the new D3 charts. Debugging and resolving issues presented by QA team.
            <br/>
            <br/>
            Technologies Used:<br/>
            <strong>HTML | CSS | Sass | Vue | Twig | amCharts | D3.JS | MaterializeCss | Intro.js | jQuery | Git | Datatables</strong> 
          </p>

          <p><strong>No Link to repository due to it being a private Repo on github.</strong></p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const AnalyticOwl = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Card onClick={() => setModalShow(true)} className="h-100">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    </div>
                </div>
                <Card.Img variant="top" src={AnalyticCover} />
                <Card.Body>
                    <Card.Title>AnalyticOwl</Card.Title>
                </Card.Body>
            </Card>
            
            <AnalyticModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default AnalyticOwl;