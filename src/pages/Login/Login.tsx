import Spinner from '@components/Spinner';
import { useAuthentication } from '@hooks/index';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface Exceptions {
  [key: string]: string; // Use an index signature to allow any string key
}

const exceptions: Exceptions = {
  NotAuthorizedException: 'email y/o contraseña incorrectos.'
};

const Login = () => {
  const { authLoading, authError, authLogin, confirmRegistration } = useAuthentication();
  const [searchParams, _setSearchParams] = useSearchParams();
  const [confirmationCode, setConfirmationCode] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const code = searchParams.get('confirmation_code');
    const user_name = searchParams.get('user_name');
    if (code && user_name) {
      confirmRegistration(user_name, code);
      setConfirmationCode(true);
    }
  }, []);

  const submitForm = (data: any) => {
    console.log(data);
    authLogin(data.email, data.password);
  };

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="logo mx-auto h-10 w-auto" src="logo.png" alt="EsperaApp" />
          {confirmationCode ? (
            <div className="flex flex-col">
              <h2 className="mt-2 text-center text-2xl font-quicksand font-bold leading-9 tracking-tight text-gray-900">
                ¡Ya confirmaste tu cuenta!
              </h2>
              <p className="mt-2 text-center text-xl font-quicksand font-bold leading-9 tracking-tight text-gray-900">
                Ingrese a su cuenta
              </p>
            </div>
          ) : (
            <h2 className="mt-4 text-center text-2xl font-quicksand font-bold leading-9 tracking-tight text-gray-900">
              Ingrese a su cuenta
            </h2>
          )}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center w-full text-red-600 font-medium">
            {authError && exceptions[authError]}
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  disabled={authLoading}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
                  {...register('email', { required: true, maxLength: 40 })}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="password"
                  disabled={authLoading}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
                  {...register('password', { required: true, maxLength: 20 })}
                />
              </div>
              <div className="flex text-sm mt-1 justify-end">
                <p
                  onClick={() => handleNavigation('/forgot-password')}
                  className="leading-6 cursor-pointer font-semibold text-orange-600 hover:text-orange-500"
                >
                  ¿Olvidó su contraseña?
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full text-white bg-orange-600 hover:bg-orange-500 rounded-md justify-center font-semibold px-3 py-1.5 text-sm leading-6 shadow-md"
              >
                {authLoading ? <Spinner /> : 'Ingresar'}
              </button>
            </div>
          </form>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
            <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 ">o</span>
          </div>
          <div className="px-6 sm:px-0 max-w-sm">
            <button
              type="submit"
              disabled={authLoading}
              className="flex w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 rounded-md justify-between items-center font-semibold px-3 py-1.5 text-sm leading-6 shadow-md"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Ingresar con Google<div></div>
            </button>
          </div>
          <div className="flex mt-10 justify-center items-center text-sm text-gray-500">
            <p onClick={() => handleNavigation('/register')} className="leading-6 cursor-pointer">
              <span className="font-normal text-gray-700">{'¿No tiene una cuenta?'}</span>
              <span className="font-semibold text-orange-600 hover:text-orange-500">{' Registrase'}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
