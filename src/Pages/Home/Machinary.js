import React from 'react';
import product_img_1 from '../../assets/images/product_img_1.png'

const Machinary = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className='lg:max-w-xl w-full rounded-md animate__animated animate__zoomIn' src={product_img_1} alt="" />
          <div className='pr-12 max-w-xl'>
            <h1 className="text-5xl font-bold">Blue tractor with drills </h1>
            <p className="py-6">John Deere 5E Series tractors are available from 50HP to 75HP. The 5E series tractors are specially designed for heavy duty applications and to handle large size implements with great ease and efficiency.</p>
            <p className='text-4xl uppercase my-4'>Price: $122</p>
            <div className='mb-4'>
              <p className='text-3xl mb-3'>Quanity:</p>
              <input type="text" placeholder="Quanity" className="input input-bordered input-md w-full max-w-xs" />
            </div>
            <p className='text-3xl mb-3'>Avaiable Qaunity: 120 Pices</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='lg:max-w-xl w-full  rounded-md animate__animated animate__zoomIn' src={product_img_1} alt="" />
          <div className='pr-12 max-w-xl'>
            <h1 className="text-5xl font-bold">Blue tractor with drills </h1>
            <p className="py-6">John Deere 5E Series tractors are available from 50HP to 75HP. The 5E series tractors are specially designed for heavy duty applications and to handle large size implements with great ease and efficiency.</p>
            <p className='text-4xl uppercase my-4'>Price: $122</p>
            <div className='mb-4'>
              <p className='text-3xl mb-3'>Quanity:</p>
              <input type="text" placeholder="Quanity" className="input input-bordered input-md w-full max-w-xs" />
            </div>
            <p className='text-3xl mb-3'>Avaiable Qaunity: 120 Pices</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>


      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className='lg:max-w-xl w-full rounded-md animate__animated animate__zoomIn' src={product_img_1} alt="" />
          <div className='pr-12 max-w-xl'>
            <h1 className="text-5xl font-bold">Blue tractor with drills </h1>
            <p className="py-6">John Deere 5E Series tractors are available from 50HP to 75HP. The 5E series tractors are specially designed for heavy duty applications and to handle large size implements with great ease and efficiency.</p>
            <p className='text-4xl uppercase my-4'>Price: $122</p>
            <div className='mb-4'>
              <p className='text-3xl mb-3'>Quanity:</p>
              <input type="text" placeholder="Quanity" className="input input-bordered input-md w-full max-w-xs" />
            </div>
            <p className='text-3xl mb-3'>Avaiable Qaunity: 120 Pices</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Machinary;