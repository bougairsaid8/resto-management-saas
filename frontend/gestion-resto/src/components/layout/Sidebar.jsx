import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  // قائمة الروابط باش نسهلو الكود ومايبقاش كيتعاود
  const menuItems = [
    { 
      name: 'Overview', 
      path: '/admin', 
      // أيقونة Dashboard
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg> 
    },
    { 
      name: 'Categories', 
      path: '/admin/categories', 
      // أيقونة الأقسام
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> 
    },
    { 
      name: 'Products', 
      path: '/admin/products', 
      // أيقونة المنتجات
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> 
    },
    { 
      name: 'Tables', 
      path: '/admin/tables', 
      // أيقونة الطاولات (Table)
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1" ry="1"></rect><line x1="12" y1="8" x2="12" y2="21"></line><line x1="8" y1="21" x2="16" y2="21"></line><line x1="5" y1="8" x2="5" y2="3"></line><line x1="19" y1="8" x2="19" y2="3"></line></svg> 
    },
    { 
      name: 'Staff', 
      path: '/admin/staff', 
      // أيقونة الموظفين
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 
    },
    { 
      name: 'Orders', 
      path: '/admin/orders', 
      // أيقونة الطلبات
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> 
    },
  ];

  return (
    // الحاوية ديال Sidebar (عرض ثابت، شادة الطول كامل، وفيها border في اليمين)
    <aside className="w-64 h-screen bg-surface border-r border-border flex flex-col font-sans shrink-0">
      
      {/* 1. اللوجو (Logo Area) */}
      <div className="h-20 flex items-center justify-between px-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-surface font-bold text-xl shadow-sm">
            R
          </div>
          <span className="text-xl font-bold text-text tracking-tight">RestoAdmin</span>
        </div>
        
        {/* ديك الأيقونة الحمراء الصغيرة اللي في الصورة حدا اللوجو */}
        <button className="w-6 h-6 rounded bg-primary text-surface flex items-center justify-center hover:bg-primary-hover transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>

      {/* 2. قائمة الروابط (Navigation Menu) */}
      <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            // NavLink كتعطينا (isActive) باش نحددو الستيل ديال العنصر واش مكليكي عليه أو لا
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                isActive
                  ? 'bg-primary/10 text-primary' // حالة نشطة: خلفية حمراء شفافة (10%) ولون أحمر
                  : 'text-text-secondary hover:bg-background hover:text-text' // حالة غير نشطة
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* الخط الأحمر اللي كيبان في الجنب اليسار ملي كيكون العنصر نشط (بحال الصورة) */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-md"></span>
                )}
                
                {/* الأيقونة */}
                <span className={`${isActive ? 'text-primary' : 'text-text-secondary'}`}>
                  {item.icon}
                </span>
                
                {/* اسم الرابط */}
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 3. الجزء السفلي (مثلا زر تسجيل الخروج - اختياري) */}
      <div className="p-4 mt-auto border-t border-border">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-danger hover:bg-danger/10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          Log Out
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;