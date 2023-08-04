import { useState } from 'react';
import { useAppDispatch } from '@hooks/index';
import { setAuthToken } from '@store/features/userSlice';
import { useNavigate } from 'react-router-dom';

import auth from '@services/authentication';

interface userData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useAuthentication = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const authLogin = async (email: string, password: string): Promise<boolean> => {
    try {
      setAuthLoading(true);
      const token = await auth.login(email, password);
      dispatch(setAuthToken(token));
      navigate('/');
      //  setAuthLoading(false);
      return true;
    } catch (error: any) {
      const err = JSON.parse(error);
      setAuthError(err.name);
      setAuthLoading(false);
      return false;
    }
  };

  const authLogout = async () => {
    try {
      setAuthLoading(true);
      await auth.logout();
      setAuthLoading(false);
    } catch (error) {
      setAuthError('An error occurred while logging out');
      setAuthLoading(false);
    }
  };

  const authRegister = async (userData: userData) => {
    try {
      setAuthLoading(true);
      await auth.register(userData);
      navigate('/confirm-code?email=' + userData.email);
      setAuthLoading(false);
    } catch (error) {
      setAuthError('An error occurred while registering the user');
      setAuthLoading(false);
    }
  };

  const confirmRegistration = async (email: string, code: string) => {
    try {
      setAuthLoading(true);
      await auth.confirmRegistration(email, code);
      navigate('/');
      setAuthLoading(false);
    } catch (error) {
      setAuthError('An error occurred while registering the user');
      setAuthLoading(false);
    }
  };

  return { authLoading, authError, authLogin, authLogout, authRegister, confirmRegistration };
};

export default useAuthentication;
