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
      localStorage.setItem('idToken', token);
      dispatch(setAuthToken(token));
      navigate('/');
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
      const user = await auth.register(userData);
      if (user) navigate('/confirm-code');
    } catch (error: any) {
      const err = JSON.parse(error);
      setAuthError(err.name);
      setAuthLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setAuthLoading(true);
      await auth.resetPassword(email);
      setAuthLoading(false);
    } catch (error) {
      setAuthError('An error occurred while resetting password');
      setAuthLoading(false);
    }
  };

  const confirmPassword = async (user_name: string, code: string, password: string) => {
    try {
      setAuthLoading(true);
      const message = await auth.confirmPassword(user_name, code, password);
      console.log(message);
      setAuthLoading(false);
    } catch (error) {
      console.log('found error');
      setAuthError('An error occurred while confirming password');
      setAuthLoading(false);
    }
  };

  // const resendConfirmationCode = async (email: string) => {
  //   try {
  //     setAuthLoading(true);
  //     await auth.resendConfirmationCode(email);
  //     setAuthLoading(false);
  //   } catch (error) {
  //     setAuthError('An error occurred while registering the user');
  //     setAuthLoading(false);
  //   }
  // };

  const confirmRegistration = async (user_name: string, code: string) => {
    try {
      setAuthLoading(true);
      await auth.confirmRegistration(user_name, code);
      setAuthLoading(false);
    } catch (error) {
      setAuthError('An error occurred while registering the user');
      navigate('/error');
      setAuthLoading(false);
    }
  };

  return {
    authLoading,
    authError,
    authLogin,
    authLogout,
    authRegister,
    confirmRegistration,
    // resendConfirmationCode,
    resetPassword,
    confirmPassword
  };
};

export default useAuthentication;
