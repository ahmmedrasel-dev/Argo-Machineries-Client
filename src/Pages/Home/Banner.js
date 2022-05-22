import React from 'react';
import sliders from '../../assets/images/sliders.jpg';

const Banner = () => {
  return (
    <div className="hero h-[550px]" style={{ background: `url(${sliders})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className="hero-overlay bg-opacity-80 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold leading-normal animate__animated animate__backInDown animate__fadeInDown">Smart Agricultural Solutions and Machineries</h1>
          <p className="mb-5 leading-normal text-xl">Looking for premium Agriculture & Landscaping  Tools and Machinaries is your one-stop solution. We offer Agriculture Garden & Landscaping tools in a best price that meet every need.</p>
          <button className="btn btn-primary animate__animated animate__bounceInUp">Get Started</button>
        </div>
      </div>
    </div >
  );
};

export default Banner;