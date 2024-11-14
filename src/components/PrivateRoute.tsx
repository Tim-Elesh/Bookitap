// src/components/PrivateRoute.tsx
import { Navigate, CircularProgress } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactElement } from 'react';

// Типизация пропсов для PrivateRoute
interface PrivateRouteProps {
  children: ReactElement;
}

const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <CircularProgress />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
