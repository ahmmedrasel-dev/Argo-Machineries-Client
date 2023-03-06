import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';

const UserDelete = ({ userDelete, refetch, setUserDelete }) => {
  const { _id, name } = userDelete;

  const handDelete = () => {
    const deleteProd = async () => {
      const response = await axiosPrivate.delete(`https://argu-machinaries-server.onrender.com/user/${_id}`);
      if (response.status === 200) {
        toast.success(`User: ${name} is Deleted!`)
        setUserDelete(null)
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
          <h3 className="font-bold text-lg text-red-500">Are you want to delete { }!</h3>
          <div className="modal-action">
            <button onClick={handDelete} className="btn btn-xs bg-red-600" >Delete</button>
            <label htmlFor="delete-user" className="btn btn-xs">Cancel!</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default UserDelete;