import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import Countdown from './Countdown';
import Ifit from './Ifit';
import Personal from './PersonalSite';
import Sams from './Sams';
import AnalyticOwl from './AnalyticOwl';
import Holistic from './Holistic';

const Portfolio = () => {
    return (
            <Container className="portfolio" fluid>
                <header className="text-center">
                    <h1>PROJECTS</h1>
                </header>
                <CardDeck className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <Countdown />
                    </div>
                    <div className="col mb-4">
                        <Ifit />
                    </div>
                    <div className="col mb-4">
                        <Personal />
                    </div>
                    <div className="col mb-4">
                        <Sams />
                    </div>
                    <div className="col mb-4">
                        <AnalyticOwl />
                    </div>
                    <div className="col mb-4">
                        <Holistic />
                    </div>
                </CardDeck>
            </Container>
    );
}

export default Portfolio;