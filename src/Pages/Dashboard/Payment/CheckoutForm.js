import React, { useEffect, useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axiosPrivate from '../../../api/AxiosPrivate';


const CheckoutForm = ({ order }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [procesing, setProcesing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [transactionId, setTransactionId] = useState('');

  const [clientSecret, setClientSecret] = useState('');
  const { price, customer_email, customer_name, _id } = order;


  useEffect(() => {
    const postData = async () => {
      try {
        const { data } = await axiosPrivate.post(`https://argu-machinaries-server.onrender.com/create-payment-intent`, { price });
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      }
      catch (error) {
        console.log(error.message)
      }
    }
    postData()
  }, [price])



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '')
    setSuccess('')
    setProcesing(true)

    // Confirm Card Payment
    const { paymentIntent, error: intendError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customer_name,
            email: customer_email
          },
        },
      },
    );

    if (intendError) {
      setCardError(intendError?.message)
      setProcesing(false)
    } else {
      setCardError('')
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats! Your Payment is Complete.')
      // Store paymnet info in database,
      const payment = {
        order_id: _id,
        transactionId: paymentIntent.id
      }

      const dataPatch = async () => {
        try {
          const { data } = await axiosPrivate.patch(`https://argu-machinaries-server.onrender.com/order/${_id}`, payment);
          setProcesing(data)
        }
        catch (error) {
          console.log(error.message);
        }
      }
      dataPatch();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn mt-5 btn-md bg-green-600' type="submit" disabled={!stripe || !elements || success}>
          Pay
        </button>

        {
          cardError && <span className='text-lg text-red-500'>{cardError}</span>
        }
        {
          success && <div>
            <span className='text-lg text-green-500'>{success}</span>
            <p>Your Transaction Id: <span className='text-red-500'>{transactionId}</span></p>
          </div>
        }

      </form>
    </>
  );




};

export default CheckoutForm;