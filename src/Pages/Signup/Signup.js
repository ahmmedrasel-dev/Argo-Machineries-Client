import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import bg_login from '../../assets/images/bg_login.png';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <h1 className='text-center text-4xl'>Sign Up</h1>
      <div class="artboard artboard-horizontal phone-5 mt-6 mx-auto">
        <div class="hero bg-base-200 rounded-2xl py-8">
          <div class="hero-content flex-col lg:flex-row">
            <div className='flex-shrink-0'>
              <img className='max-w-sm' src={bg_login} alt='' />
            </div>
            <div class="divider lg:divider-horizontal">OR</div>
            <div className='flex-shrink-0 w-full max-w-sm'>
              <form className='mb-4' onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="input input-bordered"
                    {...register("name", {
                      required: {
                        value: true,
                        message: 'Name is Required!'
                      }
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                  </label>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered"
                    {...register("email", {
                      pattern: {
                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        message: 'Invalid Email!'
                      },
                      required: {
                        value: true,
                        message: 'Email Required!'
                      }
                    })}
                  />

                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  </label>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    class="input input-bordered"
                    {...register("password", {
                      minLength: {
                        value: 8,
                        message: 'At least 8 characters!'
                      },
                      required: {
                        value: true,
                        message: 'Password is Required!'
                      }
                    })}
                  />
                  <label className="label">
                    <Link className="label-text" to='reset-password'>Forgot Password?</Link>
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  </label>

                </div>

                <input
                  type="submit"
                  className="btn btn-accent uppercase w-full"
                  value="Signin"
                />
              </form>
              <span className='text-center label-text'>Already have an account? <Link to="/signin" className='text-primary'>Signin</Link></span>
              <div className="divider">OR</div>

              <button className="btn btn-outline w-full"><FcGoogle className='mx-2 text-xl' /> Signin With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;