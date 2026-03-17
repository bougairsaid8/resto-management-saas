import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout({ children }) {  
    return (
    <div className="flex h-screen bg-background">
        {/* 1. الشريط الجانبي (Sidebar) */}
        <Sidebar />
        {/* 2. المحتوى الرئيسي (Main Content) */}
        <main className="flex-1 p-6 overflow-y-auto">
            <Topbar />
            {children}
        </main>
    </div>
    );
}