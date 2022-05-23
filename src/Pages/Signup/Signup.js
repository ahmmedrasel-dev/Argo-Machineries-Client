import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import bg_login from '../../assets/images/bg_login.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const Signup = () => {
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    signUpUser,
    loading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const [
    updateProfile,
    updating,
    updateError
  ] = useUpdateProfile(auth);

  const [token] = useToken(signUpUser || googleUser)

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (signUpError) {
      toast.error(signUpError.message);
    }
    if (updateError) {
      toast.error(updateError.message);
    }

    if (googleError) {
      toast.error(googleError.message);
    }
  }, [signUpError, updateError, googleError])


  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate('/')
  }

  const handleGoogle = () => {
    signInWithGoogle()
  }

  const onSubmit = async data => {
    const { email, password, name } = data;
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: name });
  };
  return (
    <div className='lg:h-[750px] h-[1050px] bg-slate-200'>
      <h1 className='text-center text-4xl pt-10'>Sign Up</h1>
      <div className="artboard lg:artboard-horizontal  lg:max-w-4xl max-w-sm mt-6 mx-auto">
        <div className="hero bg-base-100 rounded-2xl py-8">
          <div className="hero-content flex-col lg:flex-row">
            <div className='flex-shrink-0 '>
              <img className='max-w-ex lg:max-w-sm' src={bg_login} alt='' />
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className='flex-shrink-0 w-full max-w-sm'>
              <form className='mb-4' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    {...register("email", {
                      pattern: {
                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        message: 'Invalid Email!'
                      },
                      required: {
                        value: true,
                        message: 'Email is Required!'
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
                    autoComplete='off'
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
                  value="Signin"
                />
              </form>
              <span className='text-center label-text'>Already have an account? <Link to="/signin" className='text-primary'>Signin</Link></span>
              <div className="divider">OR</div>

              <button onClick={handleGoogle} className="btn btn-outline w-full"><FcGoogle className='mx-2 text-xl' /> Signin With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;