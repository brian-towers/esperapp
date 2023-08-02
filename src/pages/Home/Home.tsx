import { InitialConfig } from '@pages/index';
import { useGetUserMutation } from '@services/api/api';

const Register = () => {
  const [getUser, { isLoading: isLoading }] = useGetUserMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error</div>;
  // }

  return <InitialConfig />;
};

export default Register;
