import React, {Component} from 'react';
import { Navbar, Nav }from 'react-bootstrap';
import Pdf from './resume.pdf';
import { Link, animateScroll as scroll } from 'react-scroll';

class Navigation extends Component {

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="sm" sticky="top">
                <Navbar.Brand onClick={() => this.scrollToTop()}>Alex Thomas</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className="nav-link"
                        >
                        About
                        </Link>
                        <Link 
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className="nav-link"
                        >
                        Portfolio
                        </Link>
                        <Link
                            to="timeline"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className="nav-link"
                        >
                        Timeline
                        </Link>
                        <Nav.Link target="_blank" rel="noopener noreferrer" href={Pdf}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;