import React from 'react';
import BlogItem from './BlogItem';

const Blog = () => {
  const blogs = [
    {
      _id: 1,
      title: 'How will you improve the performance of a React Application?',
      description: 'Using React in application brings better performance and minimizes the number of DOM operations used to build faster user interfaces as it was built keeping performance in mind.The browsers provide this feature in dev tools and allow us to audit the application. This includes measuring the performance of React applications. Another way is by analyzing React components with Chrome’s performance tab.'
    },
    {
      _id: 2,
      title: 'What are the different ways to manage a state in a React application?',
      description: 'The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components. Managing state is one of the hardest parts of any application, and that is why there are so many state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.URLs represent a hierarchy of components, overlaid on one top of the other. One can build a location tree using different URLs that represent different parts of your application.'
    },
    {
      _id: 3,
      title: 'How does prototypical inheritance work?',
      description: 'The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.'
    },
    {
      _id: 4,
      title: 'Why you do not set the state directly in React.?',
      description: 'its obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React will not be able to see that there is a change of the state and so it will not be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of where React tries to optimize some time by not rendering components if no changes are found. Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.'
    }
  ]
  return (
    <div className='bg-slate-100 py-12'>
      <div className='max-w-7xl mx-auto lg:mt-0'>
        <h1 className='text-3xl text-yellow-400 text-center'>Out Latest Blogs</h1>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 p-5'>
          {
            blogs.map(blog => <BlogItem
              key={blog._id}
              blog={blog}
            ></BlogItem>)
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;