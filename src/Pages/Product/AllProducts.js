import React, { useState } from 'react';
import axiosPrivate from '../../api/AxiosPrivate';
import Loading from '../Shered/Loading/Loading';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import DeletConfirmModel from '../Shered/Delete/DeleteConfirm';
import { useQuery } from '@tanstack/react-query';

const AllProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const navigate = useNavigate()
  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      try {
        const { data } = await axiosPrivate.get(`https://argu-machinaries-server.onrender.com/all-products`);
        return data
      }
      catch (error) {
        if (error) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
      }
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Images</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quanity</th>
            <th>Min Quantity</th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => <tr key={product._id}>
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="w-10 rounded-sm">
                    <img src={product.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.minQuantity}</td>
              <td>
                <label htmlFor="delete-modal" onClick={() => setDeleteProduct(product)} className="btn btn-sm bg-red-600">Delete</label>
              </td>
            </tr>)
          }

        </tbody>
      </table>

      {deleteProduct && <DeletConfirmModel
        deleteProduct={deleteProduct}
        refetch={refetch}
        setDeleteProduct={setDeleteProduct}
      ></DeletConfirmModel>}

    </div>
  );
};

export default AllProducts;