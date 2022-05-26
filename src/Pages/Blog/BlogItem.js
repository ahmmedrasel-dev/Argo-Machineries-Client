import React from 'react';

const BlogItem = ({ blog }) => {

  return (
    <div className='max-w-5xl bg-slate-50 rounded-lg shadow-lg p-5'>
      <p className='font-bold mb-t'>{blog.title}</p>
      <p className='pt-3'>{blog.description}</p>
    </div>
  );
};

export default BlogItem;