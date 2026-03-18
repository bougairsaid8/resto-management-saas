import React from 'react';

const Topbar = () => {
  return (
    // الحاوية ديال الشريط العلوي: ارتفاع 80px، خلفية بيضاء، وخط رمادي لتحت
    <header className="h-20 bg-surface border-b border-border flex items-center justify-between px-8 font-sans shrink-0">
      
      {/* 1. قسم البحث (Search Bar) */}
      <div className="flex-1 max-w-md">
        <div className="relative flex items-center w-full h-10 rounded-lg bg-background border border-border overflow-hidden focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all">
          <div className="grid place-items-center h-full w-12 text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search order, menu or etc..."
            className="peer h-full w-full outline-none text-sm text-text bg-transparent placeholder-text-secondary pr-2"
          />
        </div>
      </div>

      {/* 2. قسم الإشعارات والبروفايل (Right Section) */}
      <div className="flex items-center gap-6">
        
        {/* الأيقونات (إعدادات وإشعارات) */}
        <div className="flex items-center gap-4">
          {/* زر الإعدادات */}
          <button className="text-text-secondary hover:text-primary transition-colors relative p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
          
          {/* زر الإشعارات */}
          <button className="text-text-secondary hover:text-primary transition-colors relative p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            {/* النقطة الحمراء ديال الإشعارات */}
            <span className="absolute top-1 right-1.5 w-2 h-2 bg-danger rounded-full border border-surface"></span>
          </button>
        </div>

        {/* خط فاصل رمادي */}
        <div className="h-8 w-px bg-border"></div>

        {/* البروفايل */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-background p-1.5 pr-2 rounded-lg transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">
            SB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-text leading-tight">Said Bougair</span>
            <span className="text-xs text-text-secondary font-medium">Manager</span>
          </div>
          <div className="text-text-secondary ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Topbar;