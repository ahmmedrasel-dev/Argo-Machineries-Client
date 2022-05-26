import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';


const Myportfolio = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Myportfolio;