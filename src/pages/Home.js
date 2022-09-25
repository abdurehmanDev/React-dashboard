import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import { BasicTable as Table } from '../components/BasicTable';
import Review from '../components/Review';
import DoctorsSec from '../components/DoctorsSec';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import './Home.css';

function Home({ handleLogout }) {
  const [state, setState] = useState(false);

  const conToggle = () => {
    setState(!state);
  }

  return (
    <div className='home'>
      <Navbar pass={conToggle} handleLogout={handleLogout}/>
      <Container>
        <div className={state ? 'page-normal  spacing' : 'page-left spacing'}>
        <Hero handleLogout={handleLogout} heroHeading="Performance Overiew"/>
        <Row>
          <Col className='col-item' md={8}>
            <Chart />
          </Col>
          <Col className='col-item' md={4}>
          <Review />
          </Col>
        </Row>
        <Row>
          <Col  className='col-item' md={8}>
           <Table/>
          </Col>
          <Col className='col-item' md={4}>
            <DoctorsSec />
          </Col>
        </Row>
        </div>
      </Container>

    </div>
  );
}

export default Home;