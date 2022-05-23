import React from 'react';
import bg_1 from '../../assets/images/bg_1.jpg';
import { FaUsers, FaTools } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
const BusinessSummery = () => {

  return (
    <div className='lg:h-[350px] h-screen' style={{ background: `url(${bg_1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1 className='text-3xl text-yellow-400 text-center pt-8'>What We Achived?</h1>

      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 p-5'>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body flext flex-col justify-center items-center">
            <FaUsers className='text-yellow-400 text-5xl' />
            <h2 className="text-5xl">100+</h2>
            <p>we served 100+ customers?</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body flext flex-col justify-center items-center">
            <AiOutlineDollarCircle className='text-yellow-400 text-5xl' />
            <h2 className="text-5xl">120M+</h2>
            <p>120M+ Annual revenue</p>

          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body flext flex-col justify-center items-center">
            <VscFeedback className='text-yellow-400 text-5xl' />
            <h2 className="text-5xl">33K+</h2>
            <p>33K+ Reviews</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body flext flex-col justify-center items-center">
            <FaTools className='text-yellow-400 text-5xl' />
            <h2 className="text-5xl">50K</h2>
            <p>50+ tools</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default BusinessSummery;