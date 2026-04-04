// import React from 'react';
// import { Brain, Heart, Shield, Users } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
//                 <Brain className="h-6 w-6 text-white" />
//               </div>
//               <span className="text-xl font-bold">MindCare AI</span>
//             </div>
//             <p className="text-gray-300 mb-4 max-w-md">
//               Empowering mental wellness through AI-powered insights and personalized support. 
//               Your journey to better mental health starts here.
//             </p>
//             <div className="flex space-x-4">
//               <div className="flex items-center space-x-2 text-sm text-gray-400">
//                 <Shield className="h-4 w-4" />
//                 <span>HIPAA Compliant</span>
//               </div>
//               <div className="flex items-center space-x-2 text-sm text-gray-400">
//                 <Heart className="h-4 w-4" />
//                 <span>24/7 Support</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-gray-300">
//               <li><a href="/home" className="hover:text-blue-400 transition-colors">Home</a></li>
//               <li><a href="/history" className="hover:text-blue-400 transition-colors">History</a></li>
//               <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Support</h3>
//             <ul className="space-y-2 text-gray-300">
//               <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-8 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-4 text-gray-400 text-sm">
//               <span>© 2025 MindCare AI. All rights reserved.</span>
//             </div>
//             <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
//               <Users className="h-4 w-4" />
//               <span>Trusted by thousands worldwide</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Leaf, Heart, Shield, Users, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Brand Section - Left Side */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-inner">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="font-semibold text-4xl tracking-[-2px] text-white">Darmani</span>
            </div>

            <p className="text-lg text-slate-400 max-w-md leading-relaxed mb-10">
              A gentle AI companion offering compassionate mental health support through intelligent insights and heartfelt care.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-900/50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Privacy Protected</p>
                  <p className="text-xs text-slate-500">End-to-end encrypted</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-900/50 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Always Here</p>
                  <p className="text-xs text-slate-500">24/7 compassionate support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-tight">Platform</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/home" className="hover:text-emerald-400 transition-colors">Chat with Darmani</Link></li>
              <li><Link to="/face-analysis" className="hover:text-emerald-400 transition-colors">Face Analysis</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Our Story</Link></li>
              <li><Link to="/about#how" className="hover:text-emerald-400 transition-colors">How It Works</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-tight">Company</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Values</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-tight">Legal</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Copyright */}
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Darmani. All rights reserved.
            </div>

            {/* Disclaimer */}
            <div className="text-center md:text-left max-w-2xl text-xs leading-relaxed text-slate-500">
              Darmani provides supportive AI-guided insights and emotional companionship. 
              It is not a substitute for professional mental health care. In case of crisis, 
              please contact your local emergency services or a licensed mental health professional immediately.
            </div>

            {/* Social / Trust */}
            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4" />
                <span>Trusted by 50,000+</span>
              </div>
              
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;