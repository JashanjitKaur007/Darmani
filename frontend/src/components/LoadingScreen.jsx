import React from 'react';
import { Leaf, Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-6">

      <div className="text-center max-w-md w-full">
        
        {/* Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-28 h-28 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center shadow-sm">
            <Leaf className="w-14 h-14 text-emerald-600 animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            eyra
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Preparing a calm space for you...
        </p>

        {/* Loader */}
        <div className="flex items-center justify-center gap-2 text-slate-500">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm">Getting things ready</span>
        </div>

        {/* Subtle Progress Bar */}
        <div className="mt-10">
          <div className="w-40 h-1.5 bg-slate-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;