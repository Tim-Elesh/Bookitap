import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactElement } from 'react';
import Loading from './Loading';
import { ADMIN_CREDENTIALS } from '../data/admin';

interface AdminRouteProps {
  children: ReactElement;
}

const AdminRoute = ({ children }: AdminRouteProps): ReactElement => {
  const { isAuthenticated, loading, currentUser } = useAuth();

  if (loading) {
    return <Loading />;
  }

  const isAdmin = currentUser?.email === ADMIN_CREDENTIALS.email;

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AdminRoute;