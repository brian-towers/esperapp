import { Route, Routes } from 'react-router-dom';
import { Base, Dashboard } from '@layouts/index';
import { ConfirmAccount, Home, InitialConfig, Login, Register } from '@pages/index';
import PrivateRoute from '@helpers/privateRoute';
import useAppSelector from '@hooks/useAppSelector';
import ForgotPassword from '@pages/ForgotPassword/ForgotPassword';
import ResetPassword from '@pages/ResetPassword/ResetPassword';

const HOME_ROUTE = '/';
const LOGIN_ROUTE = '/login';
const REGISTER_ROUTE = '/register';
const CONFIRM_CODE = '/confirm-code';
const CREATE_RESTAURANT = '/create-restaurant';
const FORGOT_PASSWORD = '/forgot-password';
const RESET_PASSWORD = '/reset-password';

const AppRoutes = (): JSX.Element => {
  const isAuthenticated = useAppSelector((state) => state.user.authToken);

  // Esperar a que el valor de isAuthenticated se actualice antes de renderizar las rutas
  // if (isAuthenticated === undefined) return <Loader />;

  return (
    <Routes>
      <Route
        path={CREATE_RESTAURANT}
        element={
          <Base>
            <InitialConfig />
          </Base>
        }
      />
      {/* 
      Unguarded Routes 
      <Route path={'post-authentication'} element={<PostAuthentication />} /> 
       */}

      {/* Non-Authenticated Routes: accessible only if user in not authenticated */}
      <Route element={<PrivateRoute isAuthenticated={!isAuthenticated} redirectRoute={HOME_ROUTE} />}>
        {/* Login Route */}
        <Route
          path={LOGIN_ROUTE}
          element={
            <Base>
              <Login />
            </Base>
          }
        />
        {/* Register Route */}
        <Route
          path={REGISTER_ROUTE}
          element={
            <Base>
              <Register />
            </Base>
          }
        />
        {/* Forgot Password */}
        <Route
          path={FORGOT_PASSWORD}
          element={
            <Base>
              <ForgotPassword />
            </Base>
          }
        />
        {/* Forgot Password */}
        <Route
          path={RESET_PASSWORD}
          element={
            <Base>
              <ResetPassword />
            </Base>
          }
        />
        {/* ConfirmAccount Route */}
        <Route
          path={CONFIRM_CODE}
          element={
            <Base>
              <ConfirmAccount />
            </Base>
          }
        />
      </Route>
      {/* Authenticated Routes */}
      <Route element={<PrivateRoute isAuthenticated={!!isAuthenticated} redirectRoute={LOGIN_ROUTE} />}>
        <Route
          path={HOME_ROUTE}
          element={
            <Dashboard>
              <Home />
            </Dashboard>
          }
        />
      </Route>

      {/* Not found Route */}
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  );
};

export default AppRoutes;
