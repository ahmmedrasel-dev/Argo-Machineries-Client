import React from 'react';
import my_photo from '../../assets/images/my_photo.png';


const Banner = () => {
  return (
    <div className="hero min-h-screen bg-slate-50 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className='lg:max-w-md w-full bg-slate-200 shadow-lg rounded-2xl' src={my_photo} alt='myphoto' />
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold uppercase lg:mb-4 lg:pt-0 pt-20">Rasel <span className='bg-green-500 rounded-lg py-1 px-4 text-white'>Ahmmed!</span></h1>
          <h1 className="text-3xl uppercase">MERN Stack Developer!</h1>
          <p className="py-6">I am an ambitious and hardworking individual with broad skills and experience in Full-stack web develop-
            ment. I have experience working as part of a team and individually. I am always energetic and eager to learn

            new skills and techniques. I have been able to deliver my work with a consistent approach throughout a chal-
            lenging periods.</p>
          <a href='https://drive.google.com/uc?export=download&id=1nHHEZYDAaBm0TZACWobwluFFSYwLYG-M' className="btn bg-green-600 text-white">Download My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;