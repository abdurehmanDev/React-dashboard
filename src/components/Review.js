import React from 'react';

import ReviewCard from './ReviewCard';

const Review = () => {
  return (
    <div className='contains'>
      <div>
        <div className='label-top'>
          <header>
            <h4 className='row-header'>overall reviews</h4>
          </header>
        </div>
        <div>
          <ReviewCard />
        </div>
      </div>
    </div>
  )
}

export default Review;