import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Chart from '../components/Chart';
import { BasicTable as Table } from '../components/BasicTable';
import Review from '../components/Review';
import DoctorsSec from '../components/DoctorsSec';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

function Home({ handleLogout, isLogin }) {
  const [state, setState] = useState(false);

  const conToggle = () => {
    setState(!state);
  }

  return (
    <div className='home'>
      <Navbar pass={conToggle} />
      <Container>
      <section className="hero">
        <nav className="hero-nav">
          <h1>Performance Overview</h1>
          <button className="hero-button" onClick={handleLogout}>Log out</button>
        </nav>
      </section>
        <div className={state ? 'page-normal' : 'page-left'}>
        <Row className='cont-row' xs={2}>
          <Col xs lg="2" className='col-item1'>
            <Chart />
          </Col>
          <Col md="auto" className='col-item1'>
            <Table />
          </Col>
        </Row>
        <Row className='cont-row' xs={1}>
          <Col md="auto" className='col-item2'>
            <Review />
          </Col>
          <Col xs lg="2" className='col-item2 margin-top'>
            <DoctorsSec />
          </Col>
        </Row>
        </div>
      </Container>

    </div>
  );
}

export default Home;