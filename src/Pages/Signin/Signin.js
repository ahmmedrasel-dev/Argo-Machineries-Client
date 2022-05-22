import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg_login from '../../assets/images/bg_login.png';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shered/Loading/Loading';

const Signin = () => {
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    signInUser,
    signInLoading,
    signInError,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  if (signInLoading) {
    return <Loading></Loading>
  }

  if (signInUser) {
    navigate('/')
  }
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
  };

  return (
    <div>
      <h1 className='text-center text-4xl'>Sign In</h1>
      <div className="artboard artboard-horizontal phone-5 mt-6 mx-auto">
        <div className="hero bg-base-200 rounded-2xl py-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-shrink-0'>
              <img className='max-w-sm' src={bg_login} alt='' />
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className='flex-shrink-0 w-full max-w-sm'>
              <form className='mb-4' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    autoComplete=''
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
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
                  value="Sign In"
                />
              </form>
              <span className='text-center label-text'>New to Argo Machineries? <Link to="/signup" className='text-primary'>Create new account</Link></span>
              <div className="divider">OR</div>

              <button className="btn btn-outline w-full"><FcGoogle className='mx-2 text-xl' /> Signin With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;