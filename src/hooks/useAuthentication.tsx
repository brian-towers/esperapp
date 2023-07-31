// Custom hook: useAuthentication.js
import { useState } from "react";
import { useAppDispatch } from "@hooks/index";
import { setAuthToken } from "@store/features/userSlice";
import auth from "@services/authentication";

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const login = async (credentials: {
    username: string;
    password: string;
  }): Promise<boolean> => {
    try {
      setAuthLoading(true);
      const token = await auth.login(credentials);
      dispatch(setAuthToken(token));
      setAuthLoading(false);
      return true;
    } catch (error: any) {
      setAuthError(error.message as string);
      setAuthLoading(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      setAuthLoading(true);
      await auth.logout();
      setAuthLoading(false);
    } catch (error) {
      setAuthError("An error occurred while logging out");
      setAuthLoading(false);
    }
  };

  const register = async (userData: { email: string; password: string }) => {
    try {
      setAuthLoading(true);
      await auth.register(userData);
      setAuthLoading(false);
    } catch (error) {
      setAuthError("An error occurred while registering the user");
      setAuthLoading(false);
    }
  };

  return { authLoading, authError, login, logout, register };
};

export default useAuthentication;
