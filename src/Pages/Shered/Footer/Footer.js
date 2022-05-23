import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { BsEnvelopeFill, BsFillTelephonePlusFill, BsTwitter } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { GrPaypal } from 'react-icons/gr'
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="max-w-7xl mx-auto p-10 text-base-content">
      <div className='footer grid lg:grid-cols-3 grid-cols-1 mb-8'>
        <div>
          <span className="footer-title text-2xl">About Us</span>
          <img className='w-28' src={logo} alt="" />
          <article>
            Argo Machinary is import Agriculture & Landscaping Tools and Machinaries is your one-stop solution. We offer Agriculture Garden & Landscaping tools in a best price that meet every need.
          </article>
        </div>

        <div>
          <span className="footer-title text-2xl">Usefull Links</span>
          <Link to='/about' className="link text-lg link-hover">About us</Link>
          <Link to='/about' className="link text-lg link-hover">Contact</Link>
          <Link to='/about' className="link text-lg link-hover">Join</Link>
          <Link to='/about' className="link text-lg link-hover">Register</Link>
        </div>

        <div>
          <span className="footer-title text-2xl">Contact Info</span>
          <p className='font-bold text-lg'>For Any quiry contact with us.</p>
          <p className='flex gap-5 items-center text-lg'><BsEnvelopeFill /><span>contact@argomachineries.com</span></p>
          <p className='flex gap-5 items-center text-xl'><BsFillTelephonePlusFill /><span>966572868132</span></p>
          <address className='flex gap-5 items-center text-lg'>
            <ImLocation2 />
            Dammam, Saudi Arabia
          </address>
        </div>


        <div>
          <span className="footer-title text-2xl">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link to='/'><FaFacebookF className='text-2xl' /></Link>
            <Link to='/'><BsTwitter className='text-2xl' /></Link>
            <Link to='/'><FaYoutube className='text-2xl' /></Link>
          </div>
          <span className="footer-title  text-lg">We Accepet Payment</span>
          <div className="grid grid-flow-col gap-4">
            <Link to='/'><FaCcVisa className='text-2xl' /></Link>
            <Link to='/'><FaCcMastercard className='text-2xl' /></Link>
            <Link to='/'><GrPaypal className='text-2xl' /></Link>
          </div>
        </div>
      </div>

      <div className='text-center border-t pt-8'>
        <p>Copyright &copy; {year} - All right reserved</p>
      </div>
    </footer>

  );
};

export default Footer;