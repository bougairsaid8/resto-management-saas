import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../../redux/slices/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // كنجيبو حالة التحميل والأخطاء من Redux
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. كنبداو عملية تسجيل الدخول (باش يبان أنيميشن التحميل في الزر)
    dispatch(loginStart());

    // 2. محاكاة للاتصال بالسيرفر (API Call)
    // من بعد غتعوض هادشي بـ axios.post('/api/login', {email, password})
    setTimeout(() => {
      if (email === 'admin@restaurant.com' && password === '12345678') {
        // حالة النجاح
        const fakeResponse = {
          user: { id: 1, name: 'سعيد', email: 'admin@restaurant.com', role: 'Manager' },
          token: 'fake-jwt-token-12345'
        };
        
        dispatch(loginSuccess(fakeResponse));
        // توجيه المستخدم للوحة التحكم
        navigate('/dashboard'); 
      } else {
        // حالة الفشل
        dispatch(loginFailure('البريد الإلكتروني أو كلمة المرور غير صحيحة.'));
      }
    }, 1500); // تعطلنا ثانية ونص باش يبان تأثير التحميل
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center items-center relative overflow-hidden font-sans">
      
      {/* تأثيرات الخلفية (Grid Pattern) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

      {/* الشعار */}
      <div className="mb-8 z-10 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#9E090F] flex items-center justify-center text-white font-bold text-xl shadow-sm">
          R
        </div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">RestoAdmin</span>
      </div>

      {/* بطاقة تسجيل الدخول */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 z-10 p-8 sm:p-10 relative">
        
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">مرحباً بعودتك</h2>
          <p className="text-sm text-gray-500">قم بتسجيل الدخول لإدارة عمليات المطعم.</p>
        </div>

        {/* عرض رسالة الخطأ يلا كانت */}
        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* حقل البريد الإلكتروني */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@restaurant.com"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9E090F]/20 focus:border-[#9E090F] transition-all duration-200"
              required
            />
          </div>

          {/* حقل كلمة المرور */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                كلمة المرور
              </label>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9E090F]/20 focus:border-[#9E090F] transition-all duration-200"
              required
            />
          </div>

          {/* زر الدخول مع حالة التحميل */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-medium py-2.5 rounded-lg text-sm transition-all duration-200 mt-2 shadow-sm flex justify-center items-center gap-2 ${
              isLoading ? 'bg-[#7F070C] opacity-80 cursor-not-allowed' : 'bg-[#9E090F] hover:bg-[#7F070C]'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري التحقق...
              </span>
            ) : (
              <>
                تسجيل الدخول
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      <div className="mt-8 text-xs text-gray-400 z-10">
        &copy; 2026 RestoAdmin System. جميع الحقوق محفوظة.
      </div>
    </div>
  );
};

export default Login;