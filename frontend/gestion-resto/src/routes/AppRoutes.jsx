import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Login from '../pages/auth/Login';

import MainLayout from '../components/layout/MainLayout';
import DashboardHome from '../pages/dashboard/DashboardHome';
import CategoriesList from '../pages/categories/CategoriesList';
import OrdersList from '../pages/orders/OrdersList';
import OrderDetails from '../pages/orders/OrderDetails';
import ProductsList from '../pages/products/ProductsList';
import ProductForm from '../pages/products/ProductForm';
import TablesList from '../pages/tables/TablesList';
import StaffManagement from '../pages/staff/StaffManagement';
import GeneralSettings from '../pages/settings/GeneralSettings';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/login" element={<Login />} />
        {/* Route Principal li kay7tawi 3la MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="categories" element={<CategoriesList />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/new" element={<ProductForm />} />
          <Route path="tables" element={<TablesList />} />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="settings" element={<GeneralSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;