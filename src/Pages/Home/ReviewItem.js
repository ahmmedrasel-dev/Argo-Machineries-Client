import React from 'react';

import ReactStars from 'react-rating-stars-component';
import { AiFillStar } from 'react-icons/ai';

const ReviewItem = () => {
  return (
    <div className="bg-base-100 shadow-xl mt-20">
      <div className="avatar mt-[-25px] ml-10">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Rasel Ahmmed</h2>
        <small>Dammam, Saudi Arabia</small>
        <q>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</q>

        <ReactStars
          value={4}
          size={24}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
          filledIcon={<AiFillStar />}
        />
      </div>
    </div>
  );
};

export default ReviewItem;