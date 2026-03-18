import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[440px] border-x border-border"></div>
      </div>

      <div className="border-y border-border flex justify-center">
        
        <div className="w-full max-w-[440px] bg-surface shadow-custom px-10 py-12 border-x border-border flex flex-col">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text mb-2">Welcome back</h2>
            <p className="text-sm text-text-secondary">Sign in to manage your restaurant operations.</p>
          </div>

          <form className="space-y-6">
            <div className="text-left">
              <label className="block text-xs font-bold text-text mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="admin@restaurant.com"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div className="text-left">
              <label className="block text-xs font-bold text-text mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <button
              type="button"
              className="w-full bg-primary hover:bg-primary-hover text-surface font-medium py-3 rounded-lg text-sm transition-colors mt-2 flex justify-center items-center gap-2"
            >
              Sign in
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-text-secondary font-medium">
            Forgot your password? <a href="#" className="text-primary hover:underline">Reset password</a>
          </div>

        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[440px] border-x border-border flex flex-col justify-end pb-10">
          <div className="text-center text-xs text-text-secondary font-medium">
            © 2026 RestoAdmin System. All rights reserved.
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
