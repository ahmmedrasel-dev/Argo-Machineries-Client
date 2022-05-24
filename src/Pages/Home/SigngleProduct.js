import React from 'react';
import { useNavigate } from 'react-router-dom';

const SigngleProduct = ({ product, refetch }) => {
  const { _id, image, name, price, minQuantity, quantity, description } = product
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  }

  refetch()
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img className='w-96 pl-6 rounded-lg' src={image} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <p>{description}</p>
        <p className='text-4xl uppercase'>Price: ${price}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-red-600">Minum Order Quanity: {minQuantity} </span>
          </label>

        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <label className="input-group mb-4 lg:mb-0">
            <span>Quanity</span>
            <input type="text" placeholder='Order Quantity' className="input input-bordered" />
          </label>
          <div className='lg:w-40 w-full'>
            <button className="btn btn-primary lg:w-40 w-full" onClick={() => navigateToPurchase(_id)}>Buy Now</button>
          </div>
        </div>
        <p className='text-2xl text-green-500'>Avaiable Qaunity: {quantity} Pices</p>
      </div>
    </div>
  );
};

export default SigngleProduct;