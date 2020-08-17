import React from 'react';
import { Card, Modal, Button, Image } from 'react-bootstrap';
import SoapNote from './portfolio_images/soap_note.png';
import SoapNoteSecond from './portfolio_images/soap_note_2.png';
import SoapNoteModal from './portfolio_images/soap_note_modal.png';
import SoapNotePDF from './portfolio_images/soap_note_pdf.png';
import SoapNoteCover from './portfolio_images/soap_note_cover.png';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HolisticModals = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Holistic Billing Services
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={SoapNote} fluid className="portfolioImage"/>
            <Image src={SoapNoteSecond} fluid className="portfolioImage"/>
            <Image src={SoapNoteModal} fluid className="portfolioImage"/>
            <Image src={SoapNotePDF} fluid className="portfolioImage"/>

          <p>
            Design, created and incorporated a brand new EMR into our insurance billing service. Moving forward to a more environment friendly way of doing 
            things I was tasked with adding this new service into our site. I enhance this application form and incorporated new tools I added to my form to others 
            forms that were previously created before I worked here such as SSN limit and number restriction, date restriction to realistic dates, as well as 
            correct phone number inputs.
            <br/>
            Created a PDF from scratch that updates as new data and information are put into the form, giving attention to detail visualization of form.
            Added communication (PHP code) between the EMR form created and our database on WordPress Admirer to store all forms created and be viewable at any desired time.
            Integrated EMR to our Wordpress site to smoothly work with our service already provided.
            <br/>
            <br/>
            Technologies Used:<br/>
            <strong>HTML | CSS | jQuery | React | JavaScript | jsPDF | PHP | Filezilla | Bootstrap | Materialize | MySQL</strong> 
          </p>

          <p><strong>No Link to repository due to it being a private and confindetial code. All images, approved and provided by company.</strong></p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const Holistic = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Card onClick={() => setModalShow(true)} className="h-100">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                    </div>
                </div>
                <Card.Img variant="top" src={SoapNoteCover} />
                <Card.Body>
                    <Card.Title>Holistic Billing Services</Card.Title>
                </Card.Body>
            </Card>
            
            <HolisticModals
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Holistic;