import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import UARK from './portfolio_images/uark.jpg';
import TIY from './portfolio_images/TIY.png';
import Analytic from './portfolio_images/AO.png';
import HBS from './portfolio_images/hbs.png';

const Timeline = () => {
    return (
        <Container className="timeline">
            <header className="text-center">
                <h1>Timeline</h1>
            </header>
            <Row>
                <Col lg={12}>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <Image className="img-responsive" src={UARK} roundedCircle />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009</h4>
                                    <h4 className="subheading">College Years</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        Once done with high school I went to the Univeristy of Arkansa, being about a day drive from home, and by myself with no family 
                                        close made the experience and this new chapter of my life great because it allowed me to be an independent 
                                        individual throughout all those years.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <Image className="img-responsive" src={TIY} roundedCircle />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2016</h4>
                                    <h4 className="subheading">Expanding my Horizons</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        I decided to take the right step career wise and started classes at 
                                        the Iron Yard, in front-end engineering, this being the best decision I could have made in my life so far, 
                                        and now looking to keep on going in this field.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                                <Image className="img-responsive" src={Analytic} roundedCircle />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2017</h4>
                                    <h4 className="subheading">AnalyticOwl</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        As my first job as a Front-End Developer, this was an amazing experience. I instantly got put into working
                                        with our website and updating the UI, as well being give the huge task to upgrade every graphic using technologies
                                        I never knew about, it was a great learning experience, and the growth I optain there is incomperatble.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <Image className="img-responsive" src={HBS} roundedCircle />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2018</h4>
                                    <h4 className="subheading">Holistic Billing Services</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        On my second job as a Front-End Developer I totally felt like the importance and signicance of the jobs was risen. I was solely tasked
                                        with developing a completely new form that would be use by many of our clients in the medical field. Not only did I developed the form but 
                                        also designed it, and was able to integrate it with our current platform. I was able to dive a bit into the backend of the developer side
                                        and use some PHP as well as MySQL and I most defintely can't wait to try out new languages and learn new things.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Lets
                                    <br/>Grow
                                    <br/>Together!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Timeline;