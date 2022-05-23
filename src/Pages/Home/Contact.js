import React from 'react';
import product_img_1 from '../../assets/images/product_img_1.png';
import { useForm } from "react-hook-form";
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='mx-auto py-12 mt-10 lg:mt-0  bg-base-200'>
      <h1 className='text-3xl text-yellow-400 text-center pt-8'>Contact Us.</h1>
      <div>
        <div class="hero min-h-screen">
          <div class="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <img src={product_img_1} class="shadow-2xl mt-7 lg:max-w-xl w-full rounded-md animate__animated animate__zoomIn" alt='' />
            </div>
            <div className='pr-12 max-w-xl'>
              <div class="card-body">
                <p>For Business: For Business inquiry fill our feedback form and Troll Free Number - (+91) 00-700-6202, our team will help you with in 24 hours.</p>

                <form className='flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-control">
                    <input type="text" placeholder="Your Name" class="input input-bordered" {...register("name", {
                      required: {
                        value: true,
                        message: 'Name is Required!'
                      }
                    })} />
                  </div>
                  <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                  </label>

                  <div class="form-control">
                    <input type="text" placeholder="Your Email" class="input input-bordered" {...register("email", {
                      required: {
                        value: true,
                        message: 'Email is Required!'
                      }
                    })} />

                    <label className="label">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>

                  </div>
                  <div class="form-control">
                    <input type="text" placeholder="Subject" class="input input-bordered" {...register("subject", {
                      required: {
                        value: true,
                        message: 'Subject is Required!'
                      }
                    })} />

                    <label className="label">
                      {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                    </label>
                  </div>

                  <textarea class="textarea textarea-info w-full h-40" placeholder="Your Messsage Here" {...register("message", {
                    required: {
                      value: true,
                      message: 'Message is Required!'
                    },
                    minLength: {
                      value: 80,
                      message: 'At least 80 characters!'
                    }
                  })}></textarea>

                  <div class="form-control mt-6">
                    <button class="btn btn-primary"><FiSend className='text-xl mr-3' />Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;