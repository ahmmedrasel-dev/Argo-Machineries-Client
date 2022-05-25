import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';
import auth from '../../../firebase.init';

const Profile = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const [user] = useAuthState(auth);
  const email = user.email
  const onSubmit = async data => {

    const profile = {
      phone: data.phone,
      address: data.address,
      education: data.education,
      institute: data.institute,
      linkedin: data.linkedin
    }

    const updateUser = async () => {
      const { data } = await axiosPrivate.put(`https://argo-machineries.herokuapp.com/user/${email}`, profile);
      if (data.result.modifiedCount > 0) {
        console.log('success')
        toast.success('Profile Updated Successfuly.')
        reset()
      }
    }
    updateUser()

  }

  return (
    <div className='artboard artboard-horizontal lg:max-w-4xl max-w-sm mt-6 mx-auto'>
      <div className="card bg-base-100 shadow-xl my-10">
        <div className="card-body">
          <h1 className='text-primary text-2xl uppercase'>Manage Profile</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-2 px-4 gap-3'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user.displayName}
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'Name is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user.email}
                  className="input input-bordered w-full"
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone Numer"
                  className="input input-bordered w-full"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: 'Phone Number is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone?.message}</span>}

                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full"
                  {...register("address", {
                    required: {
                      value: true,
                      message: 'Address is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address?.message}</span>}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  placeholder="Education"
                  className="input input-bordered w-full"
                  {...register("education", {
                    required: {
                      value: true,
                      message: 'Education is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.education?.message}</span>}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Institute Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Institute Name"
                  className="input input-bordered w-full"
                  {...register("institute", {
                    required: {
                      value: true,
                      message: 'Institute is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.institute?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.institute?.message}</span>}
                </label>
              </div>

            </div>


            <div className='grid grid-cols-1 px-4 gap-3'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Linkedin Profile Link</span>
                </label>
                <input
                  type="text"
                  placeholder="Linkedin Link"
                  className="input input-bordered w-full"
                  {...register("linkedin", {
                    required: {
                      value: true,
                      message: 'linkedin is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.linkedin?.message}</span>}
                </label>
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-accent uppercase"
              value="Save Profile"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;