import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/AxiosPrivate';
import auth from '../../../firebase.init';
import Loading from '../../Shered/Loading/Loading';
import OrderCancelModal from './OrderCancelModal';

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const navigate = useNavigate()
  const [orderDelete, setOrderDelete] = useState(null)
  const { data: products, isLoading, refetch } = useQuery('orders',
    async () => {
      try {
        const { data } = await axiosPrivate.get(`https://argo-machineries.herokuapp.com/order/${email}`);
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
              <td><button className='btn btn-success btn-sm'>Pay</button></td>
              <td>
                <label htmlFor="delete-user" onClick={() => setOrderDelete(product)} className="btn btn-sm bg-red-600">Cancel</label>
              </td>
            </tr>)
          }
        </tbody>
      </table>

      {orderDelete && <OrderCancelModal
        orderDelete={orderDelete}
        refetch={refetch}
        setOrderDelete={setOrderDelete}
      ></OrderCancelModal>}

    </div>
  );
};

export default MyOrder;