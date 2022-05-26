import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';
import auth from '../../../firebase.init';
import Loading from '../../Shered/Loading/Loading';

const ManageOrders = () => {
  const navigate = useNavigate()
  const { data: products, isLoading } = useQuery('orders',
    async () => {
      try {
        const { data } = await axiosPrivate.get(`https://argo-machineries.herokuapp.com/orders`);
        return data;
      }
      catch (error) {
        if (error) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
      }
    }
  )

  const handleShip = id => {
    const updateStatus = async () => {
      try {
        const { data } = await axiosPrivate.put(`https://argo-machineries.herokuapp.com/orderStatus/${id}`);
        if (data.modifiedCount > 0) {
          toast.success('Oder Shiped!')
        }
      }
      catch (error) {
        toast.error(error.message)
      }
    }
    updateStatus()
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="overflow-x-auto">
      <h2 className='text-2xl mb-3'>Total Order: {products.length}</h2>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Quanity</th>
            <th>Price</th>
            <th>Order</th>
            <th>Transaction Id</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => <tr key={product._id}>
              <th>{index + 1}</th>

              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                {product.status === 'pending' && <p className='font-bold text-red-600'>{product.status}</p>}
                {product.status === 'success' && <p className='font-bold text-green-600'>{product.status}</p>}
              </td>

              <td>{product.paid ? product.transactionId : 'Payment Not Complete'}</td>
              <td>{!product.paid ? <span className='text-red-500'>Unpaid</span> : <span className='text-green-500 font-bold'>Paid</span>}</td>
              <td>
                {product.status === 'pending' ? <button onClick={() => handleShip(product.transactionId)} className='bg-red-600 btn btn-sm'>Ship</button> : <button className='bg-green-600 btn btn-sm'>Success</button>}
              </td>
            </tr>)
          }
        </tbody>
      </table>

    </div>
  );
}

export default ManageOrders;