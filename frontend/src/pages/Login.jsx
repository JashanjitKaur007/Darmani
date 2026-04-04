// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Brain, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//     if (error) setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const result = await login(formData.email, formData.password);
    
//     if (!result.success) {
//       setError(result.message);
//     }
    
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <div className="flex justify-center">
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
//               <Brain className="h-10 w-10 text-white" />
//             </div>
//           </div>
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Welcome back to eyra
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Sign in to continue your mental wellness journey
//           </p>
//         </div>

//         {/* Form */}
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && (
//             <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center space-x-2">
//               <AlertCircle className="h-5 w-5 text-red-500" />
//               <span className="text-red-700">{error}</span>
//             </div>
//           )}

//           <div className="space-y-4">
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="pl-10 pr-10 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//             >
//               {loading ? (
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//               ) : (
//                 'Sign In'
//               )}
//             </button>
//           </div>

//           {/* Register Link */}
//           <div className="text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{' '}
//               <Link
//                 to="/register"
//                 className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
//               >
//                 Create one now
//               </Link>
//             </p>
//           </div>
//         </form>

//         {/* Features */}
//         <div className="mt-8">
//           <div className="grid grid-cols-2 gap-4 text-center">
//             <div className="p-4 bg-blue-50 rounded-lg">
//               <div className="text-blue-600 text-sm font-medium">AI-Powered</div>
//               <div className="text-gray-600 text-xs">Advanced analysis</div>
//             </div>
//             <div className="p-4 bg-purple-50 rounded-lg">
//               <div className="text-purple-600 text-sm font-medium">Secure</div>
//               <div className="text-gray-600 text-xs">Privacy protected</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Brain, Mail, Lock, Eye, EyeOff, AlertCircle, Sparkles } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    if (!result.success) {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8faf7] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Subtle Background Depth - Inspired by wellness Figma templates */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        
        {/* Logo & Branding */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-6">
            {/* <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-xl">
              <Brain className="w-11 h-11 text-white" strokeWidth={1.7} />
            </div> */}
            {/* <div className="absolute -bottom-1 -right-1 bg-white rounded-2xl p-1.5 shadow">
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div> */}
          </div>

          {/* <h1 className="text-4xl font-semibold tracking-tight text-slate-900">eyra</h1> */}
          <p className="text-emerald-700/80 text-lg font-light mt-1">Gentle AI Companion</p>
        </div>

        {/* Professional Login Card */}
        <div className="bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-3xl shadow-2xl p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-medium text-slate-900">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Welcome Back
              </span></h2>
            <p className="mt-3 text-slate-600 text-[15px]">
              Sign in to continue your journey of calm and clarity
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex gap-3 text-sm">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 py-4 bg-white border border-slate-200 rounded-2xl text-base focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all placeholder-slate-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-14 py-4 bg-white border border-slate-200 rounded-2xl text-base focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all placeholder-slate-400"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-[18px] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-2xl text-lg shadow-lg shadow-emerald-500/20 active:scale-[0.985] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-slate-600 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-emerald-700 hover:text-emerald-800 transition-colors">
                Create free account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Trust Line */}
        <div className="text-center mt-10">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-5">
            <span>🔒 Secure & Private</span>
            <span>•</span>
            <span>Always here gently</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;