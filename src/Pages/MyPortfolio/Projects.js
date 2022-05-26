import React from 'react';
import Project from './Project';
import project_1 from '../../assets/images/project_1.png';
import project_2 from '../../assets/images/project_2.png';
import project_3 from '../../assets/images/project_3.png';

const Projects = () => {

  const projects = [
    {
      _id: 1,
      name: 'Ride CarHouse',
      features: [
        'Login Register With Email And Password & Google.',
        'JWT Token Use For Secure The Created API.',
        'Data Create, Edit, Update and Delete',
        'Deploy Firebase Hosting and Heroku.',
      ],
      Link: 'https://ride-carhouse.firebaseapp.com/',
      image: project_1
    },
    {
      _id: 2,
      name: 'Local Adventure Guide',
      features: [
        'User Authentication using Firebase.',
        'Mobile Responsive.',
        'Email Verification and Reset Password By Email.',
        'Created Private Route.'
      ],
      Link: 'https://local-advancer-guide.web.app/',
      image: project_2,
    },
    {
      _id: 2,
      name: '5dots Ecommerce',
      features: [
        'Subscription Package For merchant account.',
        'Seller upload product and manage their profile but product publish only admin.',
        'Payment getaway integrated, multi-language',
        'Individual Dashboard for Admin, Seller, Customer.',
      ],
      Link: 'https://5dots.sa',
      image: project_3
    }
  ]
  return (
    <div className="artboard artboard-horizontal">
      <h2 className='text-center uppercase text-5xl mt-8 font-bold'>My Projects</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:max-w-7xl w-full mx-auto gap-5 py-12">
        {
          projects.map(project => <Project
            key={project._id}
            project={project}
          ></Project>)
        }
      </div>
    </div >
  );
};

export default Projects;