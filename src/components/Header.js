import React from 'react';
import { Card } from 'react-bootstrap';
import ultimateBg from './portfolio_images/ultimate-frisbee-bg.jpg'

const Header = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={ultimateBg} alt="Card image" />
            <Card.ImgOverlay>
                <div>
                    <h1>Front-End Web Developer</h1>
                    <h3>Always Rising To The Challenge</h3>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Header;