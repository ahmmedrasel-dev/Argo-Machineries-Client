import React from 'react';
import ReviewItem from './ReviewItem';

const Review = () => {

  return (
    <div className='max-w-7xl mx-auto py-12 mt-10 lg:mt-0'>
      <h1 className='text-3xl text-yellow-400 text-center pt-8'>Our Clients Says</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-5'>
        <ReviewItem></ReviewItem>
      </div>
    </div>
  );
};

export default Review;