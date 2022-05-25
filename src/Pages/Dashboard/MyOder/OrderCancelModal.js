import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';

const OrderCancelModal = ({ setOrderDelete, refetch, orderDelete }) => {
  const { _id } = orderDelete;

  const handDelete = () => {
    const deleteProd = async () => {
      const response = await axiosPrivate.delete(`hhttps://argo-machineries.herokuapp.com/order/${_id}`);
      if (response.status === 200) {
        toast.success(`Order: ${_id} is Cancel!`)
        setOrderDelete(null)
        refetch()
      }
    }
    deleteProd()
  }
  return (
    <div>
      <input type="checkbox" id="delete-user" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">Are you want to Cancel?</h3>
          <div className="modal-action">
            <button onClick={handDelete} className="btn btn-xs bg-red-600" >Confirm</button>
            <label htmlFor="delete-user" className="btn btn-xs">Cancel!</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default OrderCancelModal;