// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Brain, Menu, X, ChevronDown, User } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const languages = [
//     { flag: '🇬🇧', lang: 'English', code: 'en' },
//     { flag: '🇪🇸', lang: 'Español', code: 'es' },
//     { flag: '🇮🇳', lang: 'हिंदी', code: 'hi' },
//     { flag: '🇩🇪', lang: 'Deutsch', code: 'de' },
//     { flag: '🇨🇳', lang: '中文', code: 'zh' },
//     { flag: '🇫🇷', lang: 'Français', code: 'fr' },
//     { flag: '🇸🇦', lang: 'العربية', code: 'ar' },
//   ];

//   const changeLanguage = (code) => {
//     i18n.changeLanguage(code);
//   };

//   return (
//     // <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
//     //   <div className="max-w-7xl mx-auto px-6 lg:px-8">
//     //     <div className="flex justify-between items-center h-16">

//     //       <Link to="/about" className="flex items-center gap-x-3">
//     //         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2.5 rounded-2xl">
//     //           <Brain className="h-7 w-7 text-white" />
//     //         </div>
//     //         <span className="text-2xl font-bold tracking-tight text-gray-900">Darmani</span>
//     //       </Link>

//     //       <div className="hidden md:flex items-center gap-x-8 text-base font-medium text-gray-700">
//     //         <Link to="/about">{t('home')}</Link>
//     //         <Link to="/face-analysis">{t('faceAnalysis')}</Link>
//     //         {/* <Link to="/home">{t('chat')}</Link> */}

//     //         <div className="relative group">
//     //           <button className="flex items-center gap-x-1 hover:text-purple-600 py-4">
//     //             {t('commonStruggles')}
//     //             <ChevronDown className="h-4 w-4 group-hover:rotate-180" />
//     //           </button>
//     //           {/* dropdown here */}
//     //         </div>
//     //         <Link to="/home">{t('chat')}</Link>
//     //       </div>

//     //       <div className="hidden md:flex items-center gap-x-6">
//     //         {/* Language Selector */}
//     //         <div className="relative group">
//     //           <button className="flex items-center gap-x-2 py-4 text-gray-700 hover:text-gray-900">
//     //             <span className="text-xl">
//     //               {languages.find(l => l.code === i18n.language)?.flag || '🌐'}
//     //             </span>
//     //             {languages.find(l => l.code === i18n.language)?.lang || 'Language'}
//     //             <ChevronDown className="h-4 w-4" />
//     //           </button>

//     //           <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border py-3 hidden group-hover:block z-50">
//     //             {languages.map(item => (
//     //               <button
//     //                 key={item.code}
//     //                 onClick={() => changeLanguage(item.code)}
//     //                 className="w-full flex items-center gap-x-3 px-6 py-3 hover:bg-gray-50 text-left"
//     //               >
//     //                 <span className="text-lg">{item.flag}</span>
//     //                 <span>{item.lang}</span>
//     //               </button>
//     //             ))}
//     //           </div>
//     //         </div>

//     //         {user ? (
//     //           <div className="flex items-center gap-x-5">
//     //             <Link to="/profile" className="flex items-center gap-x-2 hover:text-purple-600 transition-colors">
//     //               <User className="h-5 w-5" />
//     //               {user.name?.split(' ')[0]}
//     //             </Link>
//     //             <button onClick={handleLogout} className="hover:text-purple-600 transition-colors">{t('logout')}</button>
//     //           </div>
//     //         ) : (
//     //           <Link to="/home" className="px-6 py-2.5 bg-purple-600 text-white rounded-2xl">
//     //             {t('getStarted')}
//     //           </Link>
//     //         )}
//     //       </div>

