import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pdf from './resume.pdf';

const Footer = () => {
    return (
        <Container className="text-center personal-links footer" fluid>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/axtho24"><FontAwesomeIcon icon={faGithub} size="2x"/> <p>Github</p></a>
            <a href="mailto:aletho24@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/> <p>Email</p></a>
            <Button variant="link"><FontAwesomeIcon icon={faPhoneSquare} size="2x"/> <p>407-496-3071</p></Button>
            <a target="_blank" rel="noopener noreferrer" href={Pdf}><FontAwesomeIcon icon={faFile} size="2x"/> <p>Resume</p></a>
        </Container>
    );
}

export default Footer;