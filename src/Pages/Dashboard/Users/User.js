import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';

const User = ({ user, refetch, setUserDelete, index }) => {
  const { email } = user;

  const makeAdmin = () => {
    const updatRole = async () => {
      const { data } = await axiosPrivate.put(`https://argo-machineries.herokuapp.comuser/admin/${email}`);
      if (data.modifiedCount > 0) {
        toast.success('Successfully Make Admin')
        refetch()
      }
    };
    updatRole()
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {
          user.role !== 'admin' && <button className='btn btn-primary btn-sm' onClick={makeAdmin}>Make Admin</button>
        }

      </td>
      <td>
        <label htmlFor="delete-user" onClick={() => setUserDelete(user)} className="btn btn-sm bg-red-600">Delete</label>
      </td>
    </tr>
  );
};

export default User;