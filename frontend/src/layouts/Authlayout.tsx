import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { authService } from '../services/authService';

const AuthLayout: FC = () => {
  const location = useLocation();

  // If authenticated or guest, redirect to main app
  if (authService.isAuthenticated()) {
    return <Navigate to="/modules" state={{ from: location }} replace />;
  }

  // Render auth pages (login, forgot password, create account)
  return (
    <div className="min-h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;