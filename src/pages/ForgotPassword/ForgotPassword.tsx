import Spinner from '@components/Spinner';
import { useAuthentication } from '@hooks/index';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface Exceptions {
  [key: string]: string; // Use an index signature to allow any string key
}

const exceptions: Exceptions = {
  NotAuthorizedException: 'email y/o contraseña incorrectos.'
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const { authLoading, authError, resetPassword } = useAuthentication();

  const submitForm = (data: any) => {
    console.log(data);
    resetPassword(data.email);
  };

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="logo mx-auto h-10 w-auto" src="logo.png" alt="EsperaApp" />
          <h2 className="my-4 text-center text-2xl font-quicksand font-bold leading-9 tracking-tight text-gray-900">
            Recuperar contraseña
          </h2>
          <p className="text-center">Ingresá tu email y te enviaremos un link para que recuperes tu contraseña</p>
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
              <button
                type="submit"
                className="flex w-full text-white bg-orange-600 hover:bg-orange-500 rounded-md justify-center font-semibold px-3 py-1.5 text-sm leading-6 shadow-md"
              >
                {authLoading ? <Spinner /> : 'Enviar'}
              </button>
            </div>
          </form>
          <div className="flex mt-10 justify-center items-center text-sm text-gray-500">
            <p onClick={() => handleNavigation('/login')} className="leading-6 cursor-pointer">
              <span className="font-semibold text-orange-600 hover:text-orange-500">{'Volver'}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
