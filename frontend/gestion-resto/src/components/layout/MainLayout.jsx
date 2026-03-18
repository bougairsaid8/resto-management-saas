import React from 'react';
import { Outlet } from 'react-router-dom';

// استيراد المكونات اللي صاوبنا
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = () => {
  return (
    // الحاوية الرئيسية: كتاخد الشاشة كاملة وماكتخليش الصفحة كاملة تسكرولا (overflow-hidden)
    <div className="flex h-screen w-full bg-background overflow-hidden font-sans">
      
      {/* 1. القائمة الجانبية (ثابتة على اليسار) */}
      <Sidebar />

      {/* 2. القسم الأيمن (كياخد المساحة اللي بقات بفضل flex-1) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* الشريط العلوي (ثابت الفوق) */}
        <Topbar />

        {/* 3. مساحة المحتوى الرئيسية (Main Content) */}
        {/* هاد البلاصة هي الوحيدة اللي كتسكرولا يلا كان المحتوى طويل (overflow-y-auto) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          
          {/* Outlet هو بحال شي "نافذة".
            React Router كيشوف أشمن رابط حنا فيه (مثلا /admin/orders)،
            وكيجيب ديك الصفحة وكيحطها بالضبط هنا بلاصة هاد Outlet.
          */}
          <Outlet />
          
        </main>

      </div>
    </div>
  );
};

export default MainLayout;