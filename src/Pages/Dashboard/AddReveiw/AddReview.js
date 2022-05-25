import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import { AiOutlineStar } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axiosPrivate from '../../../api/AxiosPrivate';
import { toast } from 'react-toastify';
const AddReview = () => {
  const [rating, setRating] = useState(0)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const [user] = useAuthState(auth);

  // console.log(rating)
  const imgStorageKey = `71c3b2215e8817f9c1afc8f8d7c617f4`;
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        const img = result.data.url;
        const review = {
          name: user.displayName,
          address: data.location,
          comment: data.comment,
          rating,
          image: img
        }

        console.log(review)
        try {
          const postReview = async () => {
            const { data } = await axiosPrivate.post(`https://argo-machineries.herokuapp.com/review`, review);
            if (data.success) {
              toast.success(data.message)
            } else {
              toast.error(data.message)
            }
          }
          postReview()
        }
        catch (error) {
          toast.error(error.message)
        }

      })


  }
  return (
    <div className='artboard artboard-horizontal lg:max-w-4xl max-w-sm mt-6 mx-auto'>
      <div className="card bg-base-100 shadow-xl my-10">
        <div className="card-body">
          <h1 className='text-center text-primary text-2xl uppercase'>Add Review</h1>


          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='grid grid-cols-1 px-4 gap-3'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Yout Location"
                  className="input input-bordered w-full"
                  {...register("location", {
                    required: {
                      value: true,
                      message: 'Location is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.location?.message}</span>}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full"
                  {...register("image", {
                    required: {
                      value: true,
                      message: 'Image is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image?.message}</span>}
                </label>
              </div>

              <div className='form-control'>
                <label className="label">
                  <span className="label-text">Your Comment</span>
                </label>
                <textarea className="textarea textarea-info h-40" placeholder="Your comment Here.." {...register("comment", {
                  required: {
                    value: true,
                    message: 'Comment is Required!'
                  },
                  minLength: {
                    value: 100,
                    message: 'At least 100 characters!'
                  }
                })}></textarea>
                <label className="label">
                  {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}

                  {errors.comment?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                </label>
              </div>

              <div className='form-control'>
                <label className="label">
                  <span className="label-text">Plese Give your Rating</span>
                </label>
                <ReactStars
                  count={5}
                  size={30}
                  onChange={ratingChanged}
                  emptyIcon={<AiOutlineStar />}
                  edit={true}
                  activeColor="#ffd700"
                />
              </div>

            </div>


            <div className='mt-5'>
              <input
                type="submit"
                className="btn btn-accent uppercase"
                value="Save Review"
              /></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;