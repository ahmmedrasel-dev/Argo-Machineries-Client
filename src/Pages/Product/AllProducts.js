import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/AxiosPrivate';
import Loading from '../Shered/Loading/Loading';

const AllProducts = () => {

  const { data: products, isLoading } = useQuery('all-products',
    async () => {
      try {
        const { data } = await axiosPrivate.get(`http://localhost:5000/all-products`);
        return data
      }
      catch (error) {
        console.log(error.message)
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
              <td><button className="btn btn-sm bg-red-600">Delete</button></td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;