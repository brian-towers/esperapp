import { signUp } from "../../services/cognito";

const Login = () => {
  const handleSignInWithGoogle = async () => {
    // Code to handle sign-in with Google
    // You can use the `pirulo` function or implement the sign-in logic here
    // Example:
    await signUp("brian@hola.com", "1235465546");
  };

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex text-sm mt-1 justify-end">
                <a
                  href="#"
                  className="font-semibold text-orange-600 hover:text-orange-500 "
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full text-white bg-orange-600 hover:bg-orange-500 rounded-md justify-center font-semibold px-3 py-1.5 text-sm leading-6 shadow-md"
              >
                <div>Sign in</div>
              </button>
            </div>
          </form>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
            <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 ">
              or
            </span>
          </div>
          <div className="px-6 sm:px-0 max-w-sm">
            <button
              onClick={handleSignInWithGoogle}
              type="button"
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
              Sign in with Google<div></div>
            </button>
          </div>
          <p className="flex mt-10 justify-center items-center text-sm text-gray-500">
            <div> Not a member?</div>
            <a
              href="#"
              className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
