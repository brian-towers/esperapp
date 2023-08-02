import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  /**
   * Permission check for route
   * @default false
   */
  isAuthenticated?: boolean;
  /**
   * Route to be redirected to
   * @default '/pre-authentication'
   */
  redirectRoute?: string;
}

/**
 * Component for guarding restricted routes
 *
 * @example Default usage
 * ```ts
 * <PrivateRoute
 *	 isRouteAccessible={true}
 * />
 * ```
 *
 * @example Usage with custom redirected route
 * ```ts
 * <PrivateRoute
 *	 isRouteAccessible={false}
 *	 redirectRoute={'/login'}
 * />
 * ```
 */
const PrivateRoute = ({
  isAuthenticated = false,
  redirectRoute = '/pre-authentication'
}: PrivateRouteProps): JSX.Element => (isAuthenticated ? <Outlet /> : <Navigate to={redirectRoute} replace />);

export default PrivateRoute;
