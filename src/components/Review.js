import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReviewCard from './ReviewCard';

const Review = () => {
  return (
    <Container className='contains'>
      <Row>
        <Col className='label-top'>
          <header>
            <h4 className='row-header spacing'>overall reviews</h4>
          </header>
        </Col>
        <Col>
          <ReviewCard />
        </Col>
    
      </Row>
    </Container>
  )
}

export default Review;