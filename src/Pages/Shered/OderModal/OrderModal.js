import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';
import auth from '../../../firebase.init';

const OrderModal = ({ product, setNewProduct, refetch }) => {
  const [qtyError, setQtyError] = useState('')
  const [disable, setDisable] = useState(false)
  const { name, price, minQuantity, quantity } = product;
  const [user] = useAuthState(auth)
  const handleSubmit = e => {
    e.preventDefault();
    const inputQuantity = e.target.qty.value;
    const newPrice = price * inputQuantity;
    if (inputQuantity < minQuantity) {
      setQtyError(`Minimum Quanity ${minQuantity}`)
    }
    else {
      if (inputQuantity > quantity) {
        setQtyError(`Maximum Quanity ${quantity}`)
      }
    }

    const order = {
      productName: name,
      price: newPrice,
      quantity: inputQuantity,
      customer_name: user?.displayName,
      customer_email: user?.email,
      phone: e.target.phone.value,
      address: e.target.address.value,
      status: 'pending'
    }

    try {
      const postOrder = async () => {
        const { data } = await axiosPrivate.post('https://argo-machineries.herokuapp.com/oder', order);

        if (data.success) {
          toast.success(data.message)
        } else {
          toast.error(data.message)
        }
      }
      postOrder()

      refetch()
      setNewProduct(null)
    }
    catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div>
      <input type="checkbox" id="orderModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="orderModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-secondary text-center">Order Summary</h3>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
            <input type="text" disabled value={user?.displayName || ''} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" disabled value={user?.email || ''} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='address' placeholder="Your Address" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="number" name="qty" placeholder='Quantity' className="input input-bordered input-primary w-full max-w-xs" />
            {qtyError ? <p className='text-red-500'>{qtyError}</p> : ''}
            <input type="text" disabled value={`$${price}`} className="input input-bordered input-primary w-full max-w-xs" />

            <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs text-white" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;