//     //       <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700">
//     //         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//     //       </button>
//     //     </div>
//     //   </div>
//     // </nav>
//   );
// };

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Leaf, Menu, X, User, MessageCircle, Camera, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between gap-6">

          {/* LEFT: LOGO */}
          <Link to="/about" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-inner">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-2xl tracking-tight text-slate-900">
              Darmani
            </span>
          </Link>

          {/* CENTER: NAV LINKS */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 mx-auto">
            <Link to="/about" className="hover:text-emerald-700 transition">Home</Link>
            <a href="#story" className="hover:text-emerald-700 transition">Our Story</a>
            <a href="#how" className="hover:text-emerald-700 transition">How It Works</a>
            <a href="#features" className="hover:text-emerald-700 transition">Features</a>
            <a href="#values" className="hover:text-emerald-700 transition">Values</a>
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {user ? (
              <div className="flex items-center gap-2">

                {/* Chat */}
                <Link 
                  to="/home" 
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-xl transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat
                </Link>

                {/* Face Analysis */}
                <Link 
                  to="/face-analysis" 
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-xl transition"
                >
                  <Camera className="w-5 h-5" />
                  Face Analysis
                </Link>

                {/* PROFILE + LOGOUT */}
                <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
                  <Link 
                    to="/profile" 
                    className="flex items-center gap-2 hover:text-emerald-700 transition"
                  >
                    <User className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      {user.name?.split(' ')[0]?.slice(0, 8) || 'Profile'}
                    </span>
                  </Link>

                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-1 px-2 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/register" 
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition shadow-sm"
              >
                Start Free
              </Link>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden ml-auto p-2"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-4 text-slate-700">

          <Link to="/about" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/face-analysis" onClick={() => setIsOpen(false)} className="block">Face Analysis</Link>
          <Link to="/home" onClick={() => setIsOpen(false)} className="block">Chat</Link>

          <div className="border-t pt-4 space-y-2">
            <a href="#story" className="block">Our Story</a>
            <a href="#how" className="block">How It Works</a>
            <a href="#features" className="block">Features</a>
            <a href="#values" className="block">Values</a>
          </div>

          {user && (
            <div className="border-t pt-4 space-y-3">
              <Link to="/profile" className="flex items-center gap-2">
                <User className="w-5 h-5" /> Profile
              </Link>
              <button 
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="flex items-center gap-2 text-red-600"
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Leaf, Menu, X, User, MessageCircle, Camera, LogOut } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
//       <div className="max-w-7xl mx-auto px-6 py-5">
//         <div className="flex items-center justify-between">

//           {/* Hamburger Button (Left) */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)} 
//             className="md:hidden p-3 text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>

//           {/* Logo */}
//           <Link to="/about" className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-inner">
//               <Leaf className="w-6 h-6 text-white" />
//             </div>
//             <span className="font-semibold text-3xl tracking-[-2px] text-slate-900">Darmani</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-x-10 text-sm font-medium text-slate-600">
//             <Link to="/about" className="hover:text-emerald-700 transition-colors">Home</Link>
//             <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
//             <a href="#story" className="hover:text-emerald-700 transition-colors">Our Story</a>
//             <a href="#how" className="hover:text-emerald-700 transition-colors">How It Works</a>
//             <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
//             <a href="#values" className="hover:text-emerald-700 transition-colors">Values</a>
//           </div>

//           </div>

//           {/* Right Side - Profile & Logout */}
//           <div className="hidden md:flex items-center gap-x-4">
//             {user ? (
//               <div className="flex items-center gap-x-6">
//                 {/* Quick Chat & Face Analysis */}
//                 <Link 
//                   to="/home" 
//                   className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-2xl transition-all"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                   Chat
//                 </Link>

//                 <Link 
//                   to="/face-analysis" 
//                   className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-2xl transition-all"
//                 >
//                   <Camera className="w-5 h-5" />
//                   Face Analysis
//                 </Link>

//                 {/* Profile & Logout */}
//                 <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
//                   <Link 
//                     to="/profile" 
//                     className="flex items-center gap-x-3 hover:text-emerald-700 transition-colors"
//                   >
//                     <div className="w-9 h-9 bg-slate-100 rounded-2xl flex items-center justify-center">
//                       <User className="h-5 w-5 text-slate-600" />
//                     </div>
//                     <span className="font-medium text-slate-900 text-sm">
//                       {user.name?.split(' ')[0] || 'Profile'}
//                     </span>
//                   </Link>

//                   <button 
//                     onClick={handleLogout}
//                     className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all"
//                   >
//                     <LogOut className="w-4 h-4" />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <Link 
//                 to="/register" 
//                 className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all shadow-sm hover:shadow-md"
//               >
//                 Start Free Today
//               </Link>
//             )}
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu (Hamburger) */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-slate-200 px-6 py-8">
//           <div className="flex flex-col gap-y-6 text-lg font-medium text-slate-700">
//             <Link to="/home" onClick={() => setIsOpen(false)} className="py-2">Home</Link>
//             <Link to="/face-analysis" onClick={() => setIsOpen(false)} className="py-2">Face Analysis</Link>
//             <Link to="/about" onClick={() => setIsOpen(false)} className="py-2">About</Link>
//             <Link to="/home" onClick={() => setIsOpen(false)} className="py-2">Chat</Link>

//             <div className="border-t border-slate-100 pt-6 mt-4">
//               <Link to="/about#story" onClick={() => setIsOpen(false)} className="py-2 block">Our Story</Link>
//               <Link to="/about#how" onClick={() => setIsOpen(false)} className="py-2 block">How It Works</Link>
//               <Link to="/about#features" onClick={() => setIsOpen(false)} className="py-2 block">Features</Link>
//             </div>

//             {user && (
//               <div className="border-t border-slate-100 pt-6 mt-6 flex flex-col gap-y-6">
//                 <Link 
//                   to="/profile" 
//                   onClick={() => setIsOpen(false)} 
//                   className="flex items-center gap-3 py-2"
//                 >
//                   <User className="h-5 w-5" /> Profile
//                 </Link>
//                 <button 
//                   onClick={() => { handleLogout(); setIsOpen(false); }} 
//                   className="flex items-center gap-3 py-2 text-red-600"
//                 >
//                   <LogOut className="h-5 w-5" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;