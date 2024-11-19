// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactElement } from 'react';
import Loading from './Loading';

// Типизация пропсов для PrivateRoute
interface PrivateRouteProps {
  children: ReactElement;
}

const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
