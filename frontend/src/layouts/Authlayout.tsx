import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthLayout: FC = () => {
  // Check if user is authenticated
  const isAuthenticated = () => {
    return localStorage.getItem('accessToken') !== null || localStorage.getItem('isGuest') === 'true';
  };
  const location = useLocation();

  // If authenticated, redirect to main app
  if (isAuthenticated()) {
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