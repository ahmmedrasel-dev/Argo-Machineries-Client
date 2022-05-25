import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const imgStorageKey = `71c3b2215e8817f9c1afc8f8d7c617f4`;
  const onSubmit = async data => {

    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            minQuantity: data.minQuantity,
            image: img
          }

          try {
            const postProduct = async () => {
              const { data } = await axiosPrivate.post('https://argo-machineries.herokuapp.com/add-product', product);
              if (data.success) {
                toast.success(data.message);
                reset();
              }
              else {
                toast.success('Fail to add the Product.')
              }
            }

            postProduct()
          }
          catch (error) {
            toast.error(error.message)
          }
        }
      })
  }
  return (
    <div className='artboard artboard-horizontal lg:max-w-4xl max-w-sm mt-6 mx-auto'>
      <div className="card bg-base-100 shadow-xl my-10">
        <div className="card-body">
          <h1 className='text-center text-primary text-2xl uppercase'>Add Products</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 px-4 gap-3'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'Product Name is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                </label>
              </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 px-4 gap-3'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full"
                  {...register("image", {
                    required: {
                      value: true,
                      message: 'Image is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  {...register("price", {
                    required: {
                      value: true,
                      message: 'Price is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.price?.message}</span>}

                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Qunaity"
                  className="input input-bordered w-full"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: 'Quanity is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Min Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Min qunaity"
                  className="input input-bordered w-full"
                  {...register("minQuantity", {
                    required: {
                      value: true,
                      message: 'Minimum Quantity is Required!'
                    }
                  })}
                />
                <label className="label">
                  {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.minQuantity?.message}</span>}
                </label>
              </div>

            </div>

            <div className='grid grid-cols-1 px-4 gap-3'>
              <div className='form-control'>
                <label className="label">
                  <span className="label-text">Product Short Description</span>
                </label>
                <textarea className="textarea textarea-info h-40" placeholder="Product Short Description.." {...register("description", {
                  required: {
                    value: true,
                    message: 'Product Summary is Required!'
                  },
                  minLength: {
                    value: 50,
                    message: 'At least 120 characters!'
                  }
                })}></textarea>
                <label className="label">
                  {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                  {errors.description?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </label>
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-accent uppercase"
              value="Save Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;