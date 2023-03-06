import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [success, setSuccess] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const contactMessage = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    }

    fetch(`https://argu-machinaries-server.onrender.com/contact`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(contactMessage),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSuccess(data.message)
          reset()
        }
      })
  };
  return (
    <form className='flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <input type="text" placeholder="Your Name" className="input input-bordered" {...register("name", {
          required: {
            value: true,
            message: 'Name is Required!'
          }
        })} />
      </div>
      <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
      </label>

      <div className="form-control">
        <input type="text" placeholder="Your Email" className="input input-bordered" {...register("email", {
          required: {
            value: true,
            message: 'Email is Required!'
          }
        })} />

        <label className="label">
          {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>

      </div>
      <div className="form-control">
        <input type="text" placeholder="Subject" className="input input-bordered" {...register("subject", {
          required: {
            value: true,
            message: 'Subject is Required!'
          }
        })} />

        <label className="label">
          {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
        </label>
      </div>

      <textarea className="textarea textarea-info w-full h-40" placeholder="Your Messsage Here" {...register("message", {
        required: {
          value: true,
          message: 'Message is Required!'
        },
        minLength: {
          value: 50,
          message: 'At least 80 characters!'
        }
      })}></textarea>
      <label className="label">
        {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}

        {errors.message?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
      </label>

      <div className="form-control mt-6">
        <button className="btn btn-primary"><FiSend className='text-xl mr-3' />Send Message</button>
      </div>

      {success && <sapn className="text-green-600">{success}</sapn>}
    </form>
  );
};

export default ContactForm;