// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Brain, User, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { register } = useAuth();

//   const passwordRequirements = [
//     { regex: /.{8,}/, text: 'At least 8 characters' },
//     { regex: /[A-Z]/, text: 'One uppercase letter' },
//     { regex: /[a-z]/, text: 'One lowercase letter' },
//     { regex: /\d/, text: 'One number' }
//   ];

//   const getPasswordStrength = (password) => {
//     const passedTests = passwordRequirements.filter(req => req.regex.test(password)).length;
//     return passedTests;
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//     if (error) setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     // Validation
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     if (getPasswordStrength(formData.password) < 4) {
//       setError('Password does not meet requirements');
//       return;
//     }

//     setLoading(true);

//     const result = await register(formData.name, formData.email, formData.password);
    
//     if (!result.success) {
//       setError(result.message);
//     }
    
//     setLoading(false);
//   };

//   const passwordStrength = getPasswordStrength(formData.password);
//   const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
//   const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];

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
//             Join eyra
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Create your account and start your mental wellness journey
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
//             {/* Name */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//             </div>

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
//                   placeholder="Create a password"
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
              
//               {/* Password Strength */}
//               {formData.password && (
//                 <div className="mt-2">
//                   <div className="flex items-center space-x-2 mb-2">
//                     <div className="flex-1 bg-gray-200 rounded-full h-2">
//                       <div
//                         className={`h-2 rounded-full transition-all duration-300 ${strengthColors[passwordStrength - 1] || 'bg-gray-200'}`}
//                         style={{ width: `${(passwordStrength / 4) * 100}%` }}
//                       ></div>
//                     </div>
//                     <span className="text-sm text-gray-600">
//                       {strengthLabels[passwordStrength - 1] || 'Too weak'}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-1">
//                     {passwordRequirements.map((req, index) => {
//                       const passed = req.regex.test(formData.password);
//                       return (
//                         <div key={index} className="flex items-center space-x-2 text-xs">
//                           {passed ? (
//                             <CheckCircle className="h-3 w-3 text-green-500" />
//                           ) : (
//                             <div className="h-3 w-3 border border-gray-300 rounded-full"></div>
//                           )}
//                           <span className={passed ? 'text-green-600' : 'text-gray-500'}>
//                             {req.text}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="pl-10 pr-10 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Confirm your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                   )}
//                 </button>
//               </div>
//               {formData.confirmPassword && (
//                 <div className="mt-1">
//                   {formData.password === formData.confirmPassword ? (
//                     <div className="flex items-center space-x-1 text-green-600 text-xs">
//                       <CheckCircle className="h-3 w-3" />
//                       <span>Passwords match</span>
//                     </div>
//                   ) : (
//                     <div className="flex items-center space-x-1 text-red-600 text-xs">
//                       <AlertCircle className="h-3 w-3" />
//                       <span>Passwords do not match</span>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={loading || passwordStrength < 4 || formData.password !== formData.confirmPassword}
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//             >
//               {loading ? (
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//               ) : (
//                 'Create Account'
//               )}
//             </button>
//           </div>

//           {/* Login Link */}
//           <div className="text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{' '}
//               <Link
//                 to="/login"
//                 className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
//               >
//                 Sign in here
//               </Link>
//             </p>
//           </div>
//         </form>

//         {/* Terms */}
//         <div className="text-center">
//           <p className="text-xs text-gray-500">
//             By creating an account, you agree to our{' '}
//             <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>{' '}
//             and{' '}
//             <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Brain, User, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const passwordRequirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /[A-Z]/, text: 'One uppercase letter' },
    { regex: /[a-z]/, text: 'One lowercase letter' },
    { regex: /\d/, text: 'One number' }
  ];

  const getPasswordStrength = (password) => {
    return passwordRequirements.filter(req => req.regex.test(password)).length;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (getPasswordStrength(formData.password) < 4) {
      setError('Please meet all password requirements');
      return;
    }

    setLoading(true);

    const result = await register(formData.name, formData.email, formData.password);
    
    if (!result.success) {
      setError(result.message);
    }
    
    setLoading(false);
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthColors = ['bg-red-400', 'bg-orange-400', 'bg-amber-400', 'bg-emerald-500'];
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="min-h-screen bg-[#f8faf7] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Soft Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[520px] h-[520px] bg-emerald-100/40 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-20 w-[460px] h-[460px] bg-teal-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          {/* <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-800/10">
              <Brain className="w-11 h-11 text-white" strokeWidth={1.7} />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-2xl p-1.5 shadow">
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
          </div> */}

          {/* <h1 className="text-4xl font-semibold tracking-tight text-slate-900">eyra</h1> */}
          {/* <p className="text-emerald-700/80 text-lg font-light mt-1">Gentle AI Companion</p> */}

          <div className="mt-10 text-center">
            {/* <h1 className="text-emerald-700/80 text-lg font-light mt-1">Create your account</h1> */}
          <h1 className="text-5xl text-emerald-700/80 font-light mt-1">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Create your account</span>
          </h1>
            <p className="mt-3 text-slate-600 text-[15px]">
              Start your journey toward calm, clarity, and inner peace
            </p>
          </div>
        </div>

        {/* Premium Card */}
        <div className="bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-3xl shadow-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-7">
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="name" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 py-4 bg-white border border-slate-200 rounded-2xl text-base focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all placeholder-slate-400"
                  placeholder="Alex Rivera"
                />
              </div>
            </div>

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
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-slate-600">Password Strength</span>
                    <span className="text-xs font-medium text-emerald-700">
                      {strengthLabels[passwordStrength - 1] || 'Too weak'}
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${strengthColors[passwordStrength - 1] || 'bg-slate-200'}`}
                      style={{ width: `${(passwordStrength / 4) * 100}%` }}
                    />
                  </div>

                  <div className="mt-3 space-y-2">
                    {passwordRequirements.map((req, index) => {
                      const passed = req.regex.test(formData.password);
                      return (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          {passed ? (
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <div className="h-4 w-4 border border-slate-300 rounded-full" />
                          )}
                          <span className={passed ? 'text-emerald-700' : 'text-slate-500'}>
                            {req.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-12 pr-14 py-4 bg-white border border-slate-200 rounded-2xl text-base focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all placeholder-slate-400"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {formData.confirmPassword && (
                <div className="mt-2 flex items-center gap-1.5 text-xs">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-emerald-700">Passwords match</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-red-600">Passwords do not match</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={loading || passwordStrength < 4 || formData.password !== formData.confirmPassword}
              className="w-full py-[18px] mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-2xl text-lg shadow-lg shadow-emerald-500/20 active:scale-[0.985] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-slate-600 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-emerald-700 hover:text-emerald-800 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">
            By creating an account, you agree to our{' '}
            <a href="#" className="hover:text-emerald-700 transition-colors">Terms</a> and{' '}
            <a href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;