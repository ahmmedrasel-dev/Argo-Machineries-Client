import { useEffect, useState } from 'react';
import axiosPrivate from '../api/AxiosPrivate';

const useToken = user => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      const updateUser = async () => {
        const { data } = await axiosPrivate.put(`https://argo-machineries.herokuapp.com/user/${email}`)
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken)
        setToken(accessToken)
      }
      updateUser()
    }
  }, [user])

  return [token]
};

export default useToken;