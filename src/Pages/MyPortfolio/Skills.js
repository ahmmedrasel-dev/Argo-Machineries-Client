import React from 'react';

const Skills = () => {
  return (
    <div className="artboard artboard-horizontal bg-slate-100">
      <h2 className='text-center uppercase text-5xl font-bold pt-16'>My Skills</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-w-7xl w-full mx-auto gap-5 py-12">
        <div className="max-w-5xl bg-slate-50 rounded-lg shadow-lg">
          <div className='flex flex-col p-8 gap-3'>
            <label htmlFor="" className='text-xl'>Html5</label>
            <progress className="progress progress-accent w-full" value="100" max="100"></progress>
            <label htmlFor="" className='text-xl'>CSS3</label>
            <progress className="progress progress-accent w-full" value="90" max="100"></progress>

            <label htmlFor="" className='text-xl'>JavaScript</label>
            <progress className="progress progress-accent w-full" value="70" max="100"></progress>

            <label htmlFor="" className='text-xl'>Jquery</label>
            <progress className="progress progress-accent w-full" value="80" max="100"></progress>

            <label htmlFor="" className='text-xl'>Bootstrap</label>
            <progress className="progress progress-accent w-full" value="100" max="100"></progress>
          </div>

        </div>
        <div className="max-w-5xl bg-slate-50 rounded-lg shadow-lg">
          <div className='flex flex-col p-8 gap-3'>
            <label htmlFor="" className='text-xl'>React Js</label>
            <progress className="progress progress-accent w-full" value="90" max="100"></progress>
            <label htmlFor="" className='text-xl'>Tailwind CSS</label>
            <progress className="progress progress-accent w-full" value="100" max="100"></progress>

            <label htmlFor="" className='text-xl'>Node Js</label>
            <progress className="progress progress-accent w-full" value="60" max="100"></progress>

            <label htmlFor="" className='text-xl'>Mongodb</label>
            <progress className="progress progress-accent w-full" value="65" max="100"></progress>

            <label htmlFor="" className='text-xl'>Express Js</label>
            <progress className="progress progress-accent w-full" value="80" max="100"></progress>
          </div>

        </div>
      </div>
    </div >

  );
};

export default Skills;