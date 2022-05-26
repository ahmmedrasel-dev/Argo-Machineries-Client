import React from 'react';
import ContactForm from '../Shered/ContactForm/ContactForm';
import { FaRegAddressCard } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const ContactUs = () => {
  return (
    <div className="artboard artboard-horizontal">
      <h2 className='text-center uppercase text-5xl font-bold pt-16'>Contact</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-w-7xl w-full mx-auto gap-5 py-12">
        <div className="max-w-5xl bg-slate-50 rounded-lg shadow-lg">
          <div className='flex flex-col p-8 gap-3'>
            <ContactForm></ContactForm>
          </div>

        </div>
        <div className="max-w-5xl bg-slate-50 rounded-lg shadow-lg">
          <div className='flex flex-col p-8 gap-3'>
            <div className='flex items-center mt-8'>
              <FaRegAddressCard className='text-5xl' />
              <h3 className='text-3xl ml-3'>Contact information:</h3>
            </div>
            <div className='mt-8 flex flex-col  gap-4' >
              <div className='flex items-center'>
                <BsFillTelephoneForwardFill className='text-2xl' />
                <h3 className='text-xl ml-3'>966572868132</h3>
              </div>
              <div className='flex items-center'>
                <MdEmail className='text-2xl' />
                <h3 className='text-xl ml-3'>rahmmed.info@gmail.com</h3>
              </div>
              <div className='flex items-center'>
                <IoLocation className='text-2xl' />
                <h3 className='text-xl ml-3'>Dammam, Saudi Arabia.</h3>
              </div>
              <div className='flex items-center'>
                <AiFillGithub className='text-2xl' />
                <a className='text-xl ml-3' href='https://github.com/ahmmedrasel-dev' >Github</a>
              </div>
              <div className='flex items-center'>
                <AiFillLinkedin className='text-2xl' />
                <a className='text-xl ml-3' href='https://www.linkedin.com/in/ahmmedrasel-dev/' >Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ContactUs;