import React from 'react';
import product_img_1 from '../../assets/images/product_img_1.png';
import ContactForm from '../Shered/ContactForm/ContactForm';

const Contact = () => {


  return (
    <div className='mx-auto py-12 mt-10 lg:mt-0  bg-base-200'>
      <h1 className='text-3xl text-yellow-400 text-center pt-8'>Contact Us.</h1>
      <div>
        <div className="hero min-h-screen">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <img src={product_img_1} className="shadow-2xl mt-7 lg:max-w-xl w-full rounded-md animate__animated animate__zoomIn" alt='' />
            </div>
            <div className='pr-12 max-w-xl'>
              <div className="card-body">
                <p className='text-xl'>For Business inquiry fill our feedback form and Troll Free Number - (+91) 00-700-6202, our team will help you with in 24 hours.</p>

                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;