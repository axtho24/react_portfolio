import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Self from './portfolio_images/self.JPG';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pdf from './resume.pdf';

const About = () => {
    
    return (
        <Container className="about" fluid>
            <header className="text-center">
                <h1>ABOUT ME</h1>
            </header>
            <Row>
                <Col className="text-center" sm={12} md={6} lg={4}>
                    <Image src={Self} roundedCircle className="self align-middle"/>
                </Col>
                <Col sm={12} md={6} lg={8}>
                    <Container className="justify-content-md-center">
                        <p><strong>Hello, I am Alexander Thomas, a Front-End Web Developer that's always seeking to grow, 
                        <br/>
                        and continuously looking to learn new teachnologies and challenge myself</strong></p>

                        <p>For those that wonder what the background image on my banner is, it's related to Ultimate Frisbee, 
                        a sport I have played for many years, and just like in any sport, you learn that teamwork is important. 
                        Aside from learning this in sports, I also learned this valuable lesson in Chemical Engineering. 
                        There will always be problems to face, and we may not always have the answer, but working as a team, 
                        someone can give you an idea, a different point of view of how to solve said problem. 
                        Team work and collaboration is something I try to bring into every task I face.</p>
                    </Container>
                                                         
                    <h4 className="text-center">TOP SKILLS</h4>               
                    <Container className="skills text-center">     
                        <strong>HTML5</strong> <strong>CSS3</strong> <strong>JAVASCRIPT</strong> 
                        <strong>JQUERY</strong> <strong>REACT</strong> <strong>VUE</strong>
                    </Container>

                    <Container className="text-center personal-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/axtho24"><FontAwesomeIcon icon={faGithub} size="3x"/> <p>Github</p></a>
                        <a href="mailto:aletho24@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x"/> <p>Email</p></a>
                        <Button variant="link"><FontAwesomeIcon icon={faPhoneSquare} size="3x"/> <p>407-496-3071</p></Button>
                        <a target="_blank" rel="noopener noreferrer" href={Pdf}><FontAwesomeIcon icon={faFile} size="3x"/> <p>Resume</p></a>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default About;