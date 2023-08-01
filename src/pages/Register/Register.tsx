import Spinner from "@components/Spinner";
import useAuthentication from "@hooks/useAuthentication";
import { useGetUserMutation } from "@services/api/api";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { authLoading, authError, authRegister } = useAuthentication();
  const [
    getUser, // This is the mutation trigger
    { isLoading: isLoading }, // You can use the `isLoading` flag, or do custom logic with `status`
  ] = useGetUserMutation();

  // const submitForm = (data: any) => authRegister(data);
  const submitForm = (data: any) => getUser({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error</div>;
  // }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="logo mx-auto h-10 w-auto"
            src="logo.png"
            alt="EsperaApp"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crear Cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            onSubmit={handleSubmit(submitForm)}
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  type="text"
                  autoComplete="firstName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
                  {...register("firstName")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                {authLoading ? <Spinner /> : "Crear Cuenta"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tiene una cuenta?
            <a
              href="/login"
              className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
            >
              {" "}
              Ingresar
              <div>{JSON.stringify("data")}</div>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
