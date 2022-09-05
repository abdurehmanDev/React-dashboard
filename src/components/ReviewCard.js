import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { reviewData } from '../data-folder/ReviewData';
import './Styles/ReviewCard.css';


const totalStar = [1, 2, 3, 4, 5];

const ReviewCard = () => 

    {

      return (
      reviewData.map((paramtr, index) => {
    return (
    <Container key={index}>
      <Row className={(parseInt(paramtr.numOfRate) === 2) ? 'icon review-card twoStar-cont' : 'icon review-card'}>
        <Col className={(parseInt(paramtr.numOfRate)  === 2) ? 'review-icon twoStar-icon' : 'review-icon'}>
         {paramtr.reactIcon}
        </Col>
        <Col className='cont'>
          <Col className='review-area'>
            <span className='total-mem'>({paramtr.totalNumPeople})</span>
            <small className='rate-label'>{paramtr.typeOfReview}</small>
          </Col>
          <Col>
            <Link to='#' className='link-tag'>
              <span className='rating-num'>{paramtr.numOfRate}</span>
              {totalStar.map((item, index) => {
                return (
                  <FiStar style={
                    (paramtr.numOfRate >= totalStar[index]) ?  {color:'white',fill: 'white', fontSize: '1.2rem'} : {color:'white', fontSize: '1.2rem'} } key={index} />
                );
              })}
            </Link>
          </Col>
        </Col>
      </Row>
    </Container>
    )
    })
  )}


export default ReviewCard;