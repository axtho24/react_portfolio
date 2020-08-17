import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import Container from 'react-bootstrap/Container';

import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Timeline from  './Timeline';
import Footer from './Footer';

function App() {
  return (
    <Container className='fullWidth' fluid>
      <Navigation />
      <Header />
      <About />
      <Portfolio />
      <Timeline />
      <Footer />
    </Container>
  );
}

export default App;
