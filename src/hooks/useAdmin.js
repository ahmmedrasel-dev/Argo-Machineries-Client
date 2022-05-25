import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../api/AxiosPrivate';

const useAdmin = user => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const email = user?.email;

  useEffect(() => {
    if (email) {
      try {
        const getUser = async () => {
          const { data } = await axiosPrivate.get(`https://argo-machineries.herokuapp.com/admin/${email}`);
          setAdmin(data.admin)
          setAdminLoading(false)
        }
        getUser()
      }
      catch (error) {
        toast.error(error.message)
      }
    }
  }, [user, email])
  return [admin, adminLoading]
};

export default useAdmin;