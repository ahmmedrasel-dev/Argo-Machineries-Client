import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';
import Loading from '../../Shered/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_F7Vho272jVFTDHQwm6PSx4vQ00zuVEmORb');
const Payment = () => {
  const { orderId } = useParams();

  const { data: order, isLoading } = useQuery('order', async () => {
    try {
      const { data } = await axiosPrivate.get(`https://argo-machineries.herokuapp.com/paymentOrder/${orderId}`);
      return data;
    }
    catch (error) {
      toast.error(error.message);
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="artboard artboard-horizontal max-w-5xl mx-auto">
      <h1 className='text-center text-5xl'>Payment</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12'>
        <div className="card bg-neutral text-white">
          <div className="card-body">
            <h1 className='text-2xl'>Shiping Informtion</h1>
            <h2 className="">Product Name: {order.productName}</h2>
            <h2 className="">Quanity: {order.quantity}</h2>
            <h2 className="">Price: {order.price}</h2>
            <h2 className="">Full Name: {order.customer_name}</h2>
            <h2 className="">Email Addree: {order.customer_email}</h2>
            <h2 className="">Phone Number: {order.phone}</h2>
            <h2 className="">Shippign Address {order.address}</h2>

          </div>
        </div>

        <div className="card bg-base-200 text-primary-content">
          <div className="card-body mt-24">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;