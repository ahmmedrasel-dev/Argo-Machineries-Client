import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../api/AxiosPrivate';
import Loading from '../Shered/Loading/Loading';
import OrderModal from '../Shered/OderModal/OrderModal';

const Purchase = () => {
  const { id } = useParams()
  const [newProduct, setNewProduct] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [quanityError, setQtyError] = useState('');
  const { data: product, isLoading, refetch } = useQuery({
    queryKey: ['product', 'id'],
    queryFn: async () => {
      try {
        const { data } = await axiosPrivate.get(`https://argu-machinaries-server.onrender.com/product/${id}`);
        return data;
      }
      catch (error) {
        console.log(error.message)
      }
    }
  })

  const handleQty = e => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity)
    if (quantity < product.minQuantity && quantity > product.quantity && quantity < 0) {
      setQtyError(`Minium Qty is: ${product.minQuantity} Maxium qty is ${product.quantity
        }`)
    } else {
      setQtyError('')
    }
  }



  if (isLoading) {
    return <Loading></Loading>
  }


  return (
    <div className='max-w-7xl mx-auto'>
      <div className="card max-w-2xl bg-base-100 shadow-xl mx-auto my-10">
        <figure><img className='px-6' src={product.image} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{product.name}</h2>
          <p>{product.description}</p>
          <p className='text-4xl uppercase'>Price: ${product.price}</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-red-600">Minimum Order Quanity: {product.minQuantity} </span>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantityl</span>
            </label>
            <label className="input-group">
              <span>Quantity</span>
              <input type="number" onChange={handleQty} placeholder="Quantity" className="input input-bordered" />
            </label>
          </div>
          <p>{quanityError ? <span>{quanityError}</span> : ''}</p>

          <p className='text-2xl text-green-500'>Available Qaunity: {product.quantity} Pices</p>
          <div className="flex lg:flex-row flex-col justify-between">
            <div className='lg:w-40 w-full'>
              {console.log(quantity)}
              <label
                disabled={quantity === 0 || quantity === '' || quantity < product.minQuantity || quantity > product.quantity}
                htmlFor="orderModal"
                onClick={() => setNewProduct(product)}
                className="btn btn-primary lg:w-40 w-full"
              >Order Now</label>
            </div>
          </div>
          {
            newProduct && <OrderModal
              inputquantity={quantity}
              product={newProduct}
              refetch={refetch}
              setNewProduct={setNewProduct}
            ></OrderModal>
          }
        </div>
      </div>
    </div>
  );
};

export default Purchase;