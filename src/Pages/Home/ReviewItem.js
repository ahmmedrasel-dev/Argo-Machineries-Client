import React from 'react';

import ReactStars from 'react-rating-stars-component';
import { AiFillStar } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Loading from '../Shered/Loading/Loading';
import axiosPrivate from '../../api/AxiosPrivate';
import { useQuery } from '@tanstack/react-query';

const ReviewItem = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      try {
        const { data } = await axiosPrivate.get('https://argu-machinaries-server.onrender.com/reviews');
        return data.slice(0, 4);
      }
      catch (error) {
        toast.error(error.messae)
      }
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }
  return (

    <>
      {
        reviews.map(review => <div key={review._id} className="bg-base-100 shadow-xl mt-20">
          <div className="avatar mt-[-25px] ml-10">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.image} alt='' />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{review.name}</h2>
            <small>{review.address}</small>
            <q>{review.comment}</q>

            <ReactStars
              value={review.rating}
              size={24}
              edit={false}
              isHalf={true}
              activeColor="#ffd700"
              filledIcon={<AiFillStar />}
            />
          </div>
        </div>)
      }
    </>

  );
};

export default ReviewItem;