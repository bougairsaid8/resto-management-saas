import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// --- Import pages ---
import Login from '../pages/auth/Login';
import DashboardHome from '../pages/dashboard/DashboardHome';
import OrdersList from '../pages/orders/OrdersList';
import OrderDetails from '../pages/orders/OrderDetails';
import ProductsList from '../pages/products/ProductsList';
import CategoriesList from '../pages/categories/CategoriesList';
import TablesList from '../pages/tables/TablesList';
import StaffManagement from '../pages/staff/StaffManagement';
import GeneralSettings from '../pages/settings/GeneralSettings';

// Component for protected routes
const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/orders"  />;
  }

  return <Outlet />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        
            {/* Manager & Waiter */}
            <Route element={<ProtectedRoute allowedRoles={['Manager','Waiter']} />}>

                <Route path="/dashboard" element={<DashboardHome />} />
                <Route path="/orders" element={<OrdersList />} />
                <Route path="/orders/:id" element={<OrderDetails />} />

            </Route>
            {/* Manager Only */}
            <Route element={<ProtectedRoute allowedRoles={['Manager']} />}>
            <Route path="/products" element={<ProductsList />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/tables" element={<TablesList />} />
            <Route path="/staff" element={<StaffManagement />} />
            <Route path="/settings" element={<GeneralSettings />} />
            </Route>

        {/* Not Found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;