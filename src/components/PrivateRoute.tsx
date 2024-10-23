// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactElement } from 'react';

// Типизация пропсов для PrivateRoute
interface PrivateRouteProps {
  children: ReactElement;
}

const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  const { isAuthenticated } = useAuth();

  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!isAuthenticated) {
    return <Navigate to="/sign-up" />;
  }

  // Если авторизован, отображаем дочерние элементы (защищённый маршрут)
  return children;
};

export default PrivateRoute;
