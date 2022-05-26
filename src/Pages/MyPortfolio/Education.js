import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
const Education = () => {
  return (
    <div className="artboard artboard-horizontal bg-slate-100">
      <h2 className='text-center uppercase text-5xl font-bold pt-16'>My Education</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-w-7xl w-full mx-auto gap-5 py-12">
        <div className="max-w-5xl bg-slate-50 rounded-lg shadow-lg">
          <div className='flex flex-col p-8 gap-3'>
            <h1 className='text-center btn btn-accent'>Daffodil International University</h1>

            <div className='flex mt-6'>
              <FaUserGraduate className='text-5xl' />
              <div className='ml-4'>
                <h2>Bachelor of Business Administration(BBA)</h2>
                <h2>2021-2015</h2>
              </div>
            </div>

          </div>

        </div>
        <div className="max-w-5xl bg-slate-50 rounded-lg shadow-lg">
          <div className='flex flex-col p-8 gap-3'>
            <h1 className='text-center btn btn-accent'>Programing Hero</h1>

            <div className='flex mt-6'>
              <FaUserGraduate className='text-5xl' />
              <div className='ml-4'>
                <h2>MEARN Stack Development</h2>
                <h2>2022</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Education;