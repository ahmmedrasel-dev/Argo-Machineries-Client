import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/AxiosPrivate';
import auth from '../../firebase.init';
import SigngleProduct from '../Home/SigngleProduct';
import Loading from '../Shered/Loading/Loading';

const AllMachinaries = () => {
  const navigate = useNavigate()
  const { data: products, isLoading, refetch } = useQuery('all-products',
    async () => {
      try {
        const { data } = await axiosPrivate.get(`https://argo-machineries.herokuapp.com/all-products`);
        return data
      }
      catch (error) {
        if (error) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
      }

    })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='max-w-7xl mx-auto my-12'>
      <div className='grid grid-cols-1 gap-5'>
        {
          products.map((product) => <SigngleProduct
            key={product._id}
            product={product}
            refetch={refetch}
          >
          </SigngleProduct>)
        }
      </div>
    </div>
  );
};

export default AllMachinaries;