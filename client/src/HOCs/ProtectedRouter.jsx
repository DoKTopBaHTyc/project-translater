import { Navigate, Outlet } from 'react-router';

export default function ProtectedRouter({ children, isAllowed, redirectTo = '/' }) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }
  return children || <Outlet />;
}
