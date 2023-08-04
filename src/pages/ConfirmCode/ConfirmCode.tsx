import useAuthentication from '@hooks/useAuthentication';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

const ConfirmCode = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const email = searchParams.get('email') || '';
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const { authLoading, authError, confirmRegistration } = useAuthentication();

  const submitForm = (data: any) => {
    console.log(data);
    confirmRegistration(email, data.code);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="logo mx-auto h-10 w-auto" src="logo.png" alt="EsperaApp" />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Confirmar Código
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Código
              </label>
              <div className="mt-2">
                <input
                  id="code"
                  type="code"
                  autoComplete="code"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
                  {...register('code')}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full text-white bg-orange-600 hover:bg-orange-500 rounded-md justify-center font-semibold px-3 py-1.5 text-sm leading-6 shadow-md"
              >
                <div>Confirmar</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmCode;
