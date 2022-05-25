
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/AxiosPrivate';
import auth from '../../../firebase.init';
import Loading from '../../Shered/Loading/Loading';
import User from './User';
import UserDelete from './UserDelete';

const Users = () => {
  const navigate = useNavigate()
  const [userDelete, setUserDelete] = useState(null)
  const { data: users, isLoading, refetch } = useQuery('users',
    async () => {
      try {
        const { data } = await axiosPrivate.get(`https://argo-machineries.herokuapp.com/users`);
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
  )

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>User Email</th>
            <th>Make Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => <User
              key={user._id}
              index={index}
              user={user}
              refetch={refetch}
              setUserDelete={setUserDelete}
            ></User>)
          }

        </tbody>
      </table>

      {userDelete && <UserDelete
        userDelete={userDelete}
        refetch={refetch}
        setUserDelete={setUserDelete}
      ></UserDelete>}

    </div>
  );
};

export default Users